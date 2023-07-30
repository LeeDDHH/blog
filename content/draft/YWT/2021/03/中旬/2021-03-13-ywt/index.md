---
title: 【YWT】210313
date: "2021-03-13 23:30:00"
description: "GraphQLで必要なデータだけをフィルターしてみたり、ものの配置を変えたりした"
---

## [Y] やったこと

- 0.8km 歩いた
- GraphQL で DB にフィルターリングをかける方法を調べた
- ものの配置を変えた

## [W] わかったこと

- GraphQL で検索をかけるたび、React のレンダリングが走っていたため、CSR で必要なときだけデータの取得ができるように[Apollo クライアントを使った CSR 方法](https://www.apollographql.com/blog/getting-started-with-apollo-client-in-next-js/)を参考に実装方法を変えた
- React 側で三項演算子を使ったコンポーネントレンダリングをさせようとしたが、意図した動作にはならなかった
  - 条件に合ったコンポーネントだけが読み込まれて動作すると思ったが、三項演算子で設定されているコンポーネント全部が一度読み込まれるように見えた
  - 厳密に指定するため、if 文で区切った
- `useQuery` と `useLazyQuery` の違いがわかった
  - `useQuery` はコンポーネント生成時に Query が実行される
  - `useLazyQuery` はイベント発火やユーザーの操作をもとに Query が実行される
- Query は合っているのに、戻り地が想定していた値ではない現象があった
  - 原因は、スキーマー定義の戻り地をオブジェクト単体にしていたことだった
  - エラーは出なかったものの、基本的なところでミスをしていた

## [T] 次にやること

- 表示するデータの入力を進める
- Apollo の使い方についてチュートリアルを進める
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1370751213935890432?s=20 -->
