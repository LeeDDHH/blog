---
title: 【YWT】210207
date: "2021-02-07 22:20:00"
description: "ブログに機能追加したり、髪染めをしたりした"
---

## [Y] やったこと

- 5.7km 歩いた
- Gatsby ブログにページネーション機能をつけた
- `styled-components` を導入して、ページネーションのボタンを作った
- 図書館に本を 2 冊返却した
- 髪の色をアッシュブラウンに染めた
- 美容室の院長とキャンプに行く話をした

## [W] わかったこと

- ここ最近あまり歩いてなかったのもあって、久々に歩いたら足全体がかゆい感じがした
- プラグインなしでページネーションを実装してみようと思ったが、思ってた以上に面倒だった
  - 結果、 `gatsby-awesome-pagination` を使うことにした
  - `gatsby-node.js` の `createPages` で `paginate` をしておけば、指定した記事一覧から一定数ごとにページが作られる
  - 記事一覧のコンポーネントで `GraphQL` の `query` の引数にページを数えるための値を指定しておくと基本的にはページネーションが効く
  - あとは「前のページ」「次のページ」に遷移できるボタンを `pageContext` で指定すれば、ページの移動もできる
- 人生ではじめてカラーをしてみた
  - 髪の色の明るさには 20 トーンがあるらしい
  - 自分はカラー前が 4 トーンぐらいで、アッシュブラウンにしたら 9 トーンまで明るくなった
  - ブリーチをすることでトーンの明るさはさらにあげられるらしいが、その分髪のダメージもあるので管理が要る
  - ブリーチの有無にもよるが、カラーの脱色を防ぐための**カラーシャンプ/トリートメント**もあるらしく、美容室に発注を頼んだ

## [T] 次にやること

- TypeScript のチュートリアルをすす める
- 図書館で借りた本を読む
