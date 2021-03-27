---
title: 【YWT】210323
date: "2021-03-23 20:30:00"
description: "今月の目標のプロジェクトにGAの設定をしたり、Reduxのデータ構造を考えたりした"
---

## [Y] やったこと

- 1.7km歩いた
- [今月のプロジェクト](https://rod.expfrom.me/)にGAとSearch Consoleの対応をした
- 次に実装予定の機能の画面を作り始めた
- reduxで扱うデータの構造を仮で作った

## [W] わかったこと

- Next.jsでGAの設定するのが思っていた順とは違った
  - [react-ga](https://github.com/react-ga/react-ga)を使う方法ではGA側で検知ができなかった
  - [公式にGAを導入する例](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics)があったので、転用した
  - `_document.js` では[クラスコンポーネントを使うことが前提](https://github.com/vercel/next.js/issues/3204)となっていたことがわかった
- 必要になったら[GTM](https://dev.to/ornio/add-google-analytics-through-gtm-google-tag-manager-on-next-js-5e4f)も導入したいと思った
- GAが重複送信される恐れがあったので[こちらの対応](https://zenn.dev/okumura_daiki/articles/839685a90c06db)もした
- Vercelの[環境変数設定](https://vercel.com/docs/environment-variables)を使ったら、かなり便利だった
- SEO対策用のライブラリを導入しようと思った

## [T] 次にやること

- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1374323271630422017?s=20 -->
