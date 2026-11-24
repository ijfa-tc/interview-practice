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
    { cat: "c12", ja: "面接のしめくくり", id_: "Penutup wawancara" },
    { cat: "c13", ja: "職種別の質問", id_: "Pertanyaan per bidang kerja" }
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
      ] },

    // ---- 職種別の質問（社内の面接記録から） ----
    { id: "102", cat: "c13", ja: "にほんのなつは、とてもあついですが、だいじょうぶですか？", id_: "Musim panas di Jepang sangat panas. Apakah Anda tidak masalah?" },
    { id: "103", cat: "c13", ja: "たかいところで、しごとをしたことはありますか？", id_: "Apakah Anda pernah bekerja di tempat tinggi?" },
    { id: "104", cat: "c13", ja: "４メートルから１０メートルくらいの、たかいところでしごとをしますが、だいじょうぶですか？", id_: "Anda akan bekerja di ketinggian sekitar 4 sampai 10 meter. Apakah Anda tidak masalah?" },
    { id: "105", cat: "c13", ja: "ぶたにくのせいひんを、てぶくろをしてさわるのは、だいじょうぶですか？", id_: "Apakah Anda tidak masalah menyentuh produk daging babi dengan sarung tangan?" },
    { id: "106", cat: "c13", ja: "アルコールのしょうどくえきを、つかったことはありますか？", id_: "Apakah Anda pernah memakai cairan disinfektan beralkohol?" },
    { id: "107", cat: "c13", ja: "えいごはできますか？", id_: "Apakah Anda bisa berbahasa Inggris?" },
    { id: "108", cat: "c13", ja: "このしごとには、どんなイメージがありますか？", id_: "Apa gambaran Anda tentang pekerjaan ini?" },
    { id: "109", cat: "c13", ja: "のうぎょうのけいけんを、おしえてください。", id_: "Ceritakan pengalaman Anda di bidang pertanian." },
    { id: "110", cat: "c13", ja: "このしごとは、どんなしごとか、しっていますか？", id_: "Apakah Anda tahu pekerjaan ini pekerjaan apa?" },
    { id: "111", cat: "c13", ja: "おもいものを、もったことはありますか？　なんキロくらいですか？", id_: "Apakah Anda pernah mengangkat barang berat? Kira-kira berapa kilo?" },
    { id: "112", cat: "c13", ja: "あんぜんのために、なにがたいせつだとおもいますか？", id_: "Menurut Anda, apa yang penting untuk keselamatan kerja?" },
    { id: "113", cat: "c13", ja: "にほんで、どんなしかくをとりたいですか？", id_: "Sertifikat apa yang ingin Anda dapatkan di Jepang?" },
    { id: "114", cat: "c13", ja: "ずっとたったまま、おなじさぎょうをつづけるのは、だいじょうぶですか？", id_: "Apakah Anda tidak masalah berdiri lama dan melakukan pekerjaan yang sama terus-menerus?" },
    { id: "115", cat: "c13", ja: "しごとでせいけつにするために、なにをしますか？", id_: "Untuk menjaga kebersihan saat bekerja, apa yang Anda lakukan?" },
    { id: "116", cat: "c13", ja: "そうじは、とくいですか？", id_: "Apakah Anda pandai bersih-bersih?" },
    { id: "117", cat: "c13", ja: "おきゃくさんに、えがおであいさつできますか？", id_: "Bisakah Anda menyapa tamu dengan senyum?" },
    { id: "118", cat: "c13", ja: "このしごとに、にているけいけんはありますか？", id_: "Apakah Anda punya pengalaman yang mirip dengan pekerjaan ini?" },
    { id: "119", cat: "c13", ja: "そとでのしごとは、だいじょうぶですか？　あついひも、さむいひもあります。", id_: "Apakah Anda tidak masalah bekerja di luar? Ada hari panas dan hari dingin." },
    { id: "120", cat: "c13", ja: "いなかでのせいかつは、だいじょうぶですか？", id_: "Apakah Anda tidak masalah tinggal di pedesaan?" },
    { id: "121", cat: "c13", ja: "どうぶつやしょくぶつのせわを、したことはありますか？", id_: "Pernahkah Anda merawat hewan atau tanaman?" },
    // ---- 自動車整備（2026-11-24 追加。先生の確認待ち） ----
    { id: "122", cat: "c13", ja: "くるまやバイクのせいびを、したことはありますか？", id_: "Apakah Anda pernah melakukan servis (perawatan) mobil atau motor?" },
    { id: "123", cat: "c13", ja: "がっこうで、じどうしゃのことを、べんきょうしましたか？", id_: "Apakah Anda pernah belajar tentang otomotif di sekolah?" },
    { id: "124", cat: "c13", ja: "どんなこうぐを、つかったことがありますか？", id_: "Perkakas apa yang pernah Anda pakai?" },
    { id: "125", cat: "c13", ja: "くるまのうんてんめんきょは、もっていますか？", id_: "Apakah Anda punya SIM mobil?" },
    { id: "126", cat: "c13", ja: "てやふくが、あぶらでよごれるしごとですが、だいじょうぶですか？", id_: "Tangan dan baju akan kotor terkena oli. Apakah Anda tidak masalah?" },
    { id: "127", cat: "c13", ja: "くるまのぶひんのなまえを、にほんごでいくつかいえますか？", id_: "Bisakah Anda menyebutkan beberapa nama komponen mobil dalam bahasa Jepang?" },
    { id: "128", cat: "c13", ja: "ちいさなミスが、おおきなじこになります。しごとで、なにをきをつけますか？", id_: "Kesalahan kecil bisa menjadi kecelakaan besar. Apa yang akan Anda perhatikan saat bekerja?" }
  ],

  // =============================================================
  // 職種 / Bidang kerja（STEP 4 で選ぶ）
  //   pool の中から3問が、面接の流れの最後のほう（しめくくりの前）に入ります。
  //   職種や質問をふやすときは、ここに足します。
  // =============================================================
  jobs: [
    { id: "kensetsu",  ja: "けんせつ",                 id_: "Konstruksi",
      pool: ["102", "103", "104", "086", "089", "110", "111", "112", "045", "113"] },
    { id: "shokuhin",  ja: "しょくひん せいぞう",        id_: "Pengolahan makanan",
      pool: ["105", "106", "088", "060", "097", "114", "115", "056", "084", "095"] },
    { id: "shukuhaku", ja: "しゅくはく・ビルクリーニング", id_: "Perhotelan & pembersihan gedung",
      pool: ["107", "108", "060", "064", "067", "116", "117", "081", "083", "077"] },
    { id: "seizou",    ja: "せいぞう（ようせつ・とそう など）", id_: "Manufaktur (las, cat, dll.)",
      pool: ["049", "051", "061", "062", "063", "110", "048", "045", "118", "098"] },
    { id: "nougyou",   ja: "のうぎょう",               id_: "Pertanian",
      pool: ["109", "068", "086", "060", "119", "120", "121", "044", "092", "111"] },
    { id: "jidousha",  ja: "じどうしゃ せいび",          id_: "Perawatan mobil (otomotif)",
      pool: ["122", "123", "124", "125", "126", "127", "128", "113", "111", "061"] },
    { id: "ippan",     ja: "まだ きまっていない",        id_: "Belum ditentukan (pertanyaan umum)",
      pool: ["086", "060", "061", "062", "102", "111", "056", "110", "098", "087"] }
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
    ],
    // ---- 2026-11-17 追加（すべての質問に ほかの聞き方） ----
    "007": [
      "にほんのせいかつで、しんぱいなことはありますか？",
      "なにか、ふあんなことはありますか？",
      "にほんでしごとをするとき、こまりそうなことはなんですか？"
    ],
    "008": [
      "きゅうりょうは、いくらくらいだとおもいますか？",
      "うちのきゅうりょう、しっていますか？",
      "ひとつきに、どのくらいもらえるとおもいますか？"
    ],
    "012": [
      "はじめてのきゅうりょうで、なにをしたいですか？",
      "さいしょのきゅうりょうは、どうするつもりですか？",
      "きゅうりょうをもらったら、まずなににつかいますか？"
    ],
    "013": [
      "かぞくに、しおくりをしますか？ どうしてですか？",
      "りょうしんにおかねをおくるよていはありますか？ それはなんのためですか？",
      "しおくりは、かんがえていますか？ りゆうもおしえてください。"
    ],
    "018": [
      "あなたのつよみを、おしえてください。",
      "じぶんのいいところを、はなしてください。",
      "ほかのひとにまけない、じぶんのいいところはなんですか？"
    ],
    "021": [
      "あなたは、どんなせいかくですか？",
      "じぶんのせいかくを、ひとことでいうと、なんですか？",
      "じぶんは、どんなひとだとおもいますか？"
    ],
    "022": [
      "１０ねんごには、どんなひとになっていたいですか？",
      "どんなおとなになりたいですか？",
      "これから、どんなひとをめざしたいですか？"
    ],
    "023": [
      "だれか、そんけいしているひとはいますか？ りゆうもおしえてください。",
      "あこがれているひとはいますか？ どうしてですか？",
      "あなたのおてほんになるひとは、だれですか？ なぜですか？"
    ],
    "024": [
      "どんなひとと、うまくやれますか？ にがてなタイプはありますか？",
      "どんなひとがすきですか？ どんなひとがにがてですか？",
      "なかよくなりやすいひとと、なりにくいひとを、おしえてください。"
    ],
    "025": [
      "じんせいで、いちばんだいじなことはなんですか？",
      "いつも、たいせつにしていることはありますか？",
      "あなたにとって、いちばんたいせつなものはなんですか？"
    ],
    "027": [
      "これまでで、いちばんうれしかったけいけんをおしえてください。",
      "なにか、とてもうれしかったことはありますか？",
      "いちばんしあわせだったのは、どんなときですか？"
    ],
    "029": [
      "とくいなことを、ちょっとやってみてもらえますか？",
      "ここで、なにかとくいなことをしてみてください。",
      "じぶんのとくいなことを、ここでみせてください。"
    ],
    "030": [
      "なにがとくいですか？",
      "あなたのとくいなことを、おしえてください。",
      "じしんがあることは、なんですか？"
    ],
    "031": [
      "なにがにがてですか？",
      "あまりとくいじゃないことは、ありますか？",
      "じぶんのにがてなことを、おしえてください。"
    ],
    "032": [
      "かぞくで、いちばんそんけいしているひとはだれですか？",
      "かぞくのなかで、あこがれているひとはいますか？",
      "かぞくのだれを、いちばんそんけいしていますか？"
    ],
    "033": [
      "かぞくについて、おしえてください。",
      "なんにんかぞくですか？",
      "かぞくは、どんなひとたちですか？"
    ],
    "034": [
      "なんにんきょうだいですか？",
      "きょうだいは、いますか？ なんにんですか？",
      "きょうだいのにんずうを、おしえてください。"
    ],
    "035": [
      "りょうしんは、にほんにいくことに、さんせいしていますか？",
      "かぞくは、にほんではたらくことを、どうおもっていますか？",
      "にほんにいくことを、りょうしんにはなしましたか？ なんていわれましたか？"
    ],
    "036": [
      "つきあっているひとは、いますか？",
      "かれしや、かのじょはいますか？",
      "こいびとは、いるんですか？"
    ],
    "037": [
      "かぞくを、にほんによびたいですか？",
      "しょうらい、かぞくといっしょに、にほんでくらしたいですか？",
      "にほんに、かぞくをつれてきたいとおもいますか？"
    ],
    "038": [
      "にほんに、しっているひとはいますか？",
      "にほんで、はたらいているともだちはいますか？",
      "しんせきやともだちが、にほんにいますか？"
    ],
    "039": [
      "やすみのひは、なにをしてすごしますか？",
      "しゅうまつは、いつもなにをしていますか？",
      "しごとがないひは、どうすごしていますか？"
    ],
    "041": [
      "そのスポーツは、いまもつづけていますか？",
      "いまも、そのスポーツをしていますか？ しゅうになんかいですか？",
      "そのスポーツ、さいきんもやっていますか？ どのくらいのペースですか？"
    ],
    "042": [
      "きょうだいとのかんけいは、どうですか？",
      "きょうだいとは、なかよしですか？",
      "きょうだいとは、よくはなしますか？"
    ],
    "043": [
      "いつごろ、けっこんしたいですか？",
      "けっこんのよていはありますか？",
      "なんさいくらいで、けっこんしたいですか？"
    ],
    "045": [
      "こうこうでは、なにをせんこうしていましたか？",
      "こうこうは、なにかですか？",
      "がっこうで、どんなべんきょうをしましたか？"
    ],
    "046": [
      "こうこうで、なんのじゅぎょうがすきでしたか？",
      "いちばんすきだったかもくは、なんですか？",
      "がっこうでは、どのべんきょうがおもしろかったですか？"
    ],
    "047": [
      "こうこうのとき、クラブかつどうはしていましたか？",
      "がっこうで、なにかぶかつにはいっていましたか？",
      "じゅぎょうのあと、なにかかつどうをしていましたか？"
    ],
    "048": [
      "これまでのしごとのけいけんを、おしえてください。",
      "はたらいたことはありますか？ どんなしごとですか？",
      "しょくれきを、おしえてください。"
    ],
    "049": [
      "そのしごとでは、どんなことをしていましたか？",
      "まえのしごとのないようを、くわしくおしえてください。",
      "どのしごとで、なにをたんとうしていましたか？"
    ],
    "050": [
      "しごとで、くろうしたことはありますか？",
      "まえのしごとで、たいへんだったことをおしえてください。",
      "はたらいていて、いちばんつらかったのはどんなときですか？"
    ],
    "051": [
      "しごとをしていないきかんがありますね。なにをしていましたか？",
      "まえのしごとをやめてから、なにをしていましたか？",
      "このあいだは、なにをしていたんですか？"
    ],
    "052": [
      "ひとりですんだことはありますか？",
      "いえをでて、くらしたことはありますか？",
      "かぞくとはなれて、せいかつしたことはありますか？"
    ],
    "053": [
      "めんせつは、これでなんかいめですか？",
      "まえにも、めんせつをうけたことがありますか？ どんなしごとでしたか？",
      "いままでうけためんせつのかいすうと、しごとのしゅるいをおしえてください。"
    ],
    "054": [
      "はたらくとき、なにがいちばんだいじですか？",
      "しごとをするうえで、たいせつにしたいことはなんですか？",
      "いいしごとをするために、なにがひつようだとおもいますか？"
    ],
    "058": [
      "ほかのひとと、かんがえがちがうときは、どうしますか？",
      "どうりょうと、いけんがあわなかったら、どうしますか？",
      "じぶんとちがういけんがでたら、どうしますか？"
    ],
    "059": [
      "ストレスは、どうやってかいしょうしますか？",
      "つかれたときや、イライラしたときは、どうしますか？",
      "きもちをリフレッシュするほうほうは、ありますか？"
    ],
    "061": [
      "ざんぎょうは、できますか？",
      "いそがしいときは、ざんぎょうがありますが、いいですか？",
      "なつは、しごとのじかんがながくなることがあります。だいじょうぶですか？"
    ],
    "062": [
      "どようびも、はたらけますか？",
      "やすみのひに、しごとがはいったら、だいじょうぶですか？",
      "どようびに、しゅっきんできますか？"
    ],
    "063": [
      "しごとをしたくないときは、どうしますか？",
      "やるきがなくなったら、どうしますか？",
      "がんばれないひは、どうやってきもちをきりかえますか？"
    ],
    "065": [
      "なんにんでくらしましたか？ どのくらいのきかんですか？",
      "そのときは、なんにんといっしょでしたか？ どれくらいすみましたか？",
      "いっしょにくらしたひとのかずと、きかんをおしえてください。"
    ],
    "069": [
      "ルームメイトとなかよくするために、なにをしますか？",
      "きょうどうせいかつで、きをつけることはなんですか？",
      "いっしょにすむひとと、いいかんけいをつくるには、どうしますか？"
    ],
    "070": [
      "にほんについて、なにをしっていますか？",
      "にほんのことを、なにかしっていますか？",
      "にほんについて、しっていることをはなしてください。"
    ],
    "071": [
      "にほんのイメージは、どうですか？",
      "にほんに、どんなイメージをもっていますか？",
      "にほんは、どんなところだとおもいますか？"
    ],
    "072": [
      "にほんは、なにいろのイメージですか？ りゆうもおしえてください。",
      "にほんをいろでいうと、なにいろですか？ どうしてですか？",
      "もしにほんがいろだったら、なにいろだとおもいますか？ なぜですか？"
    ],
    "073": [
      "はたらくけんのことを、しらべましたか？",
      "しごとをするけんは、どんなところかしっていますか？",
      "これからすむけんについて、なにかしっていることはありますか？"
    ],
    "074": [
      "にほんで、どこにいきたいですか？",
      "にほんで、いちどいってみたいばしょはどこですか？",
      "やすみのひに、にほんのどこにいきたいですか？"
    ],
    "075": [
      "にほんのりょうりを、たべたことはありますか？ どうでしたか？",
      "にほんのたべものは、すきですか？",
      "にほんりょうりについて、どうおもいますか？"
    ],
    "076": [
      "インドネシアのりょうりで、なにがおすすめですか？",
      "わたしにたべてほしいインドネシアりょうりは、ありますか？",
      "インドネシアのおいしいたべものを、おしえてください。"
    ],
    "077": [
      "インドネシアで、どこにいったらいいですか？",
      "インドネシアのおすすめのかんこうちを、おしえてください。",
      "インドネシアにいくなら、どこがいいですか？"
    ],
    "078": [
      "にほんで、ためしてみたいことはありますか？",
      "にほんにいったら、なにをしてみたいですか？",
      "しごといがいで、にほんでやりたいことはありますか？"
    ],
    "079": [
      "にほんで、なにをたべてみたいですか？",
      "たべてみたいにほんりょうりは、ありますか？",
      "にほんにいったら、なにがたべたいですか？"
    ],
    "080": [
      "にほんごのべんきょうは、どのくらいしていますか？",
      "いつから、にほんごをべんきょうしていますか？",
      "にほんごをならって、どのくらいになりますか？"
    ],
    "081": [
      "じしゅうは、どのくらいしていますか？",
      "うちでも、にほんごをべんきょうしていますか？ どのくらいですか？",
      "クラスいがいで、どんなべんきょうをしていますか？"
    ],
    "082": [
      "JFTやJLPTは、うけましたか？ けっかはどうでしたか？",
      "にほんごのしけんに、ごうかくしましたか？ なんてんでしたか？",
      "にほんごのしけんのけっかを、おしえてください。"
    ],
    "083": [
      "にほんで、JLPTはなんきゅうをめざしますか？",
      "にほんにいってからも、にほんごのべんきょうをつづけますか？ どのレベルまでですか？",
      "JLPTは、どこまでとりたいですか？"
    ],
    "084": [
      "３ねんで、JLPTのなんきゅうをとりたいですか？",
      "３ねんごの、にほんごのもくひょうはなんですか？",
      "にほんにいるあいだに、Nいくつにごうかくしたいですか？"
    ],
    "085": [
      "きょうかしょは、どこまですすみましたか？",
      "いま、なんかをべんきょうしていますか？",
      "いまのきょうざいは、どこまでやりましたか？"
    ],
    "088": [
      "たべものや、くすりのアレルギーはありますか？",
      "アレルギーがでるものは、ありますか？",
      "なにかアレルギーをもっていますか？"
    ],
    "089": [
      "うでたてふせは、なんかいできますか？ ふっきんは？",
      "うでたてふせと、ふっきんのかいすうを、おしえてください。",
      "うでたてふせと、ふっきんは、どのくらいできますか？"
    ],
    "090": [
      "じつぎテストは、どうでしたか？ なんてんくらいですか？",
      "いまのテストに、じぶんでてんすうをつけると、なんてんですか？",
      "さっきのテストのできは、１００てんちゅう、なんてんですか？"
    ],
    "091": [
      "じつぎテストで、むずかしかったところはどこですか？",
      "さっきのテストで、なにがいちばんたいへんでしたか？",
      "じつぎテストで、うまくできなかったことはありますか？"
    ],
    "094": [
      "たべられないものはありますか？",
      "きらいなたべものは、なんですか？",
      "あまりすきじゃないたべものは、ありますか？"
    ],
    "096": [
      "しごとがいそがしくて、だんじきがたいへんなときは、どうしますか？",
      "だんじきちゅうに、しごとがつらいときは、どうしますか？",
      "あついひのしごとで、だんじきがむりなときは、どうしますか？"
    ],
    "098": [
      "せんぱいに、おさけのせきにさそわれたら、いきますか？",
      "しごとのあと、のみかいにさそわれたら、どうしますか？",
      "かいしゃののみかいには、さんかできますか？"
    ],
    "100": [
      "にほんのたばこのルールは、しっていますか？ まもれますか？",
      "にほんでは、すっていいばしょがきまっています。だいじょうぶですか？",
      "きめられたばしょいがいで、たばこをすわないことを、まもれますか？"
    ],
    "102": [
      "にほんのなつは、あついです。たえられますか？",
      "あついなかでのしごとは、だいじょうぶですか？",
      "なつは４０どちかくになることもあります。だいじょうぶですか？"
    ],
    "103": [
      "たかいところでの、しごとのけいけんはありますか？",
      "たかいところで、さぎょうしたことがありますか？",
      "こうしょさぎょうのけいけんはありますか？"
    ],
    "104": [
      "たかいところでのしごとがありますが、こわくないですか？",
      "４メートルいじょうのたかさで、さぎょうできますか？",
      "たかいところは、へいきですか？"
    ],
    "105": [
      "ぶたにくをあつかうしごとですが、できますか？",
      "てぶくろをして、ぶたにくのせいひんをさわれますか？",
      "ぶたにくがはいったしょくひんを、つくるしごとは、だいじょうぶですか？"
    ],
    "106": [
      "アルコールで、しょうどくしたことはありますか？",
      "アルコールのしょうどくえきは、つかえますか？",
      "てやどうぐを、アルコールでしょうどくしたけいけんはありますか？"
    ],
    "107": [
      "えいごは、はなせますか？",
      "えいごは、どのくらいできますか？",
      "えいごで、かんたんなかいわはできますか？"
    ],
    "108": [
      "このしごとは、どんなしごとだとおもいますか？",
      "このしごとについて、どうおもいますか？",
      "このしごとは、どんなかんじだとおもいますか？"
    ],
    "109": [
      "のうぎょうを、したことはありますか？",
      "はたけやたんぼで、はたらいたことはありますか？",
      "やさいやこめを、つくったことはありますか？"
    ],
    "110": [
      "どんなしごとか、しらべましたか？",
      "このしごとで、なにをするかわかりますか？",
      "このしごとについて、せつめいしてください。"
    ],
    "111": [
      "おもいものを、はこんだことはありますか？ どのくらいのおもさですか？",
      "なんキロくらいまで、もてますか？",
      "おもいにもつをもつしごとを、したことはありますか？ なんキロですか？"
    ],
    "112": [
      "あんぜんにはたらくために、なにがだいじですか？",
      "けがをしないために、なにをしますか？",
      "げんばのあんぜんで、たいせつなことはなんですか？"
    ],
    "113": [
      "にほんで、とりたいしかくはありますか？",
      "しごとのしかくを、とりたいですか？ なんのしかくですか？",
      "にほんにいるあいだに、どんなしかくにチャレンジしたいですか？"
    ],
    "114": [
      "ながいじかん、たってしごとができますか？",
      "たったまま、おなじしごとをくりかえすのは、へいきですか？",
      "いちにちじゅうたって、おなじさぎょうをしますが、できますか？"
    ],
    "115": [
      "せいけつにするために、どんなことにきをつけますか？",
      "しょくひんをあつかうとき、なにをきれいにしますか？",
      "えいせいのために、なにをしますか？"
    ],
    "116": [
      "そうじはすきですか？",
      "そうじは、じょうずにできますか？",
      "いえで、よくそうじをしますか？"
    ],
    "117": [
      "えがおで、あいさつができますか？",
      "おきゃくさまに、げんきにあいさつできますか？",
      "ここで、おきゃくさんへのあいさつを、やってみてください。"
    ],
    "118": [
      "このしごとと、おなじようなしごとを、したことがありますか？",
      "このしごとに、やくだつけいけんはありますか？",
      "にたしごとのけいけんがあれば、おしえてください。"
    ],
    "119": [
      "そとでさぎょうするしごとは、できますか？",
      "あついひも、さむいひも、そとではたらけますか？",
      "おくがいのしごとですが、だいじょうぶですか？"
    ],
    "120": [
      "まちからとおいところでも、だいじょうぶですか？",
      "ちかくにおみせがすくないですが、だいじょうぶですか？",
      "しずかないなかで、くらせますか？"
    ],
    "121": [
      "どうぶつをかったことは、ありますか？ やさいをそだてたことは？",
      "どうぶつやしょくぶつを、そだてたけいけんはありますか？",
      "いえで、どうぶつやはなのせわをしていましたか？"
    ],
    "122": [
      "くるまやバイクを、なおしたことはありますか？",
      "くるまやバイクの、せいびのけいけんはありますか？",
      "じぶんのバイクを、じぶんでせいびしたことはありますか？"
    ],
    "123": [
      "がっこうで、じどうしゃを、べんきょうしましたか？",
      "がっこうで、くるまやバイクのべんきょうをしましたか？",
      "こうこうは、じどうしゃかですか？"
    ],
    "124": [
      "こうぐをつかったことはありますか？ なんのこうぐですか？",
      "つかえるこうぐを、おしえてください。",
      "スパナやドライバーを、つかったことはありますか？"
    ],
    "125": [
      "くるまのうんてんは、できますか？",
      "うんてんめんきょはありますか？",
      "くるまか、バイクのめんきょをもっていますか？"
    ],
    "126": [
      "てが、オイルでよごれますが、だいじょうぶですか？",
      "よごれるしごとは、へいきですか？",
      "さぎょうぎがオイルでよごれますが、できますか？"
    ],
    "127": [
      "くるまのぶひんのなまえを、にほんごでしっていますか？",
      "くるまのぶひんを、にほんごでいってみてください。",
      "にほんごで、どんなくるまのぶひんがいえますか？"
    ],
    "128": [
      "じこがおきないように、しごとでなにをきをつけますか？",
      "くるまのせいびで、なにがたいせつだとおもいますか？",
      "おきゃくさまのいのちにかかわるしごとです。なにをきをつけますか？"
    ]
  },
  // =============================================================
  // 言い方ごとの意味 / Arti tiap cara bertanya
  //   上の variants と同じ順番で、インドネシア語の意味を書きます。
  //   「おなじ いみの ききかた」と「ヒント2 いみ」に出ます。
  //   ない番号・ない行は、もとの質問の意味（id_）が出ます。
  // =============================================================
  variantsId: {
    "100": [
      "Apakah Anda tahu aturan merokok di Jepang? Bisakah Anda mematuhinya?",
      "Di Jepang, tempat untuk merokok sudah ditentukan. Apakah Anda tidak masalah?",
      "Bisakah Anda tidak merokok di luar tempat yang sudah ditentukan?"
    ],
    "101": [
      "Apakah ada yang ingin Anda tanyakan?",
      "Apakah ada pertanyaan lain?",
      "Kalau ada yang ingin Anda tanyakan kepada kami, silakan."
    ],
    "102": [
      "Musim panas di Jepang itu panas. Apakah Anda bisa tahan?",
      "Apakah Anda tidak masalah bekerja di tempat yang panas?",
      "Di musim panas, suhu kadang hampir 40 derajat. Apakah Anda tidak masalah?"
    ],
    "103": [
      "Apakah Anda punya pengalaman bekerja di tempat tinggi?",
      "Apakah Anda pernah bekerja di tempat tinggi?",
      "Apakah Anda punya pengalaman kerja di ketinggian?"
    ],
    "104": [
      "Ada pekerjaan di tempat tinggi. Apakah Anda tidak takut?",
      "Apakah Anda bisa bekerja di ketinggian lebih dari 4 meter?",
      "Apakah Anda tidak masalah dengan tempat tinggi?"
    ],
    "105": [
      "Pekerjaan ini menangani daging babi. Apakah Anda bisa?",
      "Apakah Anda bisa menyentuh produk daging babi dengan sarung tangan?",
      "Apakah Anda tidak masalah membuat makanan yang berisi daging babi?"
    ],
    "106": [
      "Apakah Anda pernah melakukan disinfeksi dengan alkohol?",
      "Apakah Anda bisa memakai cairan disinfektan beralkohol?",
      "Apakah Anda punya pengalaman membersihkan tangan atau alat dengan alkohol?"
    ],
    "107": [
      "Apakah Anda bisa berbicara bahasa Inggris?",
      "Seberapa bisa bahasa Inggris Anda?",
      "Apakah Anda bisa percakapan sederhana dalam bahasa Inggris?"
    ],
    "108": [
      "Menurut Anda, pekerjaan ini pekerjaan seperti apa?",
      "Bagaimana pendapat Anda tentang pekerjaan ini?",
      "Menurut Anda, pekerjaan ini rasanya seperti apa?"
    ],
    "109": [
      "Apakah Anda pernah bertani?",
      "Apakah Anda pernah bekerja di ladang atau sawah?",
      "Apakah Anda pernah menanam sayur atau padi?"
    ],
    "110": [
      "Apakah Anda sudah mencari tahu pekerjaan ini pekerjaan apa?",
      "Apakah Anda tahu apa yang dilakukan di pekerjaan ini?",
      "Tolong jelaskan tentang pekerjaan ini."
    ],
    "111": [
      "Apakah Anda pernah membawa barang berat? Seberapa berat?",
      "Anda bisa mengangkat sampai berapa kilo?",
      "Apakah Anda pernah bekerja mengangkat barang berat? Berapa kilo?"
    ],
    "112": [
      "Untuk bekerja dengan aman, apa yang penting?",
      "Apa yang Anda lakukan supaya tidak cedera?",
      "Apa hal yang penting untuk keselamatan di tempat kerja?"
    ],
    "113": [
      "Apakah ada sertifikat yang ingin Anda dapatkan di Jepang?",
      "Apakah Anda ingin mendapatkan sertifikat kerja? Sertifikat apa?",
      "Selama di Jepang, sertifikat apa yang ingin Anda coba dapatkan?"
    ],
    "114": [
      "Apakah Anda bisa bekerja sambil berdiri lama?",
      "Apakah Anda tidak masalah berdiri sambil mengulang pekerjaan yang sama?",
      "Anda akan berdiri seharian dan melakukan pekerjaan yang sama. Apakah Anda bisa?"
    ],
    "115": [
      "Untuk menjaga kebersihan, apa saja yang Anda perhatikan?",
      "Saat menangani makanan, apa yang Anda bersihkan?",
      "Apa yang Anda lakukan untuk menjaga kebersihan (higiene)?"
    ],
    "116": [
      "Apakah Anda suka bersih-bersih?",
      "Apakah Anda bisa bersih-bersih dengan baik?",
      "Apakah Anda sering bersih-bersih di rumah?"
    ],
    "117": [
      "Apakah Anda bisa menyapa dengan senyum?",
      "Apakah Anda bisa menyapa tamu dengan semangat?",
      "Coba sekarang praktikkan cara menyapa tamu di sini."
    ],
    "118": [
      "Apakah Anda pernah melakukan pekerjaan yang mirip dengan pekerjaan ini?",
      "Apakah Anda punya pengalaman yang berguna untuk pekerjaan ini?",
      "Kalau punya pengalaman kerja yang mirip, tolong ceritakan."
    ],
    "119": [
      "Apakah Anda bisa melakukan pekerjaan di luar ruangan?",
      "Apakah Anda bisa bekerja di luar, baik di hari panas maupun dingin?",
      "Ini pekerjaan di luar ruangan. Apakah Anda tidak masalah?"
    ],
    "120": [
      "Apakah Anda tidak masalah tinggal di tempat yang jauh dari kota?",
      "Di dekat sana hanya ada sedikit toko. Apakah Anda tidak masalah?",
      "Apakah Anda bisa tinggal di desa yang sepi?"
    ],
    "121": [
      "Apakah Anda pernah memelihara hewan? Pernah menanam sayur?",
      "Apakah Anda punya pengalaman memelihara hewan atau menanam tanaman?",
      "Apakah di rumah Anda dulu merawat hewan atau bunga?"
    ],
    "017": [
      "Silakan perkenalkan diri Anda.",
      "Bisakah Anda memperkenalkan diri secara singkat?",
      "Baik, pertama, tolong sebutkan nama dan asal Anda.",
      "Tolong ceritakan sedikit tentang diri Anda."
    ],
    "001": [
      "Kenapa Anda ingin bekerja di Jepang?",
      "Apa alasan Anda ingin bekerja di Jepang?",
      "Kenapa Anda berpikir untuk bekerja di Jepang?",
      "Anda ingin bekerja di Jepang itu karena apa?"
    ],
    "002": [
      "Kenapa Jepang, bukan negara lain?",
      "Ada Korea dan Taiwan juga. Kenapa Jepang?",
      "Apa alasan utama Anda memilih Jepang?"
    ],
    "003": [
      "Kenapa Anda memilih pekerjaan ini?",
      "Apa alasan Anda memilih pekerjaan ini?",
      "Kenapa Anda tertarik dengan pekerjaan ini?",
      "Menurut Anda, bagian apa yang bagus dari pekerjaan ini?"
    ],
    "004": [
      "Kenapa Anda melamar ke perusahaan kami?",
      "Kenapa Anda ingin bekerja di perusahaan ini?",
      "Ada banyak perusahaan. Kenapa perusahaan kami?"
    ],
    "005": [
      "Apakah Anda tahu isi pekerjaan ini?",
      "Menurut Anda, pekerjaan ini pekerjaan seperti apa?",
      "Bisakah Anda menjelaskan apa yang dilakukan di pekerjaan ini?"
    ],
    "006": [
      "Apa yang ingin Anda pelajari di Jepang?",
      "Dengan bekerja di Jepang, kemampuan apa yang ingin Anda dapatkan?",
      "Pengalaman seperti apa yang ingin Anda dapatkan di Jepang?"
    ],
    "009": [
      "Berapa lama Anda ingin bekerja di Jepang?",
      "Berapa tahun Anda berencana tinggal di Jepang?",
      "Sampai kapan Anda berencana bekerja di Jepang?",
      "Apakah Anda ingin bekerja lama di Jepang?"
    ],
    "010": [
      "Apakah Anda pulang setelah 3 tahun? Atau ingin bekerja lebih lama?",
      "Apakah Anda bisa bekerja 5 tahun atau lebih?",
      "Setelah kontrak selesai, apakah Anda ingin terus bekerja?"
    ],
    "011": [
      "Berapa yang ingin Anda tabung dalam 3 tahun?",
      "Berapa banyak uang yang Anda rencanakan untuk ditabung di Jepang?",
      "Berapa target tabungan Anda?"
    ],
    "014": [
      "Apa cita-cita Anda di masa depan?",
      "Apakah Anda punya cita-cita?",
      "Menurut Anda, 10 tahun lagi Anda sedang melakukan apa?"
    ],
    "015": [
      "Sejak kapan Anda punya cita-cita itu?",
      "Kapan Anda mulai berpikir seperti itu?",
      "Apa yang membuat Anda berpikir seperti itu?"
    ],
    "016": [
      "Setelah pulang ke Indonesia, apa rencana Anda?",
      "Setelah kembali ke Indonesia, Anda ingin melakukan apa?",
      "Setelah pekerjaan di Jepang selesai, apa yang akan Anda lakukan?"
    ],
    "019": [
      "Apa kelebihan dan kekurangan Anda?",
      "Tolong ceritakan kekuatan dan kelemahan Anda.",
      "Apa sisi baik Anda? Apakah ada sisi buruk Anda?"
    ],
    "020": [
      "Teman-teman bilang Anda orang yang seperti apa?",
      "Menurut keluarga dan teman, Anda orang yang seperti apa?",
      "Apakah ada hal yang sering dikatakan orang di sekitar tentang Anda?"
    ],
    "026": [
      "Tolong ceritakan pengalaman yang paling Anda perjuangkan selama ini.",
      "Apakah ada hal yang pernah Anda kerjakan dengan sungguh-sungguh?",
      "Sampai sekarang, apa hal yang paling Anda usahakan?"
    ],
    "028": [
      "Sampai sekarang, apa hal yang paling sulit bagi Anda?",
      "Apakah ada pengalaman yang berat bagi Anda?",
      "Tolong ceritakan hal yang paling berat sampai sekarang."
    ],
    "040": [
      "Anda suka melakukan apa?",
      "Apakah Anda melakukan olahraga tertentu?",
      "Tolong ceritakan hobi Anda."
    ],
    "044": [
      "Apakah Anda bisa membuat makanan sendiri?",
      "Apakah Anda bisa masak sendiri?",
      "Apakah Anda pandai memasak?"
    ],
    "055": [
      "Kalau Anda salah saat bekerja, apa yang Anda lakukan?",
      "Kalau Anda gagal, apa yang Anda lakukan?",
      "Kalau Anda membuat kesalahan, apa yang pertama Anda lakukan?"
    ],
    "056": [
      "Kalau dimarahi senior, apa yang Anda lakukan?",
      "Kalau atasan berbicara keras kepada Anda, apa yang Anda lakukan?",
      "Perusahaan di Jepang itu ketat. Apakah Anda tidak masalah?"
    ],
    "057": [
      "Saat bekerja dalam tim, apa yang penting?",
      "Supaya akur dengan rekan kerja, apa yang diperlukan?",
      "Dalam kerja sama tim, apa yang paling penting?"
    ],
    "060": [
      "Apakah Anda kuat bangun pagi?",
      "Setiap pagi, Anda bangun sekitar jam berapa?",
      "Kalau kerja mulai jam 6 pagi, apakah Anda tidak masalah?"
    ],
    "064": [
      "Apakah Anda punya pengalaman tinggal bersama orang lain?",
      "Apakah Anda pernah tinggal bersama orang lain?",
      "Apakah Anda pernah tinggal bersama teman di asrama atau apartemen?"
    ],
    "066": [
      "Apakah ada hal yang menyulitkan saat tinggal bersama?",
      "Saat tinggal bersama, masalah apa yang pernah terjadi?",
      "Apakah Anda pernah kesal saat tinggal bersama orang lain?"
    ],
    "067": [
      "Kalau ada masalah dengan teman sekamar, apa yang Anda lakukan?",
      "Saat ada masalah, bagaimana Anda menyelesaikannya?",
      "Kalau bertengkar dengan teman, apa yang Anda lakukan?"
    ],
    "068": [
      "Di Jepang, Anda akan tinggal bersama senior. Apakah Anda tidak masalah?",
      "Apakah Anda tidak masalah tinggal di asrama?",
      "Apakah Anda tidak masalah walaupun tidak punya kamar sendiri?"
    ],
    "086": [
      "Apakah badan Anda kuat?",
      "Pekerjaan ini mengangkat barang berat. Apakah Anda tidak masalah?",
      "Apakah Anda punya stamina?"
    ],
    "087": [
      "Sampai sekarang, apakah Anda pernah cedera parah?",
      "Apakah Anda pernah dirawat di rumah sakit?",
      "Apakah ada yang Anda khawatirkan tentang kesehatan Anda?"
    ],
    "092": [
      "Apakah Anda bisa naik sepeda?",
      "Apakah Anda pernah naik sepeda?",
      "Apakah Anda bisa pergi ke kantor dengan sepeda?"
    ],
    "093": [
      "Anda suka makan apa?",
      "Apa masakan yang paling Anda sukai?",
      "Tolong sebutkan makanan yang Anda sukai."
    ],
    "095": [
      "Saat bekerja, bagaimana dengan sholat Anda?",
      "Saat puasa, apakah Anda tetap bisa bekerja?",
      "Apakah ada yang Anda khawatirkan tentang agama di Jepang?"
    ],
    "097": [
      "Apakah Anda minum alkohol?",
      "Apakah Anda tidak masalah dengan alkohol?",
      "Bagaimana pendapat Anda tentang minum alkohol?"
    ],
    "099": [
      "Kalau rokok?",
      "Apakah Anda pernah merokok?",
      "Apakah Anda merokok?"
    ],
    "007": [
      "Apakah ada yang Anda khawatirkan tentang kehidupan di Jepang?",
      "Apakah ada hal yang membuat Anda cemas?",
      "Saat bekerja di Jepang, hal apa yang mungkin menyulitkan Anda?"
    ],
    "008": [
      "Menurut Anda, gajinya kira-kira berapa?",
      "Apakah Anda tahu gaji di perusahaan kami?",
      "Menurut Anda, sebulan bisa dapat berapa?"
    ],
    "012": [
      "Dengan gaji pertama, Anda ingin melakukan apa?",
      "Gaji pertama akan Anda gunakan untuk apa?",
      "Setelah menerima gaji, pertama-tama akan Anda pakai untuk apa?"
    ],
    "013": [
      "Apakah Anda akan mengirim uang ke keluarga? Kenapa?",
      "Apakah Anda berencana mengirim uang ke orang tua? Untuk apa?",
      "Apakah Anda berpikir untuk mengirim uang? Tolong sebutkan juga alasannya."
    ],
    "018": [
      "Tolong ceritakan kekuatan Anda.",
      "Tolong ceritakan sisi baik diri Anda.",
      "Apa sisi baik Anda yang tidak kalah dari orang lain?"
    ],
    "021": [
      "Anda orang yang sifatnya seperti apa?",
      "Kalau sifat Anda diungkapkan dalam satu kata, apa?",
      "Menurut Anda, Anda orang yang seperti apa?"
    ],
    "022": [
      "10 tahun lagi, Anda ingin menjadi orang seperti apa?",
      "Anda ingin menjadi orang dewasa seperti apa?",
      "Mulai sekarang, Anda ingin menjadi orang seperti apa?"
    ],
    "023": [
      "Apakah ada orang yang Anda hormati? Tolong sebutkan juga alasannya.",
      "Apakah ada orang yang Anda kagumi? Kenapa?",
      "Siapa orang yang menjadi teladan Anda? Kenapa?"
    ],
    "024": [
      "Dengan orang seperti apa Anda bisa akur? Apakah ada tipe yang sulit bagi Anda?",
      "Anda suka orang seperti apa? Orang seperti apa yang sulit bagi Anda?",
      "Tolong ceritakan orang yang mudah dan sulit untuk akrab dengan Anda."
    ],
    "025": [
      "Apa hal yang paling penting dalam hidup?",
      "Apakah ada hal yang selalu Anda anggap penting?",
      "Bagi Anda, apa hal yang paling berharga?"
    ],
    "027": [
      "Tolong ceritakan pengalaman yang paling membuat Anda senang sampai sekarang.",
      "Apakah ada hal yang sangat membuat Anda senang?",
      "Kapan Anda merasa paling bahagia?"
    ],
    "029": [
      "Bisakah Anda mencoba sedikit menunjukkan keahlian Anda?",
      "Coba tunjukkan keahlian Anda di sini.",
      "Tolong perlihatkan keahlian Anda di sini."
    ],
    "030": [
      "Apa yang Anda kuasai?",
      "Tolong ceritakan hal yang Anda kuasai.",
      "Hal apa yang membuat Anda percaya diri?"
    ],
    "031": [
      "Apa yang kurang Anda kuasai?",
      "Apakah ada hal yang kurang Anda kuasai?",
      "Tolong ceritakan hal yang sulit bagi Anda."
    ],
    "032": [
      "Di keluarga, siapa yang paling Anda hormati?",
      "Di antara keluarga, apakah ada orang yang Anda kagumi?",
      "Siapa anggota keluarga yang paling Anda hormati?"
    ],
    "033": [
      "Tolong ceritakan tentang keluarga Anda.",
      "Keluarga Anda ada berapa orang?",
      "Keluarga Anda orang-orang yang seperti apa?"
    ],
    "034": [
      "Anda berapa bersaudara?",
      "Apakah Anda punya saudara kandung? Berapa orang?",
      "Tolong sebutkan jumlah saudara kandung Anda."
    ],
    "035": [
      "Apakah orang tua Anda setuju Anda pergi ke Jepang?",
      "Bagaimana pendapat keluarga tentang Anda bekerja di Jepang?",
      "Apakah Anda sudah bicara dengan orang tua tentang pergi ke Jepang? Apa kata mereka?"
    ],
    "036": [
      "Apakah ada orang yang sedang berpacaran dengan Anda?",
      "Apakah Anda punya pacar (laki-laki atau perempuan)?",
      "Apakah Anda punya kekasih?"
    ],
    "037": [
      "Apakah Anda ingin mengajak keluarga ke Jepang?",
      "Di masa depan, apakah Anda ingin tinggal bersama keluarga di Jepang?",
      "Apakah Anda ingin membawa keluarga ke Jepang?"
    ],
    "038": [
      "Apakah ada orang yang Anda kenal di Jepang?",
      "Apakah Anda punya teman yang bekerja di Jepang?",
      "Apakah ada saudara atau teman Anda di Jepang?"
    ],
    "039": [
      "Pada hari libur, Anda menghabiskan waktu dengan apa?",
      "Saat akhir pekan, biasanya Anda melakukan apa?",
      "Pada hari tidak bekerja, bagaimana Anda menghabiskan waktu?"
    ],
    "041": [
      "Apakah olahraga itu masih Anda lakukan sampai sekarang?",
      "Apakah sekarang Anda masih melakukan olahraga itu? Berapa kali seminggu?",
      "Apakah akhir-akhir ini Anda masih melakukan olahraga itu? Seberapa sering?"
    ],
    "042": [
      "Bagaimana hubungan Anda dengan saudara kandung?",
      "Apakah Anda akrab dengan saudara kandung?",
      "Apakah Anda sering berbicara dengan saudara kandung?"
    ],
    "043": [
      "Kira-kira kapan Anda ingin menikah?",
      "Apakah Anda punya rencana menikah?",
      "Anda ingin menikah sekitar umur berapa?"
    ],
    "045": [
      "Di SMA/SMK, Anda mengambil jurusan apa?",
      "Anda sekolah di jurusan apa?",
      "Di sekolah, Anda belajar apa saja?"
    ],
    "046": [
      "Di SMA/SMK, pelajaran apa yang Anda sukai?",
      "Mata pelajaran apa yang paling Anda sukai?",
      "Di sekolah, pelajaran apa yang menarik bagi Anda?"
    ],
    "047": [
      "Saat SMA/SMK, apakah Anda ikut kegiatan klub?",
      "Di sekolah, apakah Anda ikut ekstrakurikuler?",
      "Setelah jam pelajaran, apakah Anda ikut kegiatan tertentu?"
    ],
    "048": [
      "Tolong ceritakan pengalaman kerja Anda selama ini.",
      "Apakah Anda pernah bekerja? Pekerjaan apa?",
      "Tolong ceritakan riwayat kerja Anda."
    ],
    "049": [
      "Di pekerjaan itu, apa saja yang Anda lakukan?",
      "Tolong ceritakan dengan detail isi pekerjaan Anda sebelumnya.",
      "Di pekerjaan mana Anda bertugas mengerjakan apa?"
    ],
    "050": [
      "Apakah ada hal yang berat dalam pekerjaan Anda?",
      "Tolong ceritakan hal yang berat di pekerjaan sebelumnya.",
      "Saat bekerja, kapan Anda merasa paling berat?"
    ],
    "051": [
      "Ada masa ketika Anda tidak bekerja, ya. Saat itu Anda melakukan apa?",
      "Setelah berhenti dari pekerjaan sebelumnya, Anda melakukan apa?",
      "Di masa ini, Anda melakukan apa?"
    ],
    "052": [
      "Apakah Anda pernah tinggal sendiri?",
      "Apakah Anda pernah tinggal di luar rumah orang tua?",
      "Apakah Anda pernah hidup terpisah dari keluarga?"
    ],
    "053": [
      "Ini wawancara Anda yang ke berapa?",
      "Apakah Anda pernah ikut wawancara sebelumnya? Untuk pekerjaan apa?",
      "Tolong sebutkan berapa kali Anda ikut wawancara dan untuk jenis pekerjaan apa."
    ],
    "054": [
      "Saat bekerja, apa yang paling penting?",
      "Dalam bekerja, hal apa yang ingin Anda jaga?",
      "Menurut Anda, untuk bekerja dengan baik, apa yang diperlukan?"
    ],
    "058": [
      "Kalau pendapat Anda berbeda dengan orang lain, apa yang Anda lakukan?",
      "Kalau pendapat Anda tidak sama dengan rekan kerja, apa yang Anda lakukan?",
      "Kalau ada pendapat yang berbeda dengan Anda, apa yang Anda lakukan?"
    ],
    "059": [
      "Bagaimana cara Anda menghilangkan stres?",
      "Saat lelah atau kesal, apa yang Anda lakukan?",
      "Apakah Anda punya cara untuk menyegarkan pikiran?"
    ],
    "061": [
      "Apakah Anda bisa lembur?",
      "Saat sibuk ada lembur. Apakah boleh?",
      "Di musim panas, jam kerja kadang jadi panjang. Apakah Anda tidak masalah?"
    ],
    "062": [
      "Apakah Anda bisa bekerja juga di hari Sabtu?",
      "Kalau ada pekerjaan di hari libur, apakah Anda tidak masalah?",
      "Apakah Anda bisa masuk kerja di hari Sabtu?"
    ],
    "063": [
      "Saat Anda tidak ingin bekerja, apa yang Anda lakukan?",
      "Kalau semangat Anda hilang, apa yang Anda lakukan?",
      "Pada hari Anda tidak bisa bersemangat, bagaimana cara Anda mengubah perasaan?"
    ],
    "065": [
      "Anda tinggal dengan berapa orang? Berapa lama?",
      "Saat itu Anda tinggal bersama berapa orang? Berapa lama tinggal di sana?",
      "Tolong sebutkan jumlah orang yang tinggal bersama Anda dan lamanya."
    ],
    "069": [
      "Supaya akrab dengan teman sekamar, apa yang Anda lakukan?",
      "Dalam hidup bersama, apa yang Anda perhatikan?",
      "Supaya punya hubungan baik dengan orang yang tinggal bersama, apa yang Anda lakukan?"
    ],
    "070": [
      "Apa yang Anda ketahui tentang Jepang?",
      "Apakah Anda tahu sesuatu tentang Jepang?",
      "Tolong ceritakan hal yang Anda ketahui tentang Jepang."
    ],
    "071": [
      "Bagaimana gambaran Anda tentang Jepang?",
      "Anda punya gambaran seperti apa tentang Jepang?",
      "Menurut Anda, Jepang itu tempat seperti apa?"
    ],
    "072": [
      "Jepang itu Anda bayangkan warna apa? Tolong sebutkan juga alasannya.",
      "Kalau Jepang dikatakan dengan warna, warna apa? Kenapa?",
      "Seandainya Jepang adalah warna, menurut Anda warna apa? Kenapa?"
    ],
    "073": [
      "Apakah Anda sudah mencari tahu tentang prefektur tempat Anda bekerja?",
      "Apakah Anda tahu prefektur tempat Anda bekerja itu seperti apa?",
      "Apakah ada yang Anda ketahui tentang prefektur tempat Anda akan tinggal?"
    ],
    "074": [
      "Di Jepang, Anda ingin pergi ke mana?",
      "Di Jepang, tempat mana yang ingin Anda kunjungi sekali?",
      "Pada hari libur, Anda ingin pergi ke mana di Jepang?"
    ],
    "075": [
      "Apakah Anda pernah makan masakan Jepang? Bagaimana rasanya?",
      "Apakah Anda suka makanan Jepang?",
      "Bagaimana pendapat Anda tentang masakan Jepang?"
    ],
    "076": [
      "Masakan Indonesia apa yang Anda rekomendasikan?",
      "Apakah ada masakan Indonesia yang Anda ingin saya coba?",
      "Tolong ceritakan makanan Indonesia yang enak."
    ],
    "077": [
      "Di Indonesia, sebaiknya pergi ke mana?",
      "Tolong ceritakan tempat wisata yang Anda rekomendasikan di Indonesia.",
      "Kalau pergi ke Indonesia, ke mana yang bagus?"
    ],
    "078": [
      "Apakah ada hal yang ingin Anda coba di Jepang?",
      "Kalau sudah di Jepang, Anda ingin mencoba melakukan apa?",
      "Selain bekerja, apakah ada yang ingin Anda lakukan di Jepang?"
    ],
    "079": [
      "Di Jepang, Anda ingin mencoba makan apa?",
      "Apakah ada masakan Jepang yang ingin Anda coba?",
      "Kalau sudah di Jepang, Anda ingin makan apa?"
    ],
    "080": [
      "Sudah berapa lama Anda belajar bahasa Jepang?",
      "Sejak kapan Anda belajar bahasa Jepang?",
      "Sudah berapa lama sejak Anda mulai belajar bahasa Jepang?"
    ],
    "081": [
      "Seberapa banyak Anda belajar sendiri?",
      "Apakah Anda juga belajar bahasa Jepang di rumah? Seberapa banyak?",
      "Selain di kelas, Anda belajar apa saja?"
    ],
    "082": [
      "Apakah Anda sudah ikut JFT atau JLPT? Bagaimana hasilnya?",
      "Apakah Anda sudah lulus tes bahasa Jepang? Berapa nilainya?",
      "Tolong sebutkan hasil tes bahasa Jepang Anda."
    ],
    "083": [
      "Di Jepang, Anda menargetkan JLPT level berapa?",
      "Setelah di Jepang, apakah Anda akan terus belajar bahasa Jepang? Sampai level berapa?",
      "Anda ingin mendapatkan JLPT sampai level berapa?"
    ],
    "084": [
      "Dalam 3 tahun, Anda ingin mendapatkan JLPT level berapa?",
      "Apa target bahasa Jepang Anda 3 tahun lagi?",
      "Selama di Jepang, Anda ingin lulus N berapa?"
    ],
    "085": [
      "Buku pelajarannya sudah sampai mana?",
      "Sekarang Anda sedang belajar bab berapa?",
      "Buku pelajaran yang sekarang sudah Anda kerjakan sampai mana?"
    ],
    "088": [
      "Apakah Anda punya alergi makanan atau obat?",
      "Apakah ada sesuatu yang membuat Anda alergi?",
      "Apakah Anda punya alergi tertentu?"
    ],
    "089": [
      "Push-up bisa berapa kali? Kalau sit-up?",
      "Tolong sebutkan berapa kali Anda bisa push-up dan sit-up.",
      "Push-up dan sit-up, kira-kira Anda bisa berapa banyak?"
    ],
    "090": [
      "Bagaimana tes praktiknya? Kira-kira berapa nilainya?",
      "Kalau Anda sendiri memberi nilai untuk tes tadi, berapa nilainya?",
      "Hasil tes tadi, dari 100, berapa nilainya?"
    ],
    "091": [
      "Di tes praktik, bagian mana yang sulit?",
      "Di tes tadi, apa yang paling berat?",
      "Di tes praktik, apakah ada yang tidak bisa Anda lakukan dengan baik?"
    ],
    "094": [
      "Apakah ada makanan yang tidak bisa Anda makan?",
      "Makanan apa yang tidak Anda sukai?",
      "Apakah ada makanan yang kurang Anda sukai?"
    ],
    "096": [
      "Kalau pekerjaan sibuk dan puasa terasa berat, apa yang Anda lakukan?",
      "Kalau pekerjaan terasa berat saat puasa, apa yang Anda lakukan?",
      "Kalau bekerja di hari panas dan tidak mungkin berpuasa, apa yang Anda lakukan?"
    ],
    "098": [
      "Kalau diajak senior ke acara minum, apakah Anda ikut?",
      "Kalau diajak acara minum setelah kerja, apa yang Anda lakukan?",
      "Apakah Anda bisa ikut acara minum perusahaan?"
    ],
    "122": [
      "Apakah Anda pernah memperbaiki mobil atau motor?",
      "Apakah Anda punya pengalaman servis mobil atau motor?",
      "Apakah Anda pernah merawat motor Anda sendiri?"
    ],
    "123": [
      "Apakah Anda belajar otomotif di sekolah?",
      "Di sekolah, apakah Anda belajar tentang mobil atau motor?",
      "Apakah Anda dari jurusan otomotif?"
    ],
    "124": [
      "Apakah Anda pernah memakai perkakas? Perkakas apa?",
      "Tolong sebutkan perkakas yang bisa Anda pakai.",
      "Apakah Anda pernah memakai kunci pas atau obeng?"
    ],
    "125": [
      "Apakah Anda bisa menyetir mobil?",
      "Apakah Anda punya SIM?",
      "Apakah Anda punya SIM mobil atau motor?"
    ],
    "126": [
      "Tangan Anda akan kotor terkena oli. Apakah Anda tidak masalah?",
      "Apakah Anda tidak masalah dengan pekerjaan yang kotor?",
      "Baju kerja Anda akan kotor terkena oli. Apakah Anda bisa?"
    ],
    "127": [
      "Apakah Anda tahu nama komponen mobil dalam bahasa Jepang?",
      "Coba sebutkan nama-nama komponen mobil dalam bahasa Jepang.",
      "Komponen mobil apa saja yang bisa Anda sebutkan dalam bahasa Jepang?"
    ],
    "128": [
      "Supaya tidak terjadi kecelakaan, apa yang Anda perhatikan dalam pekerjaan?",
      "Dalam servis kendaraan, menurut Anda apa yang penting?",
      "Pekerjaan ini menyangkut nyawa pelanggan. Apa yang akan Anda perhatikan?"
    ]
  },

  // =============================================================
  // こたえかたのポイント / Tips menjawab
  //   答えたあとに表示します。[日本語, インドネシア語] の組で書きます。
  // =============================================================
  points: {
    "102": [
      ["「だいじょうぶです」に、りゆうを1つたす", "Tambahkan satu alasan setelah \"daijoubu desu\"."],
      ["れい：はい、だいじょうぶです。インドネシアでも、そとでしごとをしていました。", "Contoh: Ya, tidak masalah. Di Indonesia saya juga pernah bekerja di luar."]
    ],
    "103": [
      ["あれば、いつ・どこで・なにをしたかを みじかく", "Kalau pernah, sebutkan singkat kapan, di mana, dan apa."],
      ["なければ、しょうじきに「ありません。でも、がんばります」", "Kalau belum, jawab jujur: \"Arimasen. Demo, ganbarimasu.\""]
    ],
    "104": [
      ["こわくないこと、あんぜんを まもれることを つたえる", "Sampaikan bahwa Anda tidak takut dan bisa menjaga keselamatan."],
      ["れい：はい、だいじょうぶです。あんぜんベルトを ちゃんと つかいます。", "Contoh: Ya, tidak masalah. Saya akan memakai sabuk pengaman dengan benar."]
    ],
    "086": [
      ["「あります」だけでなく、いつも している うんどうを いう", "Jangan hanya \"arimasu\", sebutkan olahraga yang biasa Anda lakukan."],
      ["れい：はい、あります。まいあさ ３キロ はしっています。", "Contoh: Ya. Setiap pagi saya lari 3 km."]
    ],
    "089": [
      ["かいすうは しょうじきに。うそは あとで わかる", "Sebutkan jumlahnya dengan jujur. Kebohongan akan ketahuan."],
      ["れい：うでたてふせは ３０かい、ふっきんは ４０かい できます。", "Contoh: Push-up 30 kali, sit-up 40 kali."]
    ],
    "110": [
      ["しょくしゅの なまえと、おもな しごとを １つ いう", "Sebutkan nama bidang kerja dan satu tugas utamanya."],
      ["れい：はい、けんせつの しごとです。たてものを つくる しごとです。", "Contoh: Ya, pekerjaan konstruksi. Pekerjaan membangun gedung."]
    ],
    "111": [
      ["なにを、なんキロくらい もったか、ぐたいてきに", "Sebutkan barang apa dan kira-kira berapa kilo, secara konkret."],
      ["れい：はい。いえで、２５キロの こめを はこんでいました。", "Contoh: Ya. Di rumah saya biasa mengangkat beras 25 kg."]
    ],
    "112": [
      ["ルールを まもる・わからないときは きく、を つたえる", "Sampaikan: menaati aturan dan bertanya kalau tidak tahu."],
      ["れい：ルールを まもることです。わからないときは、すぐ せんぱいに ききます。", "Contoh: Menaati aturan. Kalau tidak tahu, saya langsung bertanya kepada senior."]
    ],
    "045": [
      ["せんこうと、しごとの つながりを １つ", "Sebutkan jurusan dan satu hubungannya dengan pekerjaan."],
      ["れい：きかいを べんきょうしました。どうぐの つかいかたを ならいました。", "Contoh: Saya belajar mesin. Saya belajar cara memakai alat."]
    ],
    "113": [
      ["しごとに かんけいする しかくを １つ", "Sebutkan satu sertifikat yang berhubungan dengan pekerjaan."],
      ["わからなければ「にほんごの N3 です」でも いい", "Kalau belum tahu, boleh jawab: \"Nihongo no N3 desu\"."]
    ],
    "105": [
      ["できることを はっきり つたえる。あいまいに しない", "Sampaikan dengan jelas apa yang bisa Anda lakukan. Jangan ragu-ragu."],
      ["れい：はい、てぶくろを すれば だいじょうぶです。", "Contoh: Ya, kalau memakai sarung tangan tidak masalah."]
    ],
    "106": [
      ["けいけんの あり・なしを しょうじきに", "Jawab jujur pernah atau belum."],
      ["はだに あわなかった ことが あれば、それも つたえる", "Kalau pernah ada masalah di kulit, sampaikan juga."]
    ],
    "088": [
      ["しょうじきに こたえる。かくさない", "Jawab dengan jujur. Jangan menyembunyikan."],
      ["れい：いいえ、ありません。", "Contoh: Tidak, tidak ada."]
    ],
    "060": [
      ["なんじに おきているか、じっさいの じかんを いう", "Sebutkan jam bangun Anda yang sebenarnya."],
      ["れい：はい、できます。まいにち ５じに おきています。", "Contoh: Ya, bisa. Setiap hari saya bangun jam 5."]
    ],
    "097": [
      ["しょうじきに こたえる", "Jawab dengan jujur."],
      ["のまない ときは、ていねいに りゆうを みじかく", "Kalau tidak minum, sampaikan alasannya singkat dan sopan."]
    ],
    "114": [
      ["けいけんが あれば いう。なければ「なれるように がんばります」", "Sebutkan pengalaman kalau ada. Kalau belum: \"Nareru you ni ganbarimasu\"."],
      ["れい：はい、だいじょうぶです。まえの しごとで、８じかん たっていました。", "Contoh: Ya, tidak masalah. Di pekerjaan sebelumnya saya berdiri 8 jam."]
    ],
    "115": [
      ["てあらい・ふく・かみ など、ぐたいてきに", "Sebutkan hal konkret: cuci tangan, pakaian, rambut, dll."],
      ["れい：てを よく あらいます。つめも みじかく します。", "Contoh: Saya mencuci tangan dengan baik. Kuku juga dipotong pendek."]
    ],
    "056": [
      ["いいわけを しないで、まず あやまる・なおす", "Jangan beralasan. Pertama minta maaf, lalu perbaiki."],
      ["れい：「すみません」と いって、つぎから きを つけます。", "Contoh: Saya bilang \"sumimasen\", lalu lain kali lebih hati-hati."]
    ],
    "084": [
      ["もくひょうを はっきり いう", "Sebutkan target dengan jelas."],
      ["れい：３ねんで N3 に ごうかくしたいです。", "Contoh: Dalam 3 tahun saya ingin lulus N3."]
    ],
    "095": [
      ["じぶんの かんがえを しょうじきに つたえる", "Sampaikan pendapat Anda dengan jujur."],
      ["そのうえで、しごとや かいしゃの ルールに あわせる きもちも つたえる", "Lalu sampaikan juga kesediaan menyesuaikan dengan pekerjaan dan aturan perusahaan."]
    ],
    "107": [
      ["できる レベルを しょうじきに", "Sebutkan tingkat kemampuan Anda dengan jujur."],
      ["「すこし」なら、かんたんな あいさつを してみせる", "Kalau \"sedikit\", tunjukkan salam sederhana dalam bahasa Inggris."]
    ],
    "108": [
      ["しごとの ないようと、じぶんに あう ところを いう", "Sebutkan isi pekerjaan dan bagian yang cocok dengan diri Anda."],
      ["れい：へやを きれいにする しごとです。そうじが すきなので、あっています。", "Contoh: Pekerjaan membersihkan kamar. Saya suka bersih-bersih, jadi cocok."]
    ],
    "064": [
      ["だれと、なんにんで、どのくらい", "Dengan siapa, berapa orang, dan berapa lama."],
      ["れい：はい。LPKで ８にんと ３かげつ くらしています。", "Contoh: Ya. Di LPK saya tinggal dengan 8 orang selama 3 bulan."]
    ],
    "067": [
      ["はなしあう・ルールを きめる など、じぶんが した ことを いう", "Sebutkan apa yang Anda lakukan, misalnya berdiskusi atau membuat aturan."],
      ["けんかの はなしだけで おわらない", "Jangan hanya bercerita soal bertengkar."]
    ],
    "116": [
      ["すき・とくい な りゆうを １つ", "Sebutkan satu alasan kenapa Anda suka atau pandai."],
      ["れい：はい。いえで まいにち そうじを しています。", "Contoh: Ya. Di rumah saya bersih-bersih setiap hari."]
    ],
    "117": [
      ["その ばで、えがおで あいさつを してみせる", "Langsung tunjukkan salam dengan senyum di tempat."],
      ["れい：はい。（えがおで）おはようございます！", "Contoh: Ya. (dengan senyum) Ohayou gozaimasu!"]
    ],
    "081": [
      ["なにを、どのくらい、ぐたいてきに", "Sebutkan apa dan berapa lama, secara konkret."],
      ["れい：まいばん １じかん、ことばを おぼえています。", "Contoh: Setiap malam 1 jam saya menghafal kosakata."]
    ],
    "083": [
      ["もくひょうの レベルを はっきり", "Sebutkan level target dengan jelas."],
      ["れい：N3 まで べんきょうしたいです。", "Contoh: Saya ingin belajar sampai N3."]
    ],
    "077": [
      ["ばしょの なまえと、いい ところを １つ", "Sebutkan nama tempat dan satu hal yang bagus."],
      ["れい：バリです。うみが とても きれいです。", "Contoh: Bali. Lautnya sangat indah."]
    ],
    "049": [
      ["しごとごとに「どこで・なにを」を みじかく", "Untuk tiap pekerjaan, sebutkan singkat \"di mana, apa\"."],
      ["この しごとに にている けいけんが あれば、さいごに いう", "Kalau ada pengalaman yang mirip dengan pekerjaan ini, sebutkan di akhir."]
    ],
    "051": [
      ["かくさないで、しょうじきに", "Jangan menyembunyikan, jawab dengan jujur."],
      ["その あいだに した こと（べんきょう・てつだい など）を いう", "Sebutkan yang Anda lakukan saat itu (belajar, membantu keluarga, dll.)."]
    ],
    "061": [
      ["「だいじょうぶです」と、はっきり", "Jawab \"daijoubu desu\" dengan jelas."],
      ["れい：はい、だいじょうぶです。たくさん はたらいて、ちょきんしたいです。", "Contoh: Ya, tidak masalah. Saya ingin banyak bekerja dan menabung."]
    ],
    "062": [
      ["はっきり こたえる", "Jawab dengan jelas."],
      ["れい：はい、でられます。", "Contoh: Ya, saya bisa masuk."]
    ],
    "063": [
      ["じぶんの きもちを きりかえる ほうほうを １つ", "Sebutkan satu cara Anda mengembalikan semangat."],
      ["れい：かぞくの しゃしんを みて、もくひょうを おもいだします。", "Contoh: Saya melihat foto keluarga dan mengingat tujuan saya."]
    ],
    "048": [
      ["あたらしい じゅんに、しごとの なまえと きかん", "Urutkan dari yang terbaru: nama pekerjaan dan lamanya."],
      ["りれきしょと おなじ ないようで こたえる", "Jawab sesuai isi CV."]
    ],
    "118": [
      ["にている ところを １つ みつけて いう", "Temukan dan sebutkan satu kemiripan."],
      ["なければ「ありません。でも、はやく おぼえます」", "Kalau tidak ada: \"Arimasen. Demo, hayaku oboemasu\"."]
    ],
    "098": [
      ["かいしゃの ひとと なかよく したい きもちを つたえる", "Sampaikan bahwa Anda ingin akrab dengan orang di perusahaan."],
      ["のまない ときは：いきます。でも、ジュースを のみます。", "Kalau tidak minum alkohol: \"Ikimasu. Demo, juusu o nomimasu.\""]
    ],
    "109": [
      ["いつ・どこで・なにを そだてたか", "Kapan, di mana, dan apa yang ditanam atau dipelihara."],
      ["れい：りょうしんの たんぼで、こめを つくって いました。", "Contoh: Saya menanam padi di sawah orang tua."]
    ],
    "068": [
      ["「だいじょうぶです」に、けいけんを たす", "Tambahkan pengalaman setelah \"daijoubu desu\"."],
      ["れい：はい。いまも LPKで ともだちと くらしています。", "Contoh: Ya. Sekarang pun saya tinggal bersama teman di LPK."]
    ],
    "119": [
      ["あつさ・さむさに まけない ことを つたえる", "Sampaikan bahwa Anda kuat menghadapi panas dan dingin."],
      ["れい：はい。インドネシアで、そとの しごとを していました。", "Contoh: Ya. Di Indonesia saya pernah bekerja di luar."]
    ],
    "120": [
      ["いなかの いい ところを １つ いう", "Sebutkan satu hal baik tentang tinggal di desa."],
      ["れい：はい。わたしの むらも しずかで、すきです。", "Contoh: Ya. Desa saya juga tenang, saya suka."]
    ],
    "121": [
      ["なにを、どのくらい せわしたか", "Apa dan berapa lama Anda merawatnya."],
      ["れい：はい。いえで、にわとりを かっていました。", "Contoh: Ya. Di rumah saya memelihara ayam."]
    ],
    "044": [
      ["つくれる りょうりを １つ いう", "Sebutkan satu masakan yang bisa Anda buat."],
      ["れい：はい。ナシゴレンを つくれます。", "Contoh: Ya. Saya bisa membuat nasi goreng."]
    ],
    "092": [
      ["はっきり こたえる", "Jawab dengan jelas."],
      ["のれない ときは「れんしゅうします」", "Kalau belum bisa: \"Renshuu shimasu\"."]
    ],
    "087": [
      ["しょうじきに こたえる。かくさない", "Jawab dengan jujur. Jangan menyembunyikan."],
      ["いまは げんきなら、それも つたえる", "Kalau sekarang sudah sehat, sampaikan juga."]
    ],
    // ---- 2026-11-17 追加（すべての質問に こたえかたのポイント） ----
    "001": [
      ["にほんを えらんだ りゆうと、にほんで したい ことを つなげる", "Hubungkan alasan memilih Jepang dengan hal yang ingin dilakukan di Jepang."],
      ["れい：にほんの ぎじゅつを まなびたいです。かえったら、それを いかしたいです。", "Contoh: Saya ingin belajar teknologi Jepang. Setelah pulang, saya ingin memanfaatkannya."]
    ],
    "002": [
      ["ほかの くにと くらべて、にほんの いい ところを １つ", "Bandingkan dengan negara lain, lalu sebutkan satu kelebihan Jepang."],
      ["れい：にほんは あんぜんで、みんなが ルールを まもる くにだからです。", "Contoh: Karena Jepang aman dan semua orang menaati aturan."]
    ],
    "003": [
      ["しごとに きょうみを もった きっかけを みじかく", "Sebutkan singkat awal mula Anda tertarik dengan pekerjaan ini."],
      ["れい：ちちが だいくなので、ちいさい ときから けんせつに きょうみが ありました。", "Contoh: Ayah saya tukang kayu, jadi sejak kecil saya tertarik dengan konstruksi."]
    ],
    "004": [
      ["かいしゃの しごとや ばしょで、きょうみを もった ことを １つ", "Sebutkan satu hal tentang pekerjaan atau lokasi perusahaan yang menarik bagi Anda."],
      ["「きゅうりょうが たかいから」だけで おわらない", "Jangan hanya menjawab \"karena gajinya tinggi\"."]
    ],
    "005": [
      ["しって いる しごとの ないようを １つか ２つ いう", "Sebutkan satu atau dua tugas yang Anda ketahui."],
      ["よく わからない ときは「〜と ききました。もっと しりたいです」", "Kalau kurang tahu: \"... to kikimashita. Motto shiritai desu.\""]
    ],
    "006": [
      ["まなびたい ことを ぐたいてきに １つ", "Sebutkan satu hal konkret yang ingin dipelajari."],
      ["れい：しごとの ぎじゅつと、にほんごを まなびたいです。", "Contoh: Saya ingin belajar keterampilan kerja dan bahasa Jepang."]
    ],
    "007": [
      ["しんぱいな ことを しょうじきに １つ いう", "Sebutkan satu kekhawatiran dengan jujur."],
      ["そのあと、いま して いる じゅんびを つたえる", "Lalu sampaikan persiapan yang sedang Anda lakukan."]
    ],
    "008": [
      ["しらなければ、しょうじきに「わかりません」でも いい", "Kalau tidak tahu, boleh jujur menjawab \"wakarimasen\"."],
      ["きゅうりょうより、しごとを がんばる きもちを たす", "Tambahkan semangat untuk bekerja keras, bukan hanya soal gaji."]
    ],
    "009": [
      ["ねんすうを はっきり いって、りゆうを １つ たす", "Sebutkan jumlah tahun dengan jelas dan tambahkan satu alasan."],
      ["れい：５ねん はたらきたいです。ぎじゅつを しっかり おぼえたいからです。", "Contoh: Saya ingin bekerja 5 tahun, karena ingin benar-benar menguasai keterampilan."]
    ],
    "010": [
      ["はたらきたい きもちを はっきり つたえる", "Sampaikan keinginan bekerja dengan jelas."],
      ["れい：はい、はたらきたいです。もっと ぎじゅつを みに つけたいです。", "Contoh: Ya, saya ingin. Saya ingin menguasai lebih banyak keterampilan."]
    ],
    "011": [
      ["きんがくと、なにに つかうかを いっしょに", "Sebutkan jumlahnya bersama tujuan penggunaannya."],
      ["れい：３００まんえん ためて、いえを たてたいです。", "Contoh: Saya ingin menabung 3 juta yen untuk membangun rumah."]
    ],
    "012": [
      ["つかいみちを １つ と、その りゆう", "Satu rencana penggunaan dan alasannya."],
      ["れい：りょうしんに プレゼントを おくりたいです。", "Contoh: Saya ingin mengirim hadiah untuk orang tua."]
    ],
    "013": [
      ["おくる・おくらない と、その りゆうを いう", "Sebutkan akan mengirim atau tidak, dan alasannya."],
      ["れい：はい。りょうしんに おれいを したいからです。", "Contoh: Ya. Karena saya ingin membalas jasa orang tua."]
    ],
    "014": [
      ["ゆめを １つ、ぐたいてきに", "Sebutkan satu cita-cita secara konkret."],
      ["にほんの しごとと つながると、もっと いい", "Lebih baik lagi kalau berhubungan dengan pekerjaan di Jepang."]
    ],
    "015": [
      ["いつごろか と、きっかけを みじかく", "Sebutkan kira-kira kapan dan pemicunya secara singkat."],
      ["れい：こうこうの ときです。せんせいの はなしを きいて、そう おもいました。", "Contoh: Saat SMA. Setelah mendengar cerita guru, saya berpikir begitu."]
    ],
    "016": [
      ["かえった あとの けいかくを １つ", "Sebutkan satu rencana setelah pulang."],
      ["にほんで まなんだ ことを どう つかうかも いう", "Sebutkan juga bagaimana memakai yang dipelajari di Jepang."]
    ],
    "017": [
      ["なまえ → しゅっしん → いま して いる こと → ひとこと の じゅんばん", "Urutan: nama → asal → kegiatan sekarang → satu kalimat penutup."],
      ["さいごは「よろしく おねがいします」で おわる", "Akhiri dengan \"yoroshiku onegaishimasu\"."]
    ],
    "018": [
      ["いい ところを １つ と、それが わかる けいけんを いう", "Sebutkan satu kelebihan dan pengalaman yang menunjukkannya."],
      ["れい：まじめです。がっこうを いちども やすみませんでした。", "Contoh: Saya rajin. Saya tidak pernah bolos sekolah."]
    ],
    "019": [
      ["いい ところ → なおしたい ところ → なおす ために して いる こと", "Kelebihan → hal yang ingin diperbaiki → usaha untuk memperbaikinya."],
      ["なおしたい ところは、しごとで おおきな もんだいに ならない ものを えらぶ", "Pilih kekurangan yang tidak menjadi masalah besar dalam pekerjaan."]
    ],
    "020": [
      ["いわれる ことを １つ と、その りゆうを いう", "Sebutkan satu hal yang sering dikatakan dan alasannya."],
      ["れい：ともだちに「やさしい」と いわれます。よく てつだうからです。", "Contoh: Teman bilang saya \"baik hati\", karena saya sering membantu."]
    ],
    "021": [
      ["せいかくを １つ と、それが わかる れいを いう", "Sebutkan satu sifat dan contohnya."],
      ["れい：あかるい せいかくです。だれとでも すぐ はなせます。", "Contoh: Saya ceria. Saya bisa cepat mengobrol dengan siapa saja."]
    ],
    "022": [
      ["なりたい ひとの すがたを １つ", "Sebutkan satu gambaran orang yang ingin Anda capai."],
      ["れい：かぞくを ささえられる ひとに なりたいです。", "Contoh: Saya ingin menjadi orang yang bisa menopang keluarga."]
    ],
    "023": [
      ["だれか と、そんけいする りゆうを １つ", "Siapa orangnya dan satu alasan Anda mengaguminya."],
      ["れい：ははです。まいにち あさ はやくから はたらいて いるからです。", "Contoh: Ibu saya. Karena setiap hari bekerja sejak pagi."]
    ],
    "024": [
      ["なかよく できる ひと と、にがてな ひと を りょうほう いう", "Sebutkan keduanya: orang yang mudah akrab dan yang sulit dihadapi."],
      ["にがてな ひとに どう するかも たす", "Tambahkan bagaimana Anda menghadapi orang yang sulit itu."]
    ],
    "025": [
      ["たいせつな こと を １つ と、その りゆう", "Satu hal yang penting dan alasannya."],
      ["れい：やくそくを まもる ことです。しんらいが たいせつだからです。", "Contoh: Menepati janji. Karena kepercayaan itu penting."]
    ],
    "026": [
      ["なにを、どのくらい がんばったか。けっかも いう", "Apa dan seberapa keras Anda berusaha, serta hasilnya."],
      ["れい：まいにち ２じかん べんきょうして、JFTに ごうかくしました。", "Contoh: Setiap hari belajar 2 jam dan lulus JFT."]
    ],
    "027": [
      ["いつ・なにが あって うれしかったか", "Kapan dan apa yang membuat Anda senang."],
      ["れい：JFTに ごうかくした ときです。かぞくも よろこびました。", "Contoh: Saat lulus JFT. Keluarga saya juga senang."]
    ],
    "028": [
      ["たいへんだった こと → じぶんが した こと → まなんだ こと", "Hal yang berat → apa yang Anda lakukan → apa yang Anda pelajari."],
      ["わるい はなしだけで おわらない", "Jangan berakhir dengan cerita buruk saja."]
    ],
    "029": [
      ["はずかしがらずに、げんきに やってみる", "Jangan malu, tunjukkan dengan semangat."],
      ["れい：うた・ダンス・ソーラン・からて など。みじかくて いい", "Contoh: lagu, tarian, Soran, karate, dll. Singkat saja."]
    ],
    "030": [
      ["とくいな こと を １つ と、しごとに どう いかせるか", "Satu keahlian dan bagaimana memakainya di pekerjaan."],
      ["れい：サッカーが とくいです。チームワークを たいせつに します。", "Contoh: Saya pandai sepak bola. Saya menghargai kerja sama tim."]
    ],
    "031": [
      ["にがてな こと と、がんばって いる こと を セットで", "Sebutkan kelemahan bersama usaha Anda untuk memperbaikinya."],
      ["れい：かんじが にがてです。まいにち ５こ おぼえて います。", "Contoh: Saya lemah di kanji. Setiap hari saya menghafal 5 kanji."]
    ],
    "032": [
      ["だれか と、そんけいする りゆうを １つ", "Siapa orangnya dan satu alasan Anda mengaguminya."],
      ["れい：ちちです。かぞくの ために まいにち はたらいて いるからです。", "Contoh: Ayah saya. Karena bekerja setiap hari untuk keluarga."]
    ],
    "033": [
      ["なんにん かぞくか と、だれが いるか", "Berapa orang dalam keluarga dan siapa saja."],
      ["れい：５にん かぞくです。ちち、はは、あに、いもうと と わたしです。", "Contoh: Keluarga saya 5 orang: ayah, ibu, kakak laki-laki, adik perempuan, dan saya."]
    ],
    "034": [
      ["にんずう と、じぶんが なんばんめか", "Jumlahnya dan Anda anak ke berapa."],
      ["れい：３にん きょうだいです。わたしは いちばん うえです。", "Contoh: Kami 3 bersaudara. Saya yang paling tua."]
    ],
    "035": [
      ["りょうしんの きもちを、そのまま つたえる", "Sampaikan perasaan orang tua apa adanya."],
      ["れい：さんせいして います。「がんばって」と いって います。", "Contoh: Mereka setuju. Mereka bilang \"semangat\"."]
    ],
    "036": [
      ["みじかく、しょうじきに こたえる", "Jawab singkat dan jujur."],
      ["れい：いいえ、いません。いまは しごとを がんばりたいです。", "Contoh: Tidak ada. Sekarang saya ingin fokus bekerja."]
    ],
    "037": [
      ["しょうじきに こたえる", "Jawab dengan jujur."],
      ["いまは しごとに しゅうちゅう したい きもちも つたえると いい", "Baik juga menyampaikan bahwa sekarang Anda ingin fokus bekerja."]
    ],
    "038": [
      ["いれば、だれが どこに いるか", "Kalau ada, siapa dan di mana."],
      ["れい：はい。いとこが おおさかで はたらいて います。", "Contoh: Ya. Sepupu saya bekerja di Osaka."]
    ],
    "039": [
      ["して いる ことを １〜２つ、ぐたいてきに", "Sebutkan satu atau dua kegiatan secara konkret."],
      ["れい：にほんごを べんきょうしたり、サッカーを したり して います。", "Contoh: Saya belajar bahasa Jepang dan bermain sepak bola."]
    ],
    "040": [
      ["しゅみ と スポーツを １つずつ", "Sebutkan satu hobi dan satu olahraga."],
      ["れい：しゅみは りょうりです。バドミントンも すきです。", "Contoh: Hobi saya memasak. Saya juga suka bulu tangkis."]
    ],
    "041": [
      ["いまも して いるか と、かいすう・じかんを いう", "Masih melakukan atau tidak, serta frekuensi dan waktunya."],
      ["れい：はい。しゅうに ２かい、１じかん くらい して います。", "Contoh: Ya. Seminggu 2 kali, sekitar 1 jam."]
    ],
    "042": [
      ["なかが いい ことを、れいと いっしょに", "Sampaikan hubungan yang baik bersama contohnya."],
      ["れい：はい。いもうとに よく にほんごを おしえて います。", "Contoh: Ya. Saya sering mengajari adik bahasa Jepang."]
    ],
    "043": [
      ["みじかく こたえる。しごとを がんばる きもちも たす", "Jawab singkat. Tambahkan semangat bekerja."],
      ["れい：３０さい くらいです。いまは しごとを がんばりたいです。", "Contoh: Sekitar umur 30. Sekarang saya ingin bekerja keras dulu."]
    ],
    "046": [
      ["すきな きょうか と、すきな りゆう", "Pelajaran favorit dan alasannya."],
      ["れい：すうがくです。こたえが はっきり でるからです。", "Contoh: Matematika. Karena jawabannya jelas."]
    ],
    "047": [
      ["なにを して いたか と、まなんだ こと", "Apa yang Anda ikuti dan apa yang dipelajari."],
      ["れい：バレーボールぶ でした。チームワークを まなびました。", "Contoh: Klub voli. Saya belajar kerja sama tim."]
    ],
    "050": [
      ["たいへんだった こと と、どう のりこえたか", "Hal yang berat dan cara mengatasinya."],
      ["れい：あさ ４じから はたらきました。はやく ねて、がんばりました。", "Contoh: Saya bekerja mulai jam 4 pagi. Saya tidur cepat dan bertahan."]
    ],
    "052": [
      ["あれば、いつ・どのくらい", "Kalau pernah, kapan dan berapa lama."],
      ["なければ「ありません。でも、LPKで みんなと くらして います」など", "Kalau belum: \"Arimasen. Demo, LPK de minna to kurashite imasu\", dll."]
    ],
    "053": [
      ["かいすう と しごとの しゅるいを みじかく", "Sebutkan jumlah dan jenis pekerjaan secara singkat."],
      ["おちた ことが あっても、しょうじきに いう", "Walaupun pernah gagal, sampaikan dengan jujur."]
    ],
    "054": [
      ["たいせつな こと を １つ と りゆう", "Satu hal penting dan alasannya."],
      ["れい：じかんを まもる ことです。みんなに めいわくを かけない ためです。", "Contoh: Tepat waktu. Supaya tidak merepotkan orang lain."]
    ],
    "055": [
      ["まず「ほうこく」を いう。かくさない", "Pertama sebutkan \"melapor\". Jangan menyembunyikan."],
      ["れい：すぐ じょうしに ほうこくして、あやまります。", "Contoh: Saya langsung melapor kepada atasan dan minta maaf."]
    ],
    "057": [
      ["たいせつな こと を １つ と りゆう", "Satu hal penting dan alasannya."],
      ["れい：ほうれんそう です。みんなが おなじ じょうほうを もてるからです。", "Contoh: Hou-ren-sou (lapor, kabari, konsultasi). Supaya semua punya informasi yang sama."]
    ],
    "058": [
      ["あいての はなしを きく → じぶんの いけんを いう の じゅんばん", "Urutan: dengarkan pihak lain → sampaikan pendapat sendiri."],
      ["れい：まず あいての はなしを ききます。それから はなしあいます。", "Contoh: Pertama saya mendengarkan dia. Lalu kami berdiskusi."]
    ],
    "059": [
      ["じぶんの ほうほうを １つ、ぐたいてきに", "Sebutkan satu cara Anda sendiri secara konkret."],
      ["れい：おんがくを きいたり、かぞくと でんわ したり します。", "Contoh: Mendengarkan musik atau menelepon keluarga."]
    ],
    "065": [
      ["にんずう と きかんを はっきり", "Sebutkan jumlah orang dan lamanya dengan jelas."],
      ["れい：６にんで、２ねん くらい いっしょに くらしました。", "Contoh: Kami tinggal bersama 6 orang selama sekitar 2 tahun."]
    ],
    "066": [
      ["たいへんだった こと と、どう したか", "Hal yang sulit dan apa yang Anda lakukan."],
      ["れい：そうじの じゅんばんで もめました。はなしあって、ルールを きめました。", "Contoh: Kami berselisih soal giliran bersih-bersih. Kami berdiskusi dan membuat aturan."]
    ],
    "069": [
      ["じぶんが する ことを ぐたいてきに", "Sebutkan secara konkret apa yang akan Anda lakukan."],
      ["れい：あいさつを します。ルールを まもって、そうじも します。", "Contoh: Saya menyapa, menaati aturan, dan ikut bersih-bersih."]
    ],
    "070": [
      ["しって いる ことを １〜２つ いう", "Sebutkan satu atau dua hal yang Anda ketahui."],
      ["れい：しゅとは とうきょうです。でんしゃが じかんどおりに きます。", "Contoh: Ibu kotanya Tokyo. Keretanya datang tepat waktu."]
    ],
    "071": [
      ["イメージを １つ と、その りゆう", "Satu kesan dan alasannya."],
      ["れい：きれいな くにです。みちに ゴミが ないと ききました。", "Contoh: Negara yang bersih. Saya dengar tidak ada sampah di jalan."]
    ],
    "072": [
      ["いろ と りゆうを セットで", "Sebutkan warna bersama alasannya."],
      ["れい：しろです。きれいで、まじめな イメージだからです。", "Contoh: Putih. Karena kesannya bersih dan serius."]
    ],
    "073": [
      ["しらべた ことを １つ いう（めいぶつ・てんき など）", "Sebutkan satu hal yang Anda cari tahu (makanan khas, cuaca, dll.)."],
      ["しらなければ「これから しらべます」", "Kalau belum tahu: \"Korekara shirabemasu\"."]
    ],
    "074": [
      ["ばしょ と、いきたい りゆう", "Nama tempat dan alasan ingin ke sana."],
      ["れい：ふじさんです。じぶんの めで みたいからです。", "Contoh: Gunung Fuji. Karena ingin melihatnya langsung."]
    ],
    "075": [
      ["すき・きらい と、たべた ものを いう", "Sebutkan suka atau tidak, dan apa yang pernah dimakan."],
      ["れい：すきです。インドネシアで ラーメンを たべました。おいしかったです。", "Contoh: Suka. Saya pernah makan ramen di Indonesia. Enak."]
    ],
    "076": [
      ["りょうりの なまえ と、どんな あじか", "Nama makanan dan rasanya seperti apa."],
      ["れい：ルンダンです。ぎゅうにくの りょうりで、すこし からいです。", "Contoh: Rendang. Masakan daging sapi, agak pedas."]
    ],
    "078": [
      ["やりたい こと を １つ と りゆう", "Satu hal yang ingin dicoba dan alasannya."],
      ["れい：おまつりに いきたいです。にほんの ぶんかを しりたいからです。", "Contoh: Saya ingin pergi ke festival, karena ingin mengenal budaya Jepang."]
    ],
    "079": [
      ["たべものの なまえを １つ と、りゆう", "Sebutkan satu nama makanan dan alasannya."],
      ["れい：すしです。インドネシアで しゃしんを みて、たべたく なりました。", "Contoh: Sushi. Saya melihat fotonya di Indonesia dan jadi ingin mencoba."]
    ],
    "080": [
      ["きかんを はっきり いう", "Sebutkan lamanya dengan jelas."],
      ["れい：５かげつ べんきょう しました。いまも まいにち べんきょう して います。", "Contoh: Saya sudah belajar 5 bulan. Sekarang pun belajar setiap hari."]
    ],
    "082": [
      ["しけんの なまえ と けっかを はっきり", "Sebutkan nama tes dan hasilnya dengan jelas."],
      ["まだ なら、つぎの しけんの よていを いう", "Kalau belum, sebutkan rencana tes berikutnya."]
    ],
    "085": [
      ["きょうざいの なまえ と、なんか までか", "Nama buku dan sampai bab berapa."],
      ["れい：いろどりの しょきゅう１、１０か まで べんきょう しました。", "Contoh: Irodori Shokyuu 1, sudah sampai bab 10."]
    ],
    "090": [
      ["てんすう と、そう おもう りゆう", "Nilainya dan alasan Anda berpikir begitu."],
      ["れい：７０てん くらいです。さいごが すこし おそかったからです。", "Contoh: Sekitar 70. Karena bagian akhir agak lambat."]
    ],
    "091": [
      ["むずかしかった ところ と、つぎに どう するか", "Bagian yang sulit dan apa yang akan Anda lakukan lain kali."],
      ["れい：はかる ところでした。もっと れんしゅう します。", "Contoh: Bagian mengukur. Saya akan berlatih lagi."]
    ],
    "093": [
      ["たべものの なまえ と、すきな りゆう", "Nama makanan dan alasan menyukainya."],
      ["れい：ナシゴレンです。ははが よく つくって くれます。", "Contoh: Nasi goreng. Ibu saya sering membuatkannya."]
    ],
    "094": [
      ["あれば しょうじきに。りゆうも みじかく", "Kalau ada, sampaikan jujur dan alasannya singkat."],
      ["れい：ぶたにくは たべません。でも、ほかは なんでも たべます。", "Contoh: Saya tidak makan daging babi. Tapi selain itu saya makan apa saja."]
    ],
    "096": [
      ["じぶんの かんがえ と、しごとを ちゃんと する きもちを りょうほう", "Sampaikan pendapat Anda dan juga kesediaan bekerja dengan baik."],
      ["れい：じょうしに そうだん します。あんぜんに はたらける ように します。", "Contoh: Saya akan berkonsultasi dengan atasan agar bisa bekerja dengan aman."]
    ],
    "099": [
      ["しょうじきに、みじかく こたえる", "Jawab jujur dan singkat."],
      ["すう ひとは、ルールを まもる ことも つたえる", "Kalau merokok, sampaikan juga bahwa Anda menaati aturan."]
    ],
    "100": [
      ["「まもれます」と はっきり いう", "Jawab \"mamoremasu\" dengan jelas."],
      ["れい：はい。きめられた ばしょ だけで すいます。", "Contoh: Ya. Saya hanya merokok di tempat yang ditentukan."]
    ],
    "101": [
      ["しつもんを １つ する。きゅうりょうや やすみ だけに しない", "Ajukan satu pertanyaan. Jangan hanya soal gaji atau libur."],
      ["れい：にゅうしゃ まえに、べんきょう して おく ことは ありますか？", "Contoh: Apakah ada yang sebaiknya saya pelajari sebelum mulai bekerja?"]
    ],
    "122": [
      ["あれば、なにを なおしたか を みじかく", "Kalau pernah, sebutkan singkat apa yang Anda perbaiki."],
      ["れい：はい。じぶんの バイクの オイルこうかんを しました。", "Contoh: Ya. Saya pernah ganti oli motor saya sendiri."]
    ],
    "123": [
      ["がっこうの なまえ より、なにを べんきょうしたか", "Lebih penting apa yang dipelajari daripada nama sekolah."],
      ["れい：はい。SMKの じどうしゃかで、エンジンの しくみを べんきょうしました。", "Contoh: Ya. Di jurusan otomotif SMK, saya belajar cara kerja mesin."]
    ],
    "124": [
      ["こうぐの なまえを にほんごで ２つ くらい", "Sebutkan sekitar 2 nama perkakas dalam bahasa Jepang."],
      ["れい：スパナと ドライバーを つかったことが あります。", "Contoh: Saya pernah memakai kunci pas dan obeng."]
    ],
    "125": [
      ["もっている めんきょを はっきり。なければ しょうじきに", "Sebutkan SIM yang dimiliki dengan jelas. Kalau tidak punya, jawab jujur."],
      ["れい：バイクの めんきょは あります。くるまの めんきょは ありません。", "Contoh: Saya punya SIM motor. SIM mobil belum punya."]
    ],
    "126": [
      ["「だいじょうぶです」に、りゆうを １つ たす", "Tambahkan satu alasan setelah \"daijoubu desu\"."],
      ["れい：はい、だいじょうぶです。インドネシアでも オイルを さわる しごとを していました。", "Contoh: Ya, tidak masalah. Di Indonesia saya juga pernah bekerja memegang oli."]
    ],
    "127": [
      ["しっている ぶひんの なまえを ２〜３つ いう", "Sebutkan 2–3 nama komponen yang Anda tahu."],
      ["れい：タイヤ、ブレーキ、エンジン、バッテリーです。", "Contoh: Ban, rem, mesin, aki."]
    ],
    "128": [
      ["「かくにん」と「ほうこく」の ことばを つかう", "Pakai kata \"kakunin\" (memeriksa) dan \"houkoku\" (melapor)."],
      ["れい：さぎょうの あとで、かならず かくにん します。わからない ときは、すぐ ほうこく します。", "Contoh: Setelah bekerja, saya selalu memeriksa ulang. Kalau tidak tahu, saya langsung melapor."]
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
