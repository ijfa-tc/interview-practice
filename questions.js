// =============================================================
// 面接質問データ / Data pertanyaan wawancara
// 出典：IJFA_面接質問100問（話し言葉・インドネシア語）
//       IJFA_面接準備_主要10問ワークシート
//
// 【質問を追加・修正するとき】
//   { id: "番号", cat: "カテゴリ番号", ja: "日本語", id_: "インドネシア語" }
//   を1行ふやすだけです。key: true にすると「重要10問」に入ります。
//   hints（考えるヒント）と followups（深掘り質問）は無くてもOKです。
// =============================================================

window.QUESTION_DATA = {
  practiceName: "面接質問ランダム練習",

  categories: [
    { cat: "c01", ja: "応募動機・仕事選び", id_: "Alasan melamar & memilih pekerjaan" },
    { cat: "c02", ja: "就労期間・将来・お金", id_: "Lama kerja, masa depan & keuangan" },
    { cat: "c03", ja: "自己紹介・人柄・価値観", id_: "Perkenalan diri, kepribadian & nilai hidup" },
    { cat: "c04", ja: "家族・友人・私生活", id_: "Keluarga, teman & kehidupan pribadi" },
    { cat: "c05", ja: "学校・職歴・経験", id_: "Sekolah, riwayat kerja & pengalaman" },
    { cat: "c06", ja: "仕事への姿勢・問題対応", id_: "Sikap kerja & penanganan masalah" },
    { cat: "c07", ja: "共同生活", id_: "Hidup bersama orang lain" },
    { cat: "c08", ja: "日本の理解・生活・文化", id_: "Pemahaman tentang Jepang, kehidupan & budaya" },
    { cat: "c09", ja: "語学・学習", id_: "Bahasa & pembelajaran" },
    { cat: "c10", ja: "健康・体力・実技", id_: "Kesehatan, stamina & tes praktik" },
    { cat: "c11", ja: "食事・宗教・嗜好", id_: "Makanan, agama & kebiasaan" },
    { cat: "c12", ja: "面接のしめくくり", id_: "Penutup wawancara" }
  ],

  questions: [
    // ---- 応募動機・仕事選び ----
    { id: "001", cat: "c01", key: true,
      ja: "なんでにほんではたらきたいんですか？",
      id_: "Kenapa Anda ingin bekerja di Jepang?",
      hints: [
        ["ほかの国ではなく、日本を選ぶ理由は？", "Kenapa memilih Jepang?"],
        ["日本で何を経験・学習したい？", "Ingin belajar apa di Jepang?"],
        ["自分の経験や目標とどうつながる？", "Hubungannya dengan tujuan Anda?"],
        ["帰国後、その経験をどう使う？", "Setelah pulang, bagaimana memakainya?"]
      ],
      followups: [
        ["具体的には何を学びたい？", "Tepatnya ingin belajar apa?"],
        ["なぜインドネシアではなく日本？", "Kenapa bukan di Indonesia?"]
      ] },
    { id: "002", cat: "c01", ja: "ほかのくにもありますけど、なんでにほんをえらんだんですか？", id_: "Ada negara lain juga. Kenapa Anda memilih Jepang?" },
    { id: "003", cat: "c01", key: true,
      ja: "なんでこのしごとをやりたいんですか？",
      id_: "Kenapa Anda ingin melakukan pekerjaan ini?",
      hints: [
        ["仕事内容を理解している？", "Apa tugas pekerjaan ini?"],
        ["興味を持ったきっかけは？", "Apa yang membuat Anda tertarik?"],
        ["自分の経験・得意なことと合う？", "Cocok dengan pengalaman Anda?"],
        ["大変なことにもどう向き合う？", "Bagaimana menghadapi kesulitannya?"]
      ],
      followups: [
        ["この仕事で一番大変な点は？", "Apa bagian tersulitnya?"],
        ["経験がない場合、どう学ぶ？", "Jika belum berpengalaman, bagaimana belajar?"]
      ] },
    { id: "004", cat: "c01", key: true,
      ja: "うちのかいしゃをえらんだりゆうはなんですか？",
      id_: "Apa alasan Anda memilih perusahaan kami?",
      hints: [
        ["会社について何を調べた？", "Apa yang Anda cari tahu tentang perusahaan?"],
        ["仕事内容・働く場所のどこに興味がある？", "Apa yang menarik bagi Anda?"],
        ["自分に合うと思う点は？", "Apa yang cocok dengan diri Anda?"],
        ["入社したらどう働きたい？", "Bagaimana Anda ingin bekerja di sini?"]
      ],
      followups: [
        ["会社のどこに興味を持った？", "Apa yang menarik dari perusahaan ini?"],
        ["ほかの会社との違いは？", "Apa bedanya dengan perusahaan lain?"]
      ] },
    { id: "005", cat: "c01", ja: "このしごと、どんなことをするか、わかっていますか？", id_: "Apakah Anda tahu pekerjaan ini melakukan apa saja?" },
    { id: "006", cat: "c01", ja: "にほんでは、どんなことをまなびたいですか？", id_: "Apa yang ingin Anda pelajari di Jepang?" },
    { id: "007", cat: "c01", key: true,
      ja: "にほんではたらくうえで、なにかしんぱいなことはありますか？",
      id_: "Apakah ada hal yang Anda khawatirkan saat bekerja di Jepang?",
      hints: [
        ["何が心配？ その理由は？", "Apa yang dikhawatirkan dan kenapa?"],
        ["今、どんな準備をしている？", "Apa persiapan Anda sekarang?"],
        ["困ったら誰に相談できる？", "Kepada siapa Anda bisa berkonsultasi?"],
        ["心配があってもどう続ける？", "Bagaimana tetap bekerja dengan baik?"]
      ],
      followups: [
        ["その問題が起きたら、まず何をする？", "Apa tindakan pertama Anda?"],
        ["今できることは何？", "Apa yang bisa Anda lakukan sekarang?"]
      ] },
    { id: "008", cat: "c01", ja: "うちのかいしゃのきゅうりょう、どのくらいだとおもっていますか？", id_: "Menurut Anda, kira-kira berapa gaji di perusahaan kami?" },

    // ---- 就労期間・将来・お金 ----
    { id: "009", cat: "c02", key: true,
      ja: "にほんでは、なんねんくらいはたらきたいですか？",
      id_: "Berapa tahun Anda ingin bekerja di Jepang?",
      hints: [
        ["何年くらい働きたい？", "Ingin bekerja berapa tahun?"],
        ["その年数にした理由は？", "Kenapa memilih jangka waktu itu?"],
        ["働く間に何を身につけたい？", "Ingin menguasai apa?"],
        ["予定が変わったらどう考える？", "Jika rencana berubah?"]
      ],
      followups: [
        ["３年後も働けるとしたら？", "Jika bisa bekerja lagi setelah tiga tahun?"],
        ["その期間の目標は何？", "Apa target Anda selama itu?"]
      ] },
    { id: "010", cat: "c02", ja: "３ねんはたらいたあと、あと２ねん、はたらきたいですか？", id_: "Setelah bekerja tiga tahun, apakah Anda ingin melanjutkan dua tahun lagi?" },
    { id: "011", cat: "c02", ja: "３ねんで、どのくらいおかねをためたいですか？", id_: "Berapa banyak uang yang ingin Anda tabung dalam tiga tahun?" },
    { id: "012", cat: "c02", ja: "さいしょのきゅうりょう、なににつかいたいですか？", id_: "Gaji pertama ingin Anda gunakan untuk apa?" },
    { id: "013", cat: "c02", ja: "りょうしんにおかねをおくりたいですか？ なんでおくりたいんですか？", id_: "Apakah Anda ingin mengirim uang kepada orang tua? Kenapa?" },
    { id: "014", cat: "c02", ja: "しょうらい、なにをしたいですか？", id_: "Apa yang ingin Anda lakukan di masa depan?" },
    { id: "015", cat: "c02", ja: "それをやりたいとおもったのは、いつごろからですか？", id_: "Sejak kapan Anda mulai ingin mewujudkan hal itu?" },
    { id: "016", cat: "c02", key: true,
      ja: "にほんからかえったら、なにをしたいですか？",
      id_: "Setelah pulang dari Jepang, apa yang ingin Anda lakukan?",
      hints: [
        ["帰国後に何をしたい？", "Apa rencana setelah pulang?"],
        ["そう思った理由は？", "Kenapa ingin melakukannya?"],
        ["日本での経験をどう使う？", "Bagaimana memakai pengalaman di Jepang?"],
        ["実現のために何を準備する？", "Apa yang harus disiapkan?"]
      ],
      followups: [
        ["最初に何を始める？", "Apa langkah pertama Anda?"],
        ["計画どおりに進まなかったら？", "Jika rencana tidak berjalan lancar?"]
      ] },

    // ---- 自己紹介・人柄・価値観 ----
    { id: "017", cat: "c03", key: true,
      ja: "まず、じこしょうかいをおねがいします。",
      id_: "Pertama, silakan perkenalkan diri Anda.",
      hints: [
        ["なまえ・しゅっしん・いまのことは？", "Nama, asal, kegiatan sekarang?"],
        ["これまでに何をしてきた？", "Pengalaman apa yang Anda miliki?"],
        ["自分の強みは？", "Apa kelebihan Anda?"],
        ["最後に何を伝えたい？", "Apa yang ingin Anda sampaikan di akhir?"]
      ],
      followups: [
        ["その強みが出た経験は？", "Contoh pengalaman itu?"],
        ["仕事ではどう生かせる？", "Bagaimana berguna dalam pekerjaan?"]
      ] },
    { id: "018", cat: "c03", ja: "じぶんのいいところを、アピールしてもらえますか？", id_: "Bisakah Anda menceritakan kelebihan diri Anda?" },
    { id: "019", cat: "c03", key: true,
      ja: "じぶんのいいところと、なおしたいところをおしえてください。",
      id_: "Ceritakan kelebihan Anda dan hal yang ingin Anda perbaiki pada diri sendiri.",
      hints: [
        ["長所が出た経験は？", "Kapan kelebihan Anda terlihat?"],
        ["その長所は仕事でどう役立つ？", "Bagaimana berguna dalam pekerjaan?"],
        ["短所で困った経験は？", "Pernah kesulitan karena kekurangan itu?"],
        ["直すために今していることは？", "Apa yang Anda lakukan untuk memperbaikinya?"]
      ],
      followups: [
        ["長所が役立った場面は？", "Berikan satu contoh kelebihan Anda."],
        ["短所が仕事に影響したら？", "Jika kekurangan itu memengaruhi pekerjaan?"]
      ] },
    { id: "020", cat: "c03", ja: "まわりのひとには、どんなひとだといわれますか？", id_: "Menurut orang-orang di sekitar Anda, Anda orang yang seperti apa?" },
    { id: "021", cat: "c03", ja: "じぶんでは、どんなせいかくだとおもいますか？", id_: "Menurut Anda sendiri, bagaimana sifat Anda?" },
    { id: "022", cat: "c03", ja: "しょうらい、どんなひとになりたいですか？", id_: "Anda ingin menjadi orang seperti apa di masa depan?" },
    { id: "023", cat: "c03", ja: "そんけいしているひとはいますか？ なんでそのひとなんですか？", id_: "Apakah ada orang yang Anda kagumi? Kenapa orang itu?" },
    { id: "024", cat: "c03", ja: "どんなひとと、なかよくできますか？ にがてなひとはどんなひとですか？", id_: "Dengan orang seperti apa Anda mudah akrab? Orang seperti apa yang sulit Anda hadapi?" },
    { id: "025", cat: "c03", ja: "いきていくうえで、いちばんたいせつにしていることはなんですか？", id_: "Apa hal yang paling Anda anggap penting dalam hidup?" },
    { id: "026", cat: "c03", ja: "いままでで、いちばんがんばったことはなんですか？", id_: "Apa hal yang paling Anda perjuangkan selama ini?" },
    { id: "027", cat: "c03", ja: "いままでで、いちばんうれしかったことはなんですか？", id_: "Apa pengalaman yang paling membuat Anda senang?" },
    { id: "028", cat: "c03", key: true,
      ja: "いままでで、いちばんたいへんだったことはなんですか？",
      id_: "Apa pengalaman yang paling berat bagi Anda?",
      hints: [
        ["いつ、何が起きた？", "Kapan dan apa yang terjadi?"],
        ["何がいちばん大変だった？", "Apa bagian tersulitnya?"],
        ["自分は何をした？", "Apa tindakan Anda?"],
        ["その経験から何を学んだ？", "Apa yang Anda pelajari?"]
      ],
      followups: [
        ["そのとき誰かに相談した？", "Apakah Anda meminta bantuan?"],
        ["また同じことが起きたら？", "Jika terjadi lagi, apa yang Anda lakukan?"]
      ] },
    { id: "029", cat: "c03", ja: "なにかとくいなこと、ここでみせてもらえますか？", id_: "Apakah Anda punya keahlian yang bisa ditunjukkan di sini?" },
    { id: "030", cat: "c03", ja: "とくいなことは、なんですか？", id_: "Apa yang Anda kuasai?" },
    { id: "031", cat: "c03", ja: "にがてなことは、なんですか？", id_: "Apa yang kurang Anda kuasai?" },
    { id: "032", cat: "c03", ja: "かぞくのなかで、いちばんそんけいしているのはだれですか？", id_: "Siapa anggota keluarga yang paling Anda kagumi?" },

    // ---- 家族・友人・私生活 ----
    { id: "033", cat: "c04", ja: "かぞくのことを、ちょっとおしえてもらえますか？", id_: "Bisa ceritakan sedikit tentang keluarga Anda?" },
    { id: "034", cat: "c04", ja: "きょうだいは、なんにんいますか？", id_: "Anda punya berapa saudara kandung?" },
    { id: "035", cat: "c04", ja: "にほんではたらくこと、りょうしんはなんていっていますか？", id_: "Apa kata orang tua Anda tentang rencana bekerja di Jepang?" },
    { id: "036", cat: "c04", ja: "こいびとはいますか？", id_: "Apakah Anda punya pacar?" },
    { id: "037", cat: "c04", ja: "にほんで、いっしょにくらしたいかぞくはいますか？", id_: "Apakah ada anggota keluarga yang ingin Anda ajak tinggal bersama di Jepang?" },
    { id: "038", cat: "c04", ja: "にほんに、ともだちやしりあいはいますか？", id_: "Apakah Anda punya teman atau kenalan di Jepang?" },
    { id: "039", cat: "c04", ja: "やすみのひは、なにをしていますか？", id_: "Apa yang biasanya Anda lakukan saat libur?" },
    { id: "040", cat: "c04", ja: "しゅみはなんですか？ すきなスポーツもありますか？", id_: "Apa hobi Anda? Apakah ada olahraga yang Anda sukai?" },
    { id: "041", cat: "c04", ja: "そのスポーツ、いまもやっていますか？ どのくらいやっていますか？", id_: "Apakah Anda masih melakukan olahraga itu? Seberapa sering?" },
    { id: "042", cat: "c04", ja: "きょうだいとは、なかがいいですか？", id_: "Apakah hubungan Anda dengan saudara kandung baik?" },
    { id: "043", cat: "c04", ja: "けっこんは、いつごろしたいとおもっていますか？", id_: "Kira-kira kapan Anda ingin menikah?" },
    { id: "044", cat: "c04", ja: "りょうりはできますか？", id_: "Apakah Anda bisa memasak?" },

    // ---- 学校・職歴・経験 ----
    { id: "045", cat: "c05", ja: "こうこうでは、なにをべんきょうしましたか？", id_: "Apa yang Anda pelajari di SMA/SMK?" },
    { id: "046", cat: "c05", ja: "こうこうで、すきだったきょうかはなんですか？", id_: "Pelajaran apa yang Anda sukai saat SMA/SMK?" },
    { id: "047", cat: "c05", ja: "こうこうで、ぶかつはやっていましたか？", id_: "Apakah Anda mengikuti kegiatan klub atau ekstrakurikuler di SMA/SMK?" },
    { id: "048", cat: "c05", ja: "いままで、どんなしごとをしてきましたか？", id_: "Pekerjaan apa saja yang pernah Anda lakukan?" },
    { id: "049", cat: "c05", ja: "それぞれのしごとで、なにをしていましたか？", id_: "Apa tugas Anda di masing-masing pekerjaan itu?" },
    { id: "050", cat: "c05", ja: "しごとをしていて、いちばんたいへんだったことはなんですか？", id_: "Apa hal paling berat selama Anda bekerja?" },
    { id: "051", cat: "c05", ja: "りれきしょをみると、しごとのあいだがあいていますね。そのときはなにをしていましたか？", id_: "Di CV ada jeda antara pekerjaan. Saat itu Anda melakukan apa?" },
    { id: "052", cat: "c05", ja: "ひとりぐらしをしたことはありますか？", id_: "Apakah Anda pernah tinggal sendiri?" },
    { id: "053", cat: "c05", ja: "いままで、めんせつをなんかいうけましたか？ どんなしごとでしたか？", id_: "Sudah berapa kali Anda mengikuti wawancara? Untuk pekerjaan apa saja?" },

    // ---- 仕事への姿勢・問題対応 ----
    { id: "054", cat: "c06", ja: "しごとで、いちばんたいせつなことってなんだとおもいますか？", id_: "Menurut Anda, apa yang paling penting dalam bekerja?" },
    { id: "055", cat: "c06", key: true,
      ja: "しごとでミスをしたら、まずどうしますか？",
      id_: "Jika Anda membuat kesalahan saat bekerja, apa yang pertama Anda lakukan?",
      hints: [
        ["最初に何を確認する？", "Apa yang Anda periksa lebih dulu?"],
        ["誰に、どう報告する？", "Kepada siapa dan bagaimana melapor?"],
        ["自分で対応できないときは？", "Jika tidak bisa menangani sendiri?"],
        ["同じミスを防ぐには？", "Bagaimana mencegah kesalahan yang sama?"]
      ],
      followups: [
        ["上司がその場にいなかったら？", "Jika atasan tidak ada?"],
        ["自分のミスだと分かったら？", "Jika ternyata itu kesalahan Anda?"]
      ] },
    { id: "056", cat: "c06", ja: "じょうしやせんぱいに、きびしくちゅういされたら、どうしますか？", id_: "Jika atasan atau senior menegur Anda dengan keras, apa yang Anda lakukan?" },
    { id: "057", cat: "c06", ja: "みんなでしごとをするとき、なにがたいせつだとおもいますか？", id_: "Menurut Anda, apa yang penting saat bekerja dalam tim?" },
    { id: "058", cat: "c06", ja: "ともだちやいっしょにはたらくひとと、いけんがちがったらどうしますか？", id_: "Jika pendapat Anda berbeda dengan teman atau rekan kerja, apa yang Anda lakukan?" },
    { id: "059", cat: "c06", ja: "ストレスがたまったときは、どうしていますか？", id_: "Apa yang Anda lakukan ketika merasa stres?" },
    { id: "060", cat: "c06", ja: "あさはやくおきられますか？ ふだんはなんじにおきますか？", id_: "Apakah Anda bisa bangun pagi? Biasanya bangun jam berapa?" },
    { id: "061", cat: "c06", ja: "なつはざんぎょうがふえることもありますが、だいじょうぶですか？", id_: "Pada musim panas, lembur bisa bertambah. Apakah Anda siap?" },
    { id: "062", cat: "c06", ja: "どようびにしごとをおねがいされたら、でられますか？", id_: "Jika diminta bekerja pada hari Sabtu, apakah Anda bisa masuk?" },
    { id: "063", cat: "c06", ja: "しごとのやるきがでないときは、どうしますか？", id_: "Apa yang Anda lakukan saat tidak bersemangat bekerja?" },

    // ---- 共同生活 ----
    { id: "064", cat: "c07", ja: "だれかといっしょにくらしたことはありますか？", id_: "Apakah Anda pernah tinggal bersama orang lain?" },
    { id: "065", cat: "c07", ja: "なんにんで、どのくらいのあいだ、いっしょにくらしましたか？", id_: "Saat itu tinggal dengan berapa orang dan selama berapa lama?" },
    { id: "066", cat: "c07", ja: "いっしょにくらしていて、たいへんだったことはなんですか？", id_: "Apa hal yang sulit saat tinggal bersama orang lain?" },
    { id: "067", cat: "c07", ja: "いっしょにくらすなかで、もんだいがおきたときは、どうしましたか？", id_: "Jika ada masalah saat tinggal bersama, bagaimana Anda menanganinya?" },
    { id: "068", cat: "c07", ja: "にほんで、ともだちといっしょにくらすことになっても、だいじょうぶですか？", id_: "Jika harus tinggal bersama teman di Jepang, apakah Anda siap?" },
    { id: "069", cat: "c07", ja: "いっしょにくらすひとと、うまくやっていくために、なにをしますか？", id_: "Apa yang Anda lakukan agar bisa hidup rukun dengan teman serumah?" },

    // ---- 日本の理解・生活・文化 ----
    { id: "070", cat: "c08", ja: "にほんについて、なにかしっていることはありますか？", id_: "Apa yang Anda ketahui tentang Jepang?" },
    { id: "071", cat: "c08", ja: "にほんって、どんなくにだとおもいますか？", id_: "Menurut Anda, Jepang itu negara seperti apa?" },
    { id: "072", cat: "c08", ja: "にほんをいろにたとえると、なにいろですか？ なんでそのいろですか？", id_: "Jika Jepang diibaratkan dengan warna, warna apa? Kenapa warna itu?" },
    { id: "073", cat: "c08", ja: "はたらくところがあるけんについて、なにかしっていますか？", id_: "Apa yang Anda ketahui tentang prefektur tempat Anda akan bekerja?" },
    { id: "074", cat: "c08", ja: "にほんで、いってみたいところはありますか？", id_: "Apakah ada tempat di Jepang yang ingin Anda kunjungi?" },
    { id: "075", cat: "c08", ja: "にほんのたべものは、どうおもいますか？", id_: "Bagaimana pendapat Anda tentang makanan Jepang?" },
    { id: "076", cat: "c08", ja: "インドネシアのたべもので、おすすめはなんですか？", id_: "Makanan Indonesia apa yang Anda rekomendasikan?" },
    { id: "077", cat: "c08", ja: "インドネシアで、おすすめのばしょはどこですか？", id_: "Tempat apa di Indonesia yang Anda rekomendasikan?" },
    { id: "078", cat: "c08", ja: "にほんで、やってみたいことはありますか？", id_: "Apakah ada hal yang ingin Anda coba di Jepang?" },
    { id: "079", cat: "c08", ja: "にほんで、たべてみたいものはありますか？", id_: "Apakah ada makanan yang ingin Anda coba di Jepang?" },

    // ---- 語学・学習 ----
    { id: "080", cat: "c09", ja: "にほんごは、どのくらいべんきょうしましたか？", id_: "Sudah berapa lama Anda belajar bahasa Jepang?" },
    { id: "081", cat: "c09", ja: "じゅぎょうのほかに、じぶんでどのくらいべんきょうしていますか？", id_: "Selain di kelas, seberapa banyak Anda belajar sendiri?" },
    { id: "082", cat: "c09", ja: "JFTかJLPTは、もうごうかくしていますか？ なんてんでしたか？", id_: "Apakah Anda sudah lulus JFT atau JLPT? Berapa nilai Anda?" },
    { id: "083", cat: "c09", ja: "にほんでは、JLPTのなんきゅうまでべんきょうしたいですか？", id_: "Di Jepang, Anda ingin belajar sampai level JLPT berapa?" },
    { id: "084", cat: "c09", ja: "３ねんのあいだに、JLPTのなんきゅうにごうかくしたいですか？", id_: "Dalam tiga tahun, Anda ingin lulus JLPT level berapa?" },
    { id: "085", cat: "c09", ja: "いまつかっているきょうざいは、なんかまでべんきょうしましたか？", id_: "Buku pelajaran yang sekarang Anda pakai sudah sampai bab berapa?" },

    // ---- 健康・体力・実技 ----
    { id: "086", cat: "c10", ja: "たいりょくには、じしんがありますか？", id_: "Apakah Anda yakin dengan stamina fisik Anda?" },
    { id: "087", cat: "c10", ja: "おおきなびょうきや、けがをしたことはありますか？", id_: "Apakah Anda pernah mengalami sakit atau cedera yang serius?" },
    { id: "088", cat: "c10", ja: "アレルギーはありますか？", id_: "Apakah Anda memiliki alergi?" },
    { id: "089", cat: "c10", ja: "うでたてふせや、ふっきんは、なんかいくらいできますか？", id_: "Kira-kira berapa kali Anda bisa push-up dan sit-up?" },
    { id: "090", cat: "c10", ja: "さっきのじつぎテスト、じぶんではなんてんくらいだとおもいますか？", id_: "Menurut Anda sendiri, berapa nilai tes praktik tadi?" },
    { id: "091", cat: "c10", ja: "じつぎテストで、いちばんむずかしかったのはなんですか？", id_: "Apa bagian tersulit dalam tes praktik?" },
    { id: "092", cat: "c10", ja: "じてんしゃには、のれますか？", id_: "Apakah Anda bisa naik sepeda?" },

    // ---- 食事・宗教・嗜好 ----
    { id: "093", cat: "c11", ja: "すきなたべものはなんですか？", id_: "Apa makanan yang Anda sukai?" },
    { id: "094", cat: "c11", ja: "にがてなたべものはありますか？", id_: "Apakah ada makanan yang tidak Anda sukai?" },
    { id: "095", cat: "c11", ja: "にほんでは、だんじきやおいのりは、どうするつもりですか？", id_: "Bagaimana rencana Anda menjalankan puasa dan ibadah di Jepang?" },
    { id: "096", cat: "c11", ja: "しごとちゅうに、だんじきがむずかしいときは、どうしますか？", id_: "Jika sulit berpuasa saat bekerja, apa yang akan Anda lakukan?" },
    { id: "097", cat: "c11", ja: "おさけをのんだことはありますか？", id_: "Apakah Anda pernah minum alkohol?" },
    { id: "098", cat: "c11", ja: "せんぱいに、のみにいこうとさそわれたら、どうしますか？", id_: "Jika senior mengajak Anda pergi minum, apa yang Anda lakukan?" },
    { id: "099", cat: "c11", ja: "たばこはすいますか？", id_: "Apakah Anda merokok?" },
    { id: "100", cat: "c11", ja: "にほんでの、たばこのルールはまもれますか？", id_: "Apakah Anda bisa mematuhi aturan merokok di Jepang?" },

    // ---- 面接のしめくくり ----
    { id: "101", cat: "c12", key: false,
      ja: "さいごに、なにかしつもんはありますか？",
      id_: "Terakhir, apakah ada yang ingin Anda tanyakan?",
      hints: [
        ["しつもんを1つ、じゅんびしておく", "Siapkan satu pertanyaan."],
        ["れい：しごとのないよう、きょういく、せいかつ", "Contoh: isi pekerjaan, pelatihan, kehidupan."],
        ["「とくにありません」だけで おわらない", "Jangan hanya menjawab \"tidak ada\"."]
      ] }
  ],

  // =============================================================
  // 言い方のバリエーション / Variasi cara bertanya
  //   同じ内容の質問の、ちがう聞き方です。
  //   上の ja（もとの言い方）にくわえて、ここの言い方がランダムに出ます。
  //   ふやすときは、その番号の [ ] の中に "あたらしい言い方", を1行足すだけです。
  // =============================================================
  variants: {
    "017": [
      "じこしょうかいをしてください。",
      "かんたんに、じこしょうかいしてもらえますか？",
      "では、まず、おなまえとしゅっしんをおしえてください。",
      "じぶんのことを、すこしはなしてください。"
    ],
    "001": [
      "なぜにほんではたらきたいですか？",
      "にほんではたらきたいりゆうはなんですか？",
      "どうしてにほんで、はたらこうとおもったんですか？",
      "にほんではたらきたいのは、どうしてですか？"
    ],
    "002": [
      "なぜほかのくにではなく、にほんですか？",
      "かんこくやたいわんもありますが、どうしてにほんですか？",
      "にほんをえらんだ、いちばんのりゆうはなんですか？"
    ],
    "003": [
      "なぜこのしごとをえらびましたか？",
      "このしごとをえらんだりゆうはなんですか？",
      "どうしてこのしごとに、きょうみをもったんですか？",
      "このしごとの、どんなところがいいとおもいましたか？"
    ],
    "004": [
      "なぜうちのかいしゃに、おうぼしたんですか？",
      "どうしてこのかいしゃで、はたらきたいとおもいましたか？",
      "たくさんかいしゃがありますけど、なんでうちなんですか？"
    ],
    "005": [
      "このしごとのないようを、しっていますか？",
      "このしごとは、どんなしごとだとおもいますか？",
      "このしごとでなにをするか、せつめいできますか？"
    ],
    "006": [
      "にほんで、なにをべんきょうしたいですか？",
      "にほんではたらいて、なにをみにつけたいですか？",
      "にほんで、どんなけいけんをしたいですか？"
    ],
    "009": [
      "にほんで、どのくらいはたらきたいですか？",
      "なんねん、にほんにいるよていですか？",
      "にほんでは、いつまではたらくつもりですか？",
      "にほんで、ながくはたらきたいですか？"
    ],
    "010": [
      "３ねんでかえりますか？　それとも、もっとはたらきたいですか？",
      "５ねんいじょう、はたらくことはできますか？",
      "けいやくがおわったあとも、つづけてはたらきたいですか？"
    ],
    "011": [
      "３ねんで、いくらちょきんしたいですか？",
      "にほんで、どのくらいおかねをためるつもりですか？",
      "ちょきんのもくひょうは、いくらですか？"
    ],
    "014": [
      "しょうらいのゆめはなんですか？",
      "なにか、ゆめはありますか？",
      "１０ねんごのじぶんは、なにをしているとおもいますか？"
    ],
    "015": [
      "そのゆめは、いつからもっていますか？",
      "いつ、そうおもうようになりましたか？",
      "そうおもったきっかけは、なんですか？"
    ],
    "016": [
      "きこくしたあと、なにをするよていですか？",
      "インドネシアにかえってから、どうしたいですか？",
      "にほんでのしごとがおわったら、なにをしますか？"
    ],
    "019": [
      "あなたのちょうしょと、たんしょはなんですか？",
      "じぶんのつよみと、よわみをおしえてください。",
      "あなたのいいところはなんですか？　わるいところはありますか？"
    ],
    "020": [
      "ともだちから、どんなひとだといわれますか？",
      "かぞくやともだちは、あなたのことをどうおもっていますか？",
      "まわりのひとから、よくいわれることはありますか？"
    ],
    "026": [
      "いままで、いちばんがんばったけいけんをおしえてください。",
      "なにか、いっしょうけんめいがんばったことはありますか？",
      "これまでで、いちばんどりょくしたことはなんですか？"
    ],
    "028": [
      "いままでで、いちばんくろうしたことはなんですか？",
      "なにか、たいへんだったけいけんはありますか？",
      "これまでで、いちばんつらかったことをおしえてください。"
    ],
    "040": [
      "どんなことをするのがすきですか？",
      "なにかスポーツはしていますか？",
      "しゅみをおしえてください。"
    ],
    "044": [
      "じぶんで、ごはんをつくれますか？",
      "じすいはできますか？",
      "りょうりはとくいですか？"
    ],
    "055": [
      "しごとでまちがえたとき、どうしますか？",
      "もし、しっぱいしたら、どうしますか？",
      "ミスをしてしまったら、さいしょになにをしますか？"
    ],
    "056": [
      "せんぱいにおこられたら、どうしますか？",
      "うえのひとに、つよくいわれたら、どうしますか？",
      "にほんのかいしゃはきびしいですが、だいじょうぶですか？"
    ],
    "057": [
      "チームではたらくとき、だいじなことはなんですか？",
      "いっしょにはたらくひとと、うまくやるために、なにがひつようですか？",
      "チームワークで、なにがいちばんたいせつですか？"
    ],
    "060": [
      "あさは、つよいですか？",
      "まいあさ、なんじごろおきていますか？",
      "しごとが、あさ６じからでも、だいじょうぶですか？"
    ],
    "064": [
      "きょうどうせいかつのけいけんはありますか？",
      "ほかのひとと、いっしょにすんだことがありますか？",
      "りょうやアパートで、ともだちとくらしたことはありますか？"
    ],
    "066": [
      "きょうどうせいかつで、こまったことはありましたか？",
      "いっしょにすんでいて、どんなもんだいがありましたか？",
      "きょうどうせいかつで、イライラしたことはありますか？"
    ],
    "067": [
      "ルームメイトともんだいがあったら、どうしますか？",
      "もんだいがおきたとき、どうやってかいけつしましたか？",
      "ともだちとけんかしたら、どうしますか？"
    ],
    "068": [
      "にほんでは、せんぱいといっしょにすみますが、だいじょうぶですか？",
      "りょうでのせいかつは、だいじょうぶですか？",
      "ひとりのへやじゃなくても、だいじょうぶですか？"
    ],
    "086": [
      "からだは、じょうぶですか？",
      "おもいものをもつしごとですが、だいじょうぶですか？",
      "たいりょくはありますか？"
    ],
    "087": [
      "いままで、おおきなけがをしたことがありますか？",
      "にゅういんしたことはありますか？",
      "けんこうについて、なにかしんぱいはありますか？"
    ],
    "092": [
      "じてんしゃは、のれますか？",
      "じてんしゃに、のったことはありますか？",
      "じてんしゃで、かいしゃにかよえますか？"
    ],
    "093": [
      "なにをたべるのがすきですか？",
      "いちばんすきなりょうりはなんですか？",
      "すきなたべものを、おしえてください。"
    ],
    "095": [
      "しごとちゅう、おいのりはどうしますか？",
      "だんじきのときも、しごとはできますか？",
      "にほんで、しゅうきょうのことで、しんぱいはありますか？"
    ],
    "097": [
      "おさけは、のみますか？",
      "おさけは、だいじょうぶですか？",
      "おさけをのむことについて、どうおもいますか？"
    ],
    "099": [
      "たばこは？",
      "たばこを、すったことはありますか？",
      "きつえんしますか？"
    ],
    "101": [
      "なにか、ききたいことはありますか？",
      "ほかに、なにかしつもんはありますか？",
      "わたしたちにききたいことがあれば、どうぞ。"
    ]
  },

  // =============================================================
  // 面接の流れ / Alur wawancara
  //   段階（stages）は上から順番に出ます。
  //   slots：その段階で出す質問。from の中から1つえらばれます。
  //     chance：深掘り質問。0.5 なら半分くらいの確率で出ます（入門は必ず出る）。
  //     onlyAfter："014" なら、014 が出たときだけ出ます。
  //   movable: true の段階は「直前」レベルで順番が入れかわります。
  //   surprise：「直前」レベルで、とつぜん差しこむ質問。
  // =============================================================
  flow: {
    practiceName: "面接の流れ練習",
    stages: [
      { ja: "じこしょうかい", id_: "Perkenalan diri",
        slots: [ { from: ["017"] } ] },
      { ja: "しぼうどうき", id_: "Alasan melamar",
        slots: [ { from: ["001", "003", "004"] },
                 { from: ["002", "006", "005"], chance: 0.5 } ] },
      { ja: "はたらく きかん・おかね", id_: "Lama kerja & uang",
        slots: [ { from: ["009"] },
                 { from: ["010", "011"], chance: 0.5 } ] },
      { ja: "しょうらい・きこくご", id_: "Masa depan & setelah pulang",
        slots: [ { from: ["014", "016"] },
                 { from: ["015"], chance: 0.5, onlyAfter: "014" } ] },
      { ja: "ひとがら・けいけん", id_: "Kepribadian & pengalaman", movable: true,
        slots: [ { from: ["019", "026", "028", "020"] } ] },
      { ja: "しごとの しせい", id_: "Sikap kerja", movable: true,
        slots: [ { from: ["055", "056", "057", "060"] } ] },
      { ja: "きょうどう せいかつ", id_: "Hidup bersama", movable: true,
        slots: [ { from: ["064"] },
                 { from: ["066", "067", "068"], chance: 0.5 } ] },
      { ja: "せいかつ・けんこう", id_: "Kehidupan & kesehatan", movable: true,
        slots: [ { from: ["086", "087", "095", "097", "093"] } ] },
      { ja: "しめくくり", id_: "Penutup",
        slots: [ { from: ["101"] } ] }
    ],
    surprise: ["092", "099", "044", "040", "060"]
  }
};
