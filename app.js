// =============================================================
// 面接練習 / Latihan Wawancara
// 素のJavaScriptのみ。質問・言い方・流れのデータは questions.js にあります。
// =============================================================
(function () {
  "use strict";

  var DATA = window.QUESTION_DATA;
  var VARIANTS = DATA.variants || {};
  var FLOW = DATA.flow;
  var STORAGE_KEY = "ijfa_interview_records";
  var ID_PATTERN = /^[A-Z]{3}[0-9]{5}$/;

  var LEVELS = {
    basic: { ja: "入門", note: "しつもんの じゅんばんは いつも おなじ。いいかた だけが かわります。<br><span>Urutan pertanyaan selalu sama. Hanya cara bertanya yang berubah.</span>" },
    mid:   { ja: "初級", note: "しつもん・いいかた・ふかぼり しつもんが ランダムに かわります。<br><span>Pertanyaan, cara bertanya, dan pertanyaan lanjutan berubah secara acak.</span>" },
    final: { ja: "直前", note: "じゅんばんも かわり、とつぜんの しつもんも でます。ほんばんと おなじ きもちで。<br><span>Urutan juga berubah dan ada pertanyaan mendadak. Anggap seperti wawancara asli.</span>" }
  };

  // ---------- 生徒ID（URLの ?id=JKT16001） ----------
  var studentId = "";
  try {
    var raw = new URLSearchParams(location.search).get("id");
    if (raw) {
      raw = raw.trim().toUpperCase();
      if (ID_PATTERN.test(raw)) studentId = raw;
    }
  } catch (e) { /* IDなしでも練習できる */ }

  // ---------- 状態 ----------
  var state = {
    mode: "flow",       // flow / key / all / cat
    level: "mid",       // basic / mid / final（flowのとき）
    count: 10,
    cats: [],
    list: [],           // 今回の出題 { q, v, stage, surprise }
    index: 0,
    results: [],        // { qid, v, rate, sec }
    startedAt: null,
    timerId: null,
    qStartedAt: 0,
    lastSetup: null
  };

  // ---------- 便利関数 ----------
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pickOne(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function catOf(code) {
    for (var i = 0; i < DATA.categories.length; i++) {
      if (DATA.categories[i].cat === code) return DATA.categories[i];
    }
    return { ja: "", id_: "" };
  }
  function qById(id) {
    for (var i = 0; i < DATA.questions.length; i++) {
      if (DATA.questions[i].id === id) return DATA.questions[i];
    }
    return null;
  }
  // その質問の言い方ぜんぶ（0番 = もとの言い方）
  function allWays(q) { return [q.ja].concat(VARIANTS[q.id] || []); }
  function randomWay(q) { return Math.floor(Math.random() * allWays(q).length); }

  function show(screen) {
    ["screenStart", "screenPractice", "screenResult"].forEach(function (s) {
      $(s).classList.toggle("hidden", s !== screen);
    });
    window.scrollTo(0, 0);
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function localStamp(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
  }

  // ---------- 記録（このスマホの中だけに保存） ----------
  function loadRecords() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      return s ? JSON.parse(s) : [];
    } catch (e) { return []; }
  }
  function saveRecord(rec) {
    try {
      var all = loadRecords();
      all.push(rec);
      if (all.length > 200) all = all.slice(all.length - 200);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch (e) { /* 保存できなくても練習は続けられる */ }
  }

  // ---------- スタート画面 ----------
  function renderBadge() {
    $("idBadge").textContent = studentId ? "ID: " + studentId : "ID なし / Tanpa ID";
  }

  function renderCats() {
    var box = $("catBox");
    box.innerHTML = "";
    DATA.categories.forEach(function (c) {
      var n = DATA.questions.filter(function (q) { return q.cat === c.cat; }).length;
      var b = document.createElement("button");
      b.className = "cat" + (state.cats.indexOf(c.cat) >= 0 ? " on" : "");
      b.innerHTML = esc(c.ja) + "（" + n + "）<small>" + esc(c.id_) + "</small>";
      b.addEventListener("click", function () {
        var i = state.cats.indexOf(c.cat);
        if (i >= 0) state.cats.splice(i, 1); else state.cats.push(c.cat);
        renderCats();
        updateStartButton();
      });
      box.appendChild(b);
    });
  }

  function renderModes() {
    document.querySelectorAll("#modeChoices .choice").forEach(function (b) {
      b.classList.toggle("on", b.dataset.mode === state.mode);
    });
    $("catBox").classList.toggle("hidden", state.mode !== "cat");
    $("countBox").classList.toggle("hidden", state.mode === "key" || state.mode === "flow");
    $("levelBox").classList.toggle("hidden", state.mode !== "flow");
    if (state.mode === "cat") renderCats();
    renderLevels();
    updateStartButton();
  }

  function renderLevels() {
    document.querySelectorAll("#levelChoices button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.level === state.level);
    });
    $("levelNote").innerHTML = LEVELS[state.level].note;
  }

  function renderCounts() {
    document.querySelectorAll("#countChoices button").forEach(function (b) {
      b.classList.toggle("on", Number(b.dataset.count) === state.count);
    });
  }

  function updateStartButton() {
    $("btnStart").disabled = (state.mode === "cat" && state.cats.length === 0);
  }

  function renderHistory() {
    var list = loadRecords().filter(function (r) {
      return !studentId || r.studentId === studentId;
    }).slice(-5).reverse();
    var box = $("historyList");
    if (list.length === 0) {
      box.innerHTML = '<p class="empty">まだ きろくが ありません。<br>Belum ada riwayat.</p>';
      return;
    }
    box.innerHTML = list.map(function (r) {
      var res = r.result || {};
      return '<div class="hitem"><span class="hdate">' + esc(r.timestamp.slice(5, 16)) + "</span>" +
        "<span>" + esc(res.modeLabel || "") + "</span>" +
        "<span>◎" + (res.good || 0) + " △" + (res.some || 0) + " ×" + (res.ng || 0) + "</span></div>";
    }).join("");
  }

  // ---------- 出題リストを作る ----------
  function item(q, stage, surprise) {
    return { q: q, v: randomWay(q), stage: stage || null, surprise: !!surprise };
  }

  // 面接の流れ：段階は固定、中身をランダムに
  function buildFlow(level) {
    var stages = FLOW.stages.slice();

    // 直前：movable の段階だけ順番を入れかえる
    if (level === "final") {
      var idx = [], mov = [];
      stages.forEach(function (s, i) { if (s.movable) { idx.push(i); mov.push(s); } });
      mov = shuffle(mov);
      idx.forEach(function (pos, k) { stages[pos] = mov[k]; });
    }

    var list = [];
    stages.forEach(function (st) {
      st.slots.forEach(function (slot) {
        var prev = list.length ? list[list.length - 1].q.id : "";
        if (slot.onlyAfter && slot.onlyAfter !== prev) return;
        if (slot.chance && level !== "basic" && Math.random() >= slot.chance) return;
        var id = (level === "basic") ? slot.from[0] : pickOne(slot.from);
        var q = qById(id);
        if (q) list.push(item(q, st));
      });
    });

    // 直前：とつぜん質問を1つ、最初と最後以外のどこかに入れる
    if (level === "final" && FLOW.surprise && list.length > 2) {
      var used = list.map(function (it) { return it.q.id; });
      var cand = FLOW.surprise.filter(function (id) { return used.indexOf(id) < 0; });
      if (cand.length) {
        var sq = qById(pickOne(cand));
        var at = 2 + Math.floor(Math.random() * (list.length - 3));
        if (sq) list.splice(at, 0, item(sq, null, true));
      }
    }
    return list;
  }

  function buildList(setup) {
    var pool;
    if (setup.mode === "flow") return buildFlow(setup.level);
    if (setup.mode === "retry") {
      return shuffle(setup.ids.map(qById).filter(Boolean)).map(function (q) { return item(q); });
    }
    if (setup.mode === "key") {
      pool = DATA.questions.filter(function (q) { return q.key; });
      return shuffle(pool).map(function (q) { return item(q); });
    }
    if (setup.mode === "cat") {
      pool = DATA.questions.filter(function (q) { return setup.cats.indexOf(q.cat) >= 0; });
    } else {
      pool = DATA.questions.slice();
    }
    return shuffle(pool).slice(0, setup.count).map(function (q) { return item(q); });
  }

  function modeLabel(setup) {
    if (setup.mode === "flow") return "流れ・" + LEVELS[setup.level].ja;
    if (setup.mode === "key") return "重要10問";
    if (setup.mode === "retry") return "復習";
    if (setup.mode === "cat") return "カテゴリ";
    return "全体ランダム";
  }

  function startPractice(setup) {
    state.lastSetup = setup;
    state.list = buildList(setup);
    if (state.list.length === 0) return;
    state.index = 0;
    state.results = [];
    state.startedAt = new Date();
    show("screenPractice");
    showQuestion();
  }

  // ---------- 練習画面 ----------
  function showQuestion() {
    var it = state.list[state.index];
    var q = it.q;
    var total = state.list.length;

    $("progressText").textContent = (state.index + 1) + " / " + total;
    $("progressFill").style.width = (state.index / total * 100) + "%";

    var label;
    if (it.surprise) {
      label = '<span class="surprise">とつぜん しつもん！ / Pertanyaan mendadak!</span>';
    } else if (it.stage) {
      label = '<span class="stage">' + esc(it.stage.ja) + "</span>" + esc(it.stage.id_);
    } else {
      var c = catOf(q.cat);
      label = (q.key ? '<span class="star">★ じゅうよう</span> ・ ' : "") + esc(c.ja) + " / " + esc(c.id_);
    }
    $("qCat").innerHTML = label;
    $("qText").textContent = allWays(q)[it.v];
    $("qTrans").textContent = q.id_;
    $("qTrans").classList.add("hidden");
    $("btnTrans").innerHTML = "いみ を みる<span>Lihat arti</span>";

    var hasHint = q.hints && q.hints.length > 0;
    $("btnHint").classList.toggle("hidden", !hasHint);
    $("hintBox").classList.add("hidden");
    if (hasHint) {
      $("hintBox").innerHTML = "<h2>かんがえる ヒント<span>Petunjuk untuk berpikir</span></h2><ul>" +
        q.hints.map(function (h) { return "<li>" + esc(h[0]) + "<span>" + esc(h[1]) + "</span></li>"; }).join("") +
        "</ul>";
    }

    $("btnAnswered").classList.remove("hidden");
    $("afterBox").classList.add("hidden");
    $("followBox").classList.add("hidden");
    $("variantBox").classList.add("hidden");

    startTimer();
  }

  function startTimer() {
    stopTimer();
    state.qStartedAt = Date.now();
    $("timer").textContent = "0:00";
    state.timerId = setInterval(function () {
      var s = Math.floor((Date.now() - state.qStartedAt) / 1000);
      $("timer").textContent = Math.floor(s / 60) + ":" + pad(s % 60);
    }, 500);
  }
  function stopTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
  }

  function onAnswered() {
    stopTimer();
    var it = state.list[state.index];
    var q = it.q;
    $("btnAnswered").classList.add("hidden");

    // ほかの聞き方
    var ways = allWays(q);
    if (ways.length > 1) {
      $("variantBox").innerHTML =
        "<h2>おなじ いみの ききかた<span>Cara bertanya lain (artinya sama)</span></h2><ul>" +
        ways.map(function (w, i) {
          return '<li class="' + (i === it.v ? "now" : "") + '">' + esc(w) + "</li>";
        }).join("") +
        '</ul><p class="vmean">いみ / Arti: ' + esc(q.id_) + "</p>";
      $("variantBox").classList.remove("hidden");
    }

    // 深掘り（ランダム練習のときだけ。流れでは次の質問として出る）
    if (!it.stage && !it.surprise && q.followups && q.followups.length) {
      $("followBox").innerHTML = "<h2>つぎに きかれるかも<span>Mungkin ditanya lagi — coba jawab juga</span></h2><ul>" +
        q.followups.map(function (f) { return "<li>" + esc(f[0]) + "<span>" + esc(f[1]) + "</span></li>"; }).join("") +
        "</ul>";
      $("followBox").classList.remove("hidden");
    }
    $("afterBox").classList.remove("hidden");
    $("afterBox").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onRate(rate) {
    var it = state.list[state.index];
    var sec = Math.floor((Date.now() - state.qStartedAt) / 1000);
    state.results.push({ qid: it.q.id, v: it.v, rate: rate, sec: sec });
    state.index++;
    if (state.index < state.list.length) {
      showQuestion();
      window.scrollTo(0, 0);
    } else {
      finish();
    }
  }

  // ---------- 結果 ----------
  function finish() {
    stopTimer();
    var good = 0, some = 0, ng = 0;
    state.results.forEach(function (r) {
      if (r.rate === "good") good++; else if (r.rate === "some") some++; else ng++;
    });
    var total = state.results.length;
    var now = new Date();
    var setup = state.lastSetup;

    // 将来 GAS →「IJFA テスト結果DB」に送れる形
    var record = {
      timestamp: localStamp(now),
      timestampISO: now.toISOString(),
      studentId: studentId,
      practiceName: setup.mode === "flow" ? FLOW.practiceName : DATA.practiceName,
      result: {
        modeLabel: modeLabel(setup),
        total: total,
        good: good,
        some: some,
        ng: ng,
        score: total ? Math.round((good * 2 + some) / (total * 2) * 100) : 0,
        durationSec: Math.round((now - state.startedAt) / 1000),
        items: state.results       // qid（質問番号）, v（言い方の番号）, rate, sec
      }
    };
    saveRecord(record);

    $("rGood").textContent = good;
    $("rSome").textContent = some;
    $("rNg").textContent = ng;
    var msg;
    if (ng === 0 && some === 0) msg = "ぜんぶ いえました！ つぎは レベルを あげてみましょう。<span>Semua bisa! Coba naikkan level.</span>";
    else if (good >= total / 2) msg = "いい ちょうしです。△× を もういちど れんしゅうしましょう。<span>Bagus. Ulangi soal △ dan ×.</span>";
    else msg = "まいにち すこしずつ。△× を もういちど やってみましょう。<span>Sedikit demi sedikit setiap hari. Ulangi soal △ dan ×.</span>";
    $("rMsg").innerHTML = msg;

    var weak = state.results.filter(function (r) { return r.rate !== "good"; });
    if (weak.length) {
      $("reviewBox").innerHTML = "<h3>れんしゅうが ひつよう / Perlu latihan lagi</h3>" +
        weak.map(function (r) {
          var q = qById(r.qid);
          return '<div class="ritem"><span class="mark ' + r.rate + '" style="display:inline">' +
            (r.rate === "some" ? "△" : "×") + "</span> <b>" + esc(allWays(q)[r.v] || q.ja) + "</b><span>" + esc(q.id_) + "</span></div>";
        }).join("");
      $("reviewBox").classList.remove("hidden");
      $("btnRetryNg").classList.remove("hidden");
    } else {
      $("reviewBox").classList.add("hidden");
      $("btnRetryNg").classList.add("hidden");
    }
    $("progressFill").style.width = "100%";
    show("screenResult");
  }

  // ---------- ボタン ----------
  document.querySelectorAll("#modeChoices .choice").forEach(function (b) {
    b.addEventListener("click", function () { state.mode = b.dataset.mode; renderModes(); });
  });
  document.querySelectorAll("#levelChoices button").forEach(function (b) {
    b.addEventListener("click", function () { state.level = b.dataset.level; renderLevels(); });
  });
  document.querySelectorAll("#countChoices button").forEach(function (b) {
    b.addEventListener("click", function () { state.count = Number(b.dataset.count); renderCounts(); });
  });
  function currentSetup() {
    return { mode: state.mode, level: state.level, count: state.count, cats: state.cats.slice() };
  }
  $("btnStart").addEventListener("click", function () { startPractice(currentSetup()); });
  $("btnTrans").addEventListener("click", function () {
    var t = $("qTrans");
    t.classList.toggle("hidden");
    this.innerHTML = t.classList.contains("hidden") ? "いみ を みる<span>Lihat arti</span>" : "いみ を かくす<span>Sembunyikan arti</span>";
  });
  $("btnHint").addEventListener("click", function () { $("hintBox").classList.toggle("hidden"); });
  $("btnAnswered").addEventListener("click", onAnswered);
  document.querySelectorAll(".rate .btn").forEach(function (b) {
    b.addEventListener("click", function () { onRate(b.dataset.rate); });
  });
  $("btnQuit").addEventListener("click", function () {
    if (state.results.length > 0) {
      finish();
    } else {
      stopTimer();
      goHome();
    }
  });
  $("btnRetryNg").addEventListener("click", function () {
    var ids = state.results.filter(function (r) { return r.rate !== "good"; }).map(function (r) { return r.qid; });
    startPractice({ mode: "retry", ids: ids });
  });
  $("btnAgain").addEventListener("click", function () { startPractice(currentSetup()); });
  $("btnHome").addEventListener("click", goHome);

  function goHome() {
    renderHistory();
    show("screenStart");
  }

  // ---------- 初期表示 ----------
  renderBadge();
  renderModes();
  renderCounts();
  renderHistory();
})();
