// このファイルはbeauty_poster.pyが自動更新します
const PRODUCT_LIST = [
  {
    "name": "おすすめ美容液",
    "category": "スキンケア",
    "badge": "美容液",
    "description": "垢抜けを10年以上研究した私が選ぶ、肌のハリと透明感を実感できる美容液。毎日のスキンケアに取り入れるだけで1ヶ月後の肌が変わります。",
    "image": "",
    "url": "https://px.a8.net/svt/ejp?a8mat=4B1G9N+DKSYQY+4GNW+5YJRM"
  },
  {
    "name": "美容器",
    "category": "美顔器",
    "badge": "美容器",
    "description": "垢抜けを10年以上研究した私が選ぶ、リフトアップとむくみ対策に本当に効く美容器。毎朝5分のルーティンに組み込んでいます。",
    "image": "",
    "url": "https://px.a8.net/svt/ejp?a8mat=4B1G9N+DUXC16+5QIG+5YJRM"
  },
  {
    "name": "ロゼット 洗顔パスタ",
    "category": "洗顔",
    "badge": "洗顔料",
    "description": "30年以上売れ続ける理由がある洗顔料。毛穴・くすみへの効果をエステティシャン目線で正直に言うと、プチプラでこのクオリティは他にないです。",
    "image": "https://thumbnail.image.rakuten.co.jp/@0_mall/rosette/cabinet/img03/41071.jpg",
    "url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%E3%83%AD%E3%82%BC%E3%83%83%E3%83%88%2B%E6%B4%97%E9%A1%94%E3%83%91%E3%82%B9%E3%82%BF%2F"
  },
  {
    "name": "ニベアクリーム（青缶）",
    "category": "保湿",
    "badge": "保湿クリーム",
    "description": "垢抜けを10年以上研究した私が今でも手放せない一品。フェイスクリームとして使う正しい方法を知ると、高級クリームと遜色ない使い心地になります。",
    "image": "https://thumbnail.image.rakuten.co.jp/@0_mall/kaitene/cabinet/img14/64103.jpg",
    "url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%E3%83%8B%E3%83%99%E3%82%A2%2B%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0%2B%E9%9D%92%E7%BC%B6%2F"
  },
  {
    "name": "コーセー ハトムギ化粧水",
    "category": "化粧水",
    "badge": "化粧水",
    "description": "500円台なのに高級化粧水に勝てる。垢抜けを10年以上研究した私が必ずおすすめする化粧水のひとつ。保湿力と浸透感のコスパが圧倒的です。",
    "image": "https://thumbnail.image.rakuten.co.jp/@0_mall/cosmos/cabinet/cosme48/4971710353266.jpg",
    "url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%E3%82%B3%E3%83%BC%E3%82%BB%E3%83%BC%2B%E3%83%8F%E3%83%88%E3%83%A0%E3%82%AE%E5%8C%96%E7%B2%A7%E6%B0%B4%2F"
  },
  {
    "name": "セザンヌ アイブロウ",
    "category": "メイク",
    "badge": "アイブロウ",
    "description": "眉一本で顔の印象は変わります。垢抜けを10年以上研究した私がプロにも勧めるプチプラ眉アイテム。使い方次第でサロン仕上げの眉になれます。",
    "image": "https://thumbnail.image.rakuten.co.jp/@0_mall/cezanne/cabinet/item_img/eyebrow/101069.jpg",
    "url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%E3%82%BB%E3%82%B6%E3%83%B3%E3%83%8C%2B%E3%82%A2%E3%82%A4%E3%83%96%E3%83%AD%E3%82%A6%2F"
  },
  {
    "name": "美顔ローラー",
    "category": "美容器具",
    "badge": "フェイスケア",
    "description": "垢抜けを10年以上研究した私が正直に言います。本当に効くローラーとそうでないものがある。フェイスマッサージの効果を最大化する選び方のポイントも解説しています。",
    "image": "",
    "url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%E7%BE%8E%E9%A1%94%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC%2F"
  },
  {
    "name": "フェイスシートマスク",
    "category": "スキンケア",
    "badge": "シートマスク",
    "description": "毎日使っていいものと控えるべきものがある。垢抜けを10年以上研究した私が頻度と選び方を解説。正しく使えば効果が全然違います。",
    "image": "",
    "url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E3%82%B7%E3%83%BC%E3%83%88%E3%83%9E%E3%82%B9%E3%82%AF%2F"
  },
  {
    "name": "電動洗顔ブラシ",
    "category": "洗顔器具",
    "badge": "洗顔グッズ",
    "description": "敏感肌・乾燥肌の方は選び方を間違えると肌荒れします。垢抜けを10年以上研究した私が肌質別の正しい選び方をまとめました。",
    "image": "",
    "url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%E9%9B%BB%E5%8B%95%E6%B4%97%E9%A1%94%E3%83%96%E3%83%A9%E3%82%B7%2F"
  }
];
