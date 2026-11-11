// =============================================================
// 面接練習 / Latihan Wawancara
// 素のJavaScriptのみ。質問・言い方・流れ・職種のデータは questions.js にあります。
// =============================================================
(function () {
  "use strict";

  var DATA = window.QUESTION_DATA;
  var VARIANTS = DATA.variants || {};
  var FLOW = DATA.flow;
  var JOBS = DATA.jobs || [];
  var POINTS = DATA.points || {};
  var STORAGE_KEY = "ijfa_interview_records";
  var AUDIO = {};            // audio/audio.json：{ "001_0": "更新日", ... }
  var player = new Audio();
  var preloader = new Audio();
  var ID_PATTERN = /^[A-Z]{3}[0-9]{5}$/;

  // ---------- ステップ（上から順番に進める） ----------
  var STEPS = [
    { n: 1, ja: "よく きかれる しつもん", id_: "Pertanyaan yang sering ditanya",
      what: "じぶんの こたえを つくる", whatId: "Buat jawaban sendiri",
      goal: "10もん ぜんぶ ◎", goalId: "Semua 10 soal ◎",
      setup: { mode: "key" } },
    { n: 2, ja: "めんせつの ながれ", id_: "Alur wawancara",
      what: "じゅんばんを おぼえる。しつもんは まいかい かわる", whatId: "Hafalkan urutan. Pertanyaan berubah setiap kali",
      goal: "◎ が 8わり いじょう", goalId: "◎ minimal 80%",
      setup: { mode: "flow", level: "mid" } },
    { n: 3, ja: "ほんばん れんしゅう", id_: "Latihan seperti wawancara asli",
      what: "しょくしゅを えらんで ほんばんと おなじ形で", whatId: "Pilih bidang kerja, seperti wawancara asli",
      goal: "めんせつの ひまで なんかいでも", goalId: "Ulangi sampai hari wawancara",
      setup: { mode: "flow", level: "final" } }
  ];

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
    list: [],           // 今回の出題 { q, v, stage, surprise, audio }
    index: 0,
    results: [],        // { qid, v, rate, sec, audio, hint, plays }
    startedAt: null,
    timerId: null,
    qStartedAt: 0,
    hint: 0,            // 0=音声だけ 1=ひらがなを見た 2=意味も見た
    plays: 0,
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
  function jobById(id) {
    for (var i = 0; i < JOBS.length; i++) { if (JOBS[i].id === id) return JOBS[i]; }
    return null;
  }
  // その質問の言い方ぜんぶ（0番 = もとの言い方）
  function allWays(q) { return [q.ja].concat(VARIANTS[q.id] || []); }
  function randomWay(q) { return Math.floor(Math.random() * allWays(q).length); }

  // ---------- 音声 ----------
  function audioKey(qid, v) { return qid + "_" + v; }
  function audioSrc(qid, v) {
    var k = audioKey(qid, v);
    return AUDIO[k] ? "audio/" + k + ".mp3?v=" + encodeURIComponent(AUDIO[k]) : "";
  }
  function playAudio(src) {
    if (!src) return;
    try {
      player.pause();
      player.src = src;
      $("btnPlay").classList.add("playing");
      var p = player.play();
      if (p && p.catch) p.catch(function () { $("btnPlay").classList.remove("playing"); });
    } catch (e) { /* 再生できなくても練習は続けられる */ }
  }
  player.addEventListener("ended", function () { $("btnPlay").classList.remove("playing"); });
  player.addEventListener("error", function () {
    $("btnPlay").classList.remove("playing");
    // 音声が読めなかったときは文字を出す
    $("qText").classList.remove("covered");
  });
  function preloadNext() {
    var nx = state.list[state.index + 1];
    var src = nx ? audioSrc(nx.q.id, nx.v) : "";
    if (src) { try { preloader.preload = "auto"; preloader.src = src; preloader.load(); } catch (e) {} }
  }
  try {
    fetch("audio/audio.json?t=" + Date.now(), { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (j) { AUDIO = j || {}; })
      .catch(function () {});
  } catch (e) { /* 音声なしでも練習できる */ }

  function show(screen) {
    ["screenStart", "screenJob", "screenPractice", "screenResult"].forEach(function (s) {
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
  function myRecords() {
    return loadRecords().filter(function (r) { return (r.studentId || "") === studentId; });
  }
  function saveRecord(rec) {
    try {
      var all = loadRecords();
      all.push(rec);
      if (all.length > 300) all = all.slice(all.length - 300);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch (e) { /* 保存できなくても練習は続けられる */ }
  }

  // ---------- クリア判定 ----------
  var STEP_VER = 2;            // ステップ構成の版（3ステップ）。古い記録は数えない
  var LAST_STEP = STEPS.length;
  function isClear(step, res) {
    if (!res || !res.total) return false;
    if (step === 1) return res.total >= 10 && res.good === res.total;
    if (step === 2) return res.good / res.total >= 0.8;
    return false;                               // ほんばん れんしゅう はクリアなし
  }
  function stepStatus() {
    var recs = myRecords();
    var info = {};
    STEPS.forEach(function (s) { info[s.n] = { clear: false, runs: 0, best: null }; });
    recs.forEach(function (r) {
      var res = r.result || {};
      var n = res.step;
      if (res.stepVer !== STEP_VER || !info[n]) return;
      info[n].runs++;
      if (isClear(n, res)) info[n].clear = true;
      var sc = res.total ? res.good / res.total : 0;
      if (!info[n].best || sc > info[n].best.sc) info[n].best = { sc: sc, good: res.good, total: res.total };
    });
    var next = LAST_STEP;
    for (var i = 1; i < LAST_STEP; i++) { if (!info[i].clear) { next = i; break; } }
    return { info: info, next: next };
  }

  // ---------- スタート画面 ----------
  function renderBadge() {
    $("idBadge").textContent = studentId ? "ID: " + studentId : "ID なし / Tanpa ID";
  }

  function renderSteps() {
    var st = stepStatus();
    var box = $("stepList");
    box.innerHTML = "";
    STEPS.forEach(function (s) {
      var inf = st.info[s.n];
      var isNext = st.next === s.n;
      var cls = "step" + (inf.clear ? " done" : "") + (isNext ? " next" : "");
      var mark = inf.clear ? '<span class="mark">✓ クリア</span>' : (isNext ? '<span class="mark">▶ つぎは これ</span>' : "");
      var prog = inf.runs
        ? "さいこう ◎" + inf.best.good + "/" + inf.best.total + "・" + inf.runs + "かい"
        : "まだ やっていません / Belum dicoba";
      var b = document.createElement("button");
      b.className = cls;
      b.innerHTML =
        '<div class="shead"><span class="snum">STEP ' + s.n + "</span>" + mark + "</div>" +
        '<div class="stitle">' + esc(s.ja) + "<small>" + esc(s.id_) + "</small></div>" +
        '<div class="swhat">' + esc(s.what) + " / " + esc(s.whatId) + "</div>" +
        '<div class="sgoal">めやす：' + esc(s.goal) + " / " + esc(s.goalId) + "</div>" +
        '<div class="sprog">' + esc(prog) + "</div>";
      b.addEventListener("click", function () { openStep(s.n); });
      box.appendChild(b);
    });
  }

  function renderLast() {
    var r = myRecords().slice(-1)[0];
    if (!r) { $("lastRecord").innerHTML = ""; return; }
    var res = r.result || {};
    $("lastRecord").innerHTML = "さいごの れんしゅう / Terakhir： " + esc(r.timestamp.slice(5, 16)) + "　" +
      esc(res.modeLabel || "") + "　◎" + (res.good || 0) + " △" + (res.some || 0) + " ×" + (res.ng || 0);
  }

  function openStep(n) {
    if (n === LAST_STEP) { renderJobs(); show("screenJob"); return; }
    var s = STEPS[n - 1];
    startPractice({ mode: s.setup.mode, level: s.setup.level, step: n });
  }

  function renderJobs() {
    var box = $("jobList");
    box.innerHTML = "";
    JOBS.forEach(function (j) {
      var b = document.createElement("button");
      b.className = "choice";
      b.innerHTML = "<b>" + esc(j.ja) + "</b><span>" + esc(j.id_) + "</span>";
      b.addEventListener("click", function () {
        startPractice({ mode: "flow", level: "final", step: LAST_STEP, job: j.id });
      });
      box.appendChild(b);
    });
  }

  // ---------- 出題リストを作る ----------
  function item(q, stage, surprise) {
    return { q: q, v: randomWay(q), stage: stage || null, surprise: !!surprise };
  }

  // 面接の流れ：段階は固定、中身をランダムに
  function buildFlow(level, jobId) {
    var stages = FLOW.stages.slice();

    // 直前：movable の段階だけ順番を入れかえる
    if (level === "final") {
      var idx = [], mov = [];
      stages.forEach(function (s, i) { if (s.movable) { idx.push(i); mov.push(s); } });
      mov = shuffle(mov);
      idx.forEach(function (pos, k) { stages[pos] = mov[k]; });
    }

    var list = [];
    stages.forEach(function (st, si) {
      // 職種の質問は、しめくくりの前に入れる
      if (si === stages.length - 1 && jobId) {
        var job = jobById(jobId);
        if (job) {
          var used0 = list.map(function (it) { return it.q.id; });
          var jstage = { ja: "しょくしゅの しつもん", id_: job.id_ };
          shuffle(job.pool.filter(function (id) { return used0.indexOf(id) < 0; })).slice(0, 3).forEach(function (id) {
            var jq = qById(id);
            if (jq) list.push(item(jq, jstage));
          });
        }
      }
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
    if (setup.mode === "flow") return buildFlow(setup.level, setup.job);
    if (setup.mode === "retry") {
      return shuffle(setup.ids.map(qById).filter(Boolean)).map(function (q) { return item(q); });
    }
    if (setup.mode === "key") {
      return shuffle(DATA.questions.filter(function (q) { return q.key; })).map(function (q) { return item(q); });
    }
    // じゆう練習：100問からランダムに10問
    return shuffle(DATA.questions.slice()).slice(0, 10).map(function (q) { return item(q); });
  }

  function modeLabel(setup) {
    if (setup.step) {
      var j = setup.job ? jobById(setup.job) : null;
      return "STEP " + setup.step + (j ? "・" + j.ja : "");
    }
    if (setup.mode === "retry") return "ふくしゅう";
    return "じゆう";
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

    // 音声があれば「音声だけ → ヒント1 ひらがな → ヒント2 いみ」
    var src = audioSrc(q.id, it.v);
    var listenMode = !!src;
    it.audio = !!src;
    state.hint = listenMode ? 0 : 1;
    state.plays = 0;
    $("btnPlay").classList.toggle("hidden", !src);
    $("qText").classList.toggle("covered", listenMode);
    $("btnHint1").classList.toggle("hidden", !listenMode);
    $("btnTrans").classList.toggle("hidden", listenMode);
    $("btnTrans").innerHTML = listenMode ? "ヒント2 いみ<span>Petunjuk 2: arti</span>" : "いみ を みる<span>Lihat arti</span>";
    if (src) { playAudio(src); state.plays = 1; }
    preloadNext();

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
    $("qText").classList.remove("covered");   // 答えたあとは文字を見て確かめる
    $("btnHint1").classList.add("hidden");

    // こたえかたのポイント
    var pts = POINTS[q.id];
    $("pointBox").classList.toggle("hidden", !pts);
    if (pts) {
      $("pointBox").innerHTML = "<h2>こたえかたの ポイント<span>Tips menjawab</span></h2><ul>" +
        pts.map(function (t) { return "<li>" + esc(t[0]) + "<span>" + esc(t[1]) + "</span></li>"; }).join("") +
        "</ul>";
    }

    // ほかの聞き方
    var ways = allWays(q);
    if (ways.length > 1) {
      $("variantBox").innerHTML =
        "<h2>おなじ いみの ききかた<span>Cara bertanya lain (artinya sama)</span></h2><ul>" +
        ways.map(function (w, i) {
          var cls = (i === it.v ? "now" : "") + (audioSrc(q.id, i) ? " playable" : "");
          return '<li class="' + cls + '" data-v="' + i + '">' + esc(w) + "</li>";
        }).join("") +
        '</ul><p class="vmean">いみ / Arti: ' + esc(q.id_) +
        (ways.some(function (w, i) { return audioSrc(q.id, i); }) ? "<br>▶ をおすと きけます / Ketuk ▶ untuk mendengar" : "") + "</p>";
      $("variantBox").querySelectorAll("li.playable").forEach(function (li) {
        li.addEventListener("click", function () { playAudio(audioSrc(q.id, Number(li.dataset.v))); });
      });
      $("variantBox").classList.remove("hidden");
    }

    // 深掘り（流れ以外のとき。流れでは次の質問として出る）
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
    state.results.push({ qid: it.q.id, v: it.v, rate: rate, sec: sec,
      audio: !!it.audio, hint: state.hint, plays: state.plays });
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
    try { player.pause(); } catch (e) {}
    var good = 0, some = 0, ng = 0;
    state.results.forEach(function (r) {
      if (r.rate === "good") good++; else if (r.rate === "some") some++; else ng++;
    });
    var total = state.results.length;
    var now = new Date();
    var setup = state.lastSetup;
    var aud = state.results.filter(function (r) { return r.audio; });
    var earOnly = aud.filter(function (r) { return r.hint === 0; }).length;
    var step = setup.step || null;
    var wasClear = step ? stepStatus().info[step].clear : false;

    // 将来 GAS →「IJFA テスト結果DB」に送れる形
    var record = {
      timestamp: localStamp(now),
      timestampISO: now.toISOString(),
      studentId: studentId,
      practiceName: step ? "面接練習 STEP" + step : (setup.mode === "retry" ? "面接練習 復習" : "面接練習 自由"),
      result: {
        step: step,
        stepVer: STEP_VER,
        job: setup.job || "",
        modeLabel: modeLabel(setup),
        total: total,
        good: good,
        some: some,
        ng: ng,
        score: total ? Math.round((good * 2 + some) / (total * 2) * 100) : 0,
        durationSec: Math.round((now - state.startedAt) / 1000),
        audioTotal: aud.length,
        earOnly: earOnly,
        items: state.results       // qid（質問番号）, v（言い方の番号）, rate, sec, audio, hint, plays
      }
    };
    saveRecord(record);

    $("rGood").textContent = good;
    $("rSome").textContent = some;
    $("rNg").textContent = ng;
    var msg;
    if (ng === 0 && some === 0) msg = "ぜんぶ いえました！<span>Semua bisa!</span>";
    else if (good >= total / 2) msg = "いい ちょうしです。△× を もういちど れんしゅうしましょう。<span>Bagus. Ulangi soal △ dan ×.</span>";
    else msg = "まいにち すこしずつ。△× を もういちど やってみましょう。<span>Sedikit demi sedikit setiap hari. Ulangi soal △ dan ×.</span>";
    $("rMsg").innerHTML = msg;
    $("rListen").innerHTML = aud.length ? "おとだけで こたえた：" + earOnly + " / " + aud.length +
      "<span>Menjawab hanya dengan mendengar</span>" : "";

    // クリア表示
    var clearNow = step && isClear(step, record.result);
    $("rClear").classList.toggle("hidden", !clearNow);
    if (clearNow) {
      $("rClear").innerHTML = "STEP " + step + " クリア！<span>STEP " + step + " selesai!</span>";
    }
    $("btnNext").classList.toggle("hidden", !(clearNow && step < LAST_STEP));
    if (step && step < LAST_STEP && !clearNow) {
      var s = STEPS[step - 1];
      $("rGoal").innerHTML = (wasClear ? "クリアずみ / Sudah selesai。" : "") +
        "クリアの めやす：" + esc(s.goal) + "<span>Target: " + esc(s.goalId) + "</span>";
    } else {
      $("rGoal").innerHTML = "";
    }

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
  $("btnFree").addEventListener("click", function () { startPractice({ mode: "all" }); });
  $("btnJobBack").addEventListener("click", goHome);
  $("btnTrans").addEventListener("click", function () {
    var t = $("qTrans");
    t.classList.toggle("hidden");
    if (!t.classList.contains("hidden")) state.hint = 2;
  });
  $("btnHint").addEventListener("click", function () { $("hintBox").classList.toggle("hidden"); });
  $("btnPlay").addEventListener("click", function () {
    var it = state.list[state.index];
    playAudio(audioSrc(it.q.id, it.v));
    state.plays++;
  });
  $("btnHint1").addEventListener("click", function () {
    $("qText").classList.remove("covered");
    $("btnHint1").classList.add("hidden");
    $("btnTrans").classList.remove("hidden");
    if (state.hint < 1) state.hint = 1;
  });
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
    var s = state.lastSetup;
    startPractice({ mode: s.mode, level: s.level, step: s.step, job: s.job, ids: s.ids });
  });
  $("btnNext").addEventListener("click", function () {
    var n = (state.lastSetup.step || 0) + 1;
    if (n <= LAST_STEP) openStep(n);
  });
  $("btnHome").addEventListener("click", goHome);

  function goHome() {
    try { player.pause(); } catch (e) {}
    stopTimer();
    renderSteps();
    renderLast();
    show("screenStart");
  }

  // ---------- 初期表示 ----------
  renderBadge();
  renderSteps();
  renderLast();
})();
