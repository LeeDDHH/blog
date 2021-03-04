---
title: 【YWT】210304
date: "2021-03-04 23:59:00"
description: "朝から出社したり、定時より3時間遅れで終わったりした"
---

## [Y] やったこと

- 4.5m歩いた
- 朝から出社した
- Next.jsのチュートリアルをすすめた
- 画面上に説明を載せるときのケースによるコンフリクトやそもそもの前提の違いについて話をした
- Wifiとかウェブカメラを使った測定方法について話をした
- 機械学習とか仕様の話とかをした
  - そもそも機械学習をさせる必要があるかどうか
  - 機械学習以外の方法はないのか
  - やりたいことよりも前にやることはないか
  - 既存の仕様で他のアプリではなかなか見れない仕様に関しての話
- 気づいたら3食ハンバーガー食べてた

## [W] わかったこと

- 今月の目標でやりたかった実装の名称がわかった
  - 「ファイルシステムを使った外部データをとってくる」だった
- Next.jsの事前レンダリングの概要についてのチュートリアルをすすめた
  - [事前レンダリングの説明](https://nextjs.org/learn/basics/data-fetching/pre-rendering)
  - Next.jsではすべてのページの`HTMLを事前に生成`して、パフォーマンスとSEOの向上をはかっている
  - 生成されたHTMLは、そのページに必要な最低限のJavaScriptコードに関連付けられる
  - ブラウザがページを読み込み、JavaScriptのコードを実行すると、ページがインタラクティブになる
      - `hydration` という用語をはじめて知った
  - 普通のReactアプリだと事前レンダリングがないため、JavaScriptを無効にすれば、アプリの表示ができなくなる
      - [ChromeでJavaScriptを無効にする方法](https://developers.google.com/web/tools/chrome-devtools/javascript/disable)
  - Next.jsの場合は、静的HTMLを事前レンダリングしているため、JavaScriptを実行しなくてもアプリのUIが表示できる
- Next.jsの事前レンダリングの種類についてチュートリアルをすすめた
  - [2種類の事前レンダリングについての説明](https://nextjs.org/learn/basics/data-fetching/two-forms)
  - 事前レンダリングには`静的生成(Static Generation)`、`サーバーサイドレンダリング(Server-side Rendering)`の2種類がある
      - `静的生成`はビルド時にHTMLを生成することで、リクエストのたび`同じものを再利用する`
      - `サーバーサイドレンダリング`はリクエストごとにHTMLを生成するので、`場合によっては違うものがレスポンスされる`
  - 可能な限り、静的生成を使うことが推奨されている
      - マーケティングページ、ブログ、Eコマース製品リスト、ヘルプとドキュメントなどなど
  - 「ユーザーの`リクエストに先立って`そのページを`事前にレンダリングしておけるのか`」を基準にする
      - しておけるのであれば、`静的生成`
      - できないのであれば、`サーバーサイドレンダリング`
      - `サーバーサイドレンダリング`は更新されるデータを常に最新の状態にすることができる
- Next.jsのデータがある場合の静的生成についてチュートリアルをすすめた
  - [データがあるときの静的生成についての説明](https://nextjs.org/learn/basics/data-fetching/with-data)
  - ビルド時に外部データをとってきて、HTMLを生成する必要がある
      - ファイルシステム、外部API、データベースなどを使う
  - とってきたデータは非同期処理で`getStaticProps`関数を使うことで、データのexportができる
      - ```javascript
          export const App(props) => {…}

          export async function getStaticProps() {
            const data = ...
            return {
              props: ...
            }
          }
        ```
  - `getStaticProps`は、対象のページにデータ依存関係があるからビルド時に必ず依存関係を解決するようNext.jsに伝える役割をする
- Next.jsの`getStaticProps`の詳細についてチュートリアルをすすめた
  - [getStaticPropsの簡単な説明](https://nextjs.org/learn/basics/data-fetching/getstaticprops-details)
  - 主な用途としては、ファイルシステム/外部API/データベースからのfetchをすること
  - データベースへのクエリを直接書き込める
      - `サーバー側でのみ、getStaticPropsが実行される`
      - ブラウザのバンドルには含まれないように設定されているみたい
  - 本番環境向けには[fallbackというキーをfalseに設定する必要がある](https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required)
      - fallbackをtrueに指定すると、[アクセスされたURLのファイルが存在しない場合、404エラーを返さない](https://zenn.dev/ria/articles/b709ae94e919c76f814a#dynamic-routes-%E3%81%AE%E5%A0%B4%E5%90%88)みたい
  - 基本的に、画面に表示するページのコンポーネントでのみ使える
      - ページがレンダリングされる前にReactが必要なすべてのデータを持っている必要があるかららしい
- Next.jsのリクエスト時にデータを取得する方法についてチュートリアルをすすめた
  - [データ取得のパターンについての説明](https://nextjs.org/learn/basics/data-fetching/request-time)
  - 事前レンダリングが必要で、リクエスト時にデータを取得が必要な場合は、`サーバーサイドレンダリング`をする
      - `getServerSideProps`という関数を使って、画面表示用のコンポーネントにexportしておく必要がある
      - `context`という引数でリクエスト時の固有のパラメーターを受け取る
  - データを事前レンダリングする必要がない場合は、`静的生成+クライアント側でデータフェッチ`をする手もある
      - 外部データを必要としないページを静的生成する
      - ブラウザでページを読み込んだら、クライアントから外部データをとってきて、残りの部分にデータを埋める
      - ユーザーごとに固有のデータを表示させる必要がある場合とかSEOが関係なくデータが頻繁に更新されるページでデータ取得をする必要がある場合とかに使える
  - Next.jsで[SWR](https://swr.vercel.app/)を使えば、フェッチしたデータを管理するためのReact hooksが使える
      - キャッシュ、再バリデーション、フォーカストラッキング、インターバルでデータの再フェッチなどの処理ができる
- どこかのタイミングでNext.jsのチュートリアルをすすめたときのメモメモまとめとしてブログを書いておきたいと思った

## [T] 次にやること

- Next.jsのチュートリアルをすすめる
- 図書館で借りた本を読む（D-5）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
