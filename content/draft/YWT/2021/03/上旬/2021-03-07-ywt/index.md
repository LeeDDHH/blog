---
title: 【YWT】210307
date: "2021-03-07 21:30:00"
description: "Next.jsのチュートリアルアプリをデプロイしたり、GraphQLとApolloでデータをとってみたりした"
---

## [Y] やったこと

- 4.7m歩いた
- [Next.jsのチュートリアルアプリ](https://nextjs-tutorial-gilt.vercel.app/)をデプロイした
- [Next.jsプロジェクト内でGraphQLサーバーを立ち上げる](https://twitter.com/camomile_cafe/status/1368512651626639363)ことに成功した

## [W] わかったこと

- Next.jsのデプロイの概要についてチュートリアルをすすめた

  - [Vercel](https://vercel.com/)にデプロイをする前提
  - VercelでNext.jsのアプリをデプロイすることのメリット
    - 静的生成とアセットを使用するページは、自動的に[Vercel EdgeNetwork](https://vercel.com/docs/edge-network/overview)を通して提供してくれる
    - サーバーサイドレンダリングとAPIルートを使うページは、サーバーレ関数として自動的に分離される
  - 他にも便利な機能がある
    - [カスタムドメイン](https://vercel.com/docs/custom-domains)
    - [環境変数](https://nextjs.org/docs/basic-features/environment-variables)
    - [自動HTTPS](https://nextjs.org/docs/basic-features/environment-variables)
  - プレビュー機能が使える
    - 新しく開発したブランチをpushすると、PRに `vercel` のボットがコメントを表示してくれる
    - コメントにはプレビューができるURLがあり、そこから本番投入前の確認ができる
  - `next build` 後、 `next start` をすることで本番アプリのビルドと、確認ができる
    - `.next` ディレクトリに本番用のアプリがビルドされる

- Next.jsのチュートリアルをひととおり終えたら、次の学習としてこのようなものがあるようだ

  - [Next.jsドキュメント](https://nextjs.org/docs)
  - [データフェッチ](https://nextjs.org/docs/basic-features/data-fetching)
  - [環境変数](https://nextjs.org/docs/basic-features/environment-variables)
  - [AMPサポート](https://nextjs.org/docs/advanced-features/amp-support/introduction)
  - [TypeScript導入](https://nextjs.org/learn/excel/typescript)

- Next.js内でGraphQLとApolloを使ったDB参照の例をいくつか参考にした

  - [Deploying a serverless GraphQL endpoint with Apollo Server and Next.js](https://apuyou.io/blog/serverless-graphql-apollo-server-nextjs)
  - [Stacking Vercel, a GraphQL Apollo Server and React](https://dev.to/preciouschicken/stacking-vercel-a-graphql-apollo-server-and-react-2l55)
  - [Feature overview and setup](https://odyssey.apollographql.com/lift-off-part1/feature-overview-and-setup)

- GraphQLのスキーマーとリゾルバーの概念的な説明の参考にした

  - [GraphQLのリゾルバ（Resolver）とは](https://qiita.com/NagaokaKenichi/items/86272f2f654070b06488)
  - [GraphQLのスキーマと型定義](https://qiita.com/NagaokaKenichi/items/d341dc092012e05d6606)

- 前も「知識は経験の先に立たず」と思っていたが、今回も同じく思った
  - GraphQLに関して詳しくは知らないが、とりあえず動かすものは作れた
  - これから知識がついてくるだろうと思う

## [T] 次にやること

- GraphQLの使い方についてチュートリアルを進める
- Apolloの使い方についてチュートリアルを進める
- 図書館で借りた本を読む（D-2）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
