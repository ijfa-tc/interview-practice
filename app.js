// =============================================================
// 面接練習（ランダム質問） / Latihan Wawancara
// 素のJavaScriptのみ。質問データは questions.js にあります。
// =============================================================
(function () {
  "use strict";

  var DATA = window.QUESTION_DATA;
  var STORAGE_KEY = "ijfa_interview_records";
  var ID_PATTERN = /^[A-Z]{3}[0-9]{5}$/;

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
    mode: "key",        // key / all / cat
    count: 10,
    cats: [],           // 選んだカテゴリ
    list: [],           // 今回の質問
    index: 0,
    results: [],        // { qid, rate }
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
  function show(screen) {
    ["screenStart", "screenPractice", "screenResult"].forEach(function (s) {
      $(s).classList.toggle("hidden", s !== screen);
    });
    window.scrollTo(0, 0);
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  // 日本時間ではなく端末の時刻で「YYYY-MM-DD HH:MM:SS」
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
    var btns = document.querySelectorAll("#modeChoices .choice");
    btns.forEach(function (b) { b.classList.toggle("on", b.dataset.mode === state.mode); });
    $("catBox").classList.toggle("hidden", state.mode !== "cat");
    $("countBox").classList.toggle("hidden", state.mode === "key");
    if (state.mode === "cat") renderCats();
    updateStartButton();
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

  // ---------- 質問をえらぶ ----------
  function buildList(setup) {
    var pool;
    if (setup.mode === "retry") {
      return shuffle(setup.ids.map(qById).filter(Boolean));
    }
    if (setup.mode === "key") {
      pool = DATA.questions.filter(function (q) { return q.key; });
      return shuffle(pool);
    }
    if (setup.mode === "cat") {
      pool = DATA.questions.filter(function (q) { return setup.cats.indexOf(q.cat) >= 0; });
    } else {
      pool = DATA.questions.slice();
    }
    return shuffle(pool).slice(0, setup.count);
  }

  function modeLabel(setup) {
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
    var q = state.list[state.index];
    var total = state.list.length;
    var c = catOf(q.cat);

    $("progressText").textContent = (state.index + 1) + " / " + total;
    $("progressFill").style.width = ((state.index) / total * 100) + "%";
    $("qCat").innerHTML = (q.key ? '<span class="star">★ じゅうよう</span> ・ ' : "") +
      esc(c.ja) + " / " + esc(c.id_);
    $("qText").textContent = q.ja;
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
    var q = state.list[state.index];
    $("btnAnswered").classList.add("hidden");
    if (q.followups && q.followups.length) {
      $("followBox").innerHTML = "<h2>つぎに きかれるかも<span>Mungkin ditanya lagi — coba jawab juga</span></h2><ul>" +
        q.followups.map(function (f) { return "<li>" + esc(f[0]) + "<span>" + esc(f[1]) + "</span></li>"; }).join("") +
        "</ul>";
      $("followBox").classList.remove("hidden");
    }
    $("afterBox").classList.remove("hidden");
    $("afterBox").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onRate(rate) {
    var q = state.list[state.index];
    var sec = Math.floor((Date.now() - state.qStartedAt) / 1000);
    state.results.push({ qid: q.id, rate: rate, sec: sec });
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

    // 将来 GAS →「IJFA テスト結果DB」に送れる形
    var record = {
      timestamp: localStamp(now),                 // 受験日時（端末の時刻）
      timestampISO: now.toISOString(),            // 受験日時（世界標準時）
      studentId: studentId,                       // 生徒ID（なければ空）
      practiceName: DATA.practiceName,            // 練習名
      result: {                                   // 結果
        modeLabel: modeLabel(state.lastSetup),
        total: total,
        good: good,
        some: some,
        ng: ng,
        score: total ? Math.round((good * 2 + some) / (total * 2) * 100) : 0,
        durationSec: Math.round((now - state.startedAt) / 1000),
        items: state.results
      }
    };
    saveRecord(record);

    $("rGood").textContent = good;
    $("rSome").textContent = some;
    $("rNg").textContent = ng;
    var msg;
    if (ng === 0 && some === 0) msg = "ぜんぶ いえました！ つぎは ほかの しつもんにも ちょうせん。<span>Semua bisa! Coba pertanyaan lain juga.</span>";
    else if (good >= total / 2) msg = "いい ちょうしです。△× を もういちど れんしゅうしましょう。<span>Bagus. Ulangi soal △ dan ×.</span>";
    else msg = "まいにち すこしずつ。△× を もういちど やってみましょう。<span>Sedikit demi sedikit setiap hari. Ulangi soal △ dan ×.</span>";
    $("rMsg").innerHTML = msg;

    var weak = state.results.filter(function (r) { return r.rate !== "good"; });
    if (weak.length) {
      $("reviewBox").innerHTML = "<h3>れんしゅうが ひつよう / Perlu latihan lagi</h3>" +
        weak.map(function (r) {
          var q = qById(r.qid);
          return '<div class="ritem"><span class="mark ' + r.rate + '" style="display:inline">' +
            (r.rate === "some" ? "△" : "×") + "</span> <b>" + esc(q.ja) + "</b><span>" + esc(q.id_) + "</span></div>";
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
  document.querySelectorAll("#countChoices button").forEach(function (b) {
    b.addEventListener("click", function () { state.count = Number(b.dataset.count); renderCounts(); });
  });
  $("btnStart").addEventListener("click", function () {
    startPractice({ mode: state.mode, count: state.count, cats: state.cats.slice() });
  });
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
  $("btnAgain").addEventListener("click", function () {
    startPractice({ mode: state.mode, count: state.count, cats: state.cats.slice() });
  });
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
