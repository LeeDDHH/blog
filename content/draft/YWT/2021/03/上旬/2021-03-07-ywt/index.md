---
title: 【YWT】210307
date: "2021-03-07 21:30:00"
description: "Next.jsのチュートリアルアプリをデプロイしたり、GraphQLとApolloでデータをとってみたりした"
---

## [Y] やったこと

- 4.7m 歩いた
- [Next.js のチュートリアルアプリ](https://nextjs-tutorial-gilt.vercel.app/)をデプロイした
- [Next.js プロジェクト内で GraphQL サーバーを立ち上げる](https://twitter.com/camomile_cafe/status/1368512651626639363)ことに成功した

## [W] わかったこと

- Next.js のデプロイの概要についてチュートリアルをすすめた

  - [Vercel](https://vercel.com/)にデプロイをする前提
  - Vercel で Next.js のアプリをデプロイすることのメリット
    - 静的生成とアセットを使用するページは、自動的に[Vercel EdgeNetwork](https://vercel.com/docs/edge-network/overview)を通して提供してくれる
    - サーバーサイドレンダリングと API ルートを使うページは、サーバーレ関数として自動的に分離される
  - 他にも便利な機能がある
    - [カスタムドメイン](https://vercel.com/docs/custom-domains)
    - [環境変数](https://nextjs.org/docs/basic-features/environment-variables)
    - [自動 HTTPS](https://nextjs.org/docs/basic-features/environment-variables)
  - プレビュー機能が使える
    - 新しく開発したブランチを push すると、PR に `vercel` のボットがコメントを表示してくれる
    - コメントにはプレビューができる URL があり、そこから本番投入前の確認ができる
  - `next build` 後、 `next start` をすることで本番アプリのビルドと、確認ができる
    - `.next` ディレクトリに本番用のアプリがビルドされる

- Next.js のチュートリアルをひととおり終えたら、次の学習としてこのようなものがあるようだ

  - [Next.js ドキュメント](https://nextjs.org/docs)
  - [データフェッチ](https://nextjs.org/docs/basic-features/data-fetching)
  - [環境変数](https://nextjs.org/docs/basic-features/environment-variables)
  - [AMP サポート](https://nextjs.org/docs/advanced-features/amp-support/introduction)
  - [TypeScript 導入](https://nextjs.org/learn/excel/typescript)

- Next.js 内で GraphQL と Apollo を使った DB 参照の例をいくつか参考にした

  - [Deploying a serverless GraphQL endpoint with Apollo Server and Next.js](https://apuyou.io/blog/serverless-graphql-apollo-server-nextjs)
  - [Stacking Vercel, a GraphQL Apollo Server and React](https://dev.to/preciouschicken/stacking-vercel-a-graphql-apollo-server-and-react-2l55)
  - [Feature overview and setup](https://odyssey.apollographql.com/lift-off-part1/feature-overview-and-setup)

- GraphQL のスキーマーとリゾルバーの概念的な説明の参考にした

  - [GraphQL のリゾルバ（Resolver）とは](https://qiita.com/NagaokaKenichi/items/86272f2f654070b06488)
  - [GraphQL のスキーマと型定義](https://qiita.com/NagaokaKenichi/items/d341dc092012e05d6606)

- 前も「知識は経験の先に立たず」と思っていたが、今回も同じく思った
  - GraphQL に関して詳しくは知らないが、とりあえず動かすものは作れた
  - これから知識がついてくるだろうと思う

## [T] 次にやること

- GraphQL の使い方についてチュートリアルを進める
- Apollo の使い方についてチュートリアルを進める
- 図書館で借りた本を読む（D-2）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）
