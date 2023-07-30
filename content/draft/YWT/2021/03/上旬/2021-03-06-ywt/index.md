---
title: 【YWT】210306
date: "2021-03-06 22:00:00"
description: "Next.jsのチュートリアルをひと通り終えたり、久々に飲んだりした"
---

## [Y] やったこと

- 3.7m 歩いた
- Line モバイルの支払い方法で Line pay が選択できなくて、クレジット払いに変更した
- Next.js のチュートリアルをすすめた
- 久々に高円寺のたちばなで餃子を食べた

## [W] わかったこと

- Next.js の動的なルーティングの概要についてチュートリアルをすすめた

  - [外部に依存するデータのパス生成と生成手順について](https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data)
  - 静的生成で必要なデータをフェッチするときには `getStaticProps`
  - 各ページパスが外部データに依存している場合、そのパスを静的生成するのは `getStaticPaths`
  - パスを動的に生成するための手順
    - 表示するページのレイアウトを管理するコンポーネントを用意する
    - 同ページ内に `getStaticPaths` でページ情報を配列として取得
    - 同ページ内に `getStaticProps` で静的生成に必要なデータを取得
  - `pages` ディレクトリ配下に `[]` をつけた js ファイルを作ることで、動的ルーティングが有効になる
  - `getStaticPaths` は動的ルーティングを利用する際に静的なファイルを生成するための API
    - 事前ビルドするパスを配列にして返す
  - `getStaticProps` では、ルーティングの情報が入ったパラメーターを `params` で受け取る
  - ビルド時に `getStaticPaths` と `getStaticProps` の処理によって、表示するページが入っているディレクトリのパスを動的ルーティングの対象にできる
    - `npm run build` で確認できる
    - ```markdown
      プロジェクトディレクトリ
      ├── pages
      │ └── posts
      │ └── [id].js // `posts/` ではじまるクエリを動的ルーティングする
      └── posts
      ├── 記事.md // 表示するページの markdown
      ├── 記事 2.md // 表示するページの markdown
      ︙
      ```
    - [Next.js 9.3 新 API getStaticProps と getStaticPaths と getServerSideProps の概要解説](https://qiita.com/matamatanot/items/1735984f40540b8bdf91#getstaticpaths)
  - `getStaticPaths` で表示するすべてのページを取得し、 `getStaticProps` で指定された ID をもとにそのページを取得する

- Next.js の動的なルーティングに使うパス取得の実装方法についてチュートリアルをすすめた

  - [実装方法について](https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths)
  - 外部データを読み込むモジュールを作成
    - `.md` の拡張子を取り除いて取得
    - 取得したファイル名がそのままパスとなる
  - `getStaticPaths` で受け取るデータ形式にはいくつか制約がある
    - **オブジェクトの配列**にする必要がある
    - 各オブジェクトには `params` というキーをもつオブジェクトが必要になる
      - ```javascript
        {
          params: {…}
        }
        ```
  - 外部データを読み込むモジュールを動的ルーティングをするページの `getStaticPaths` で呼び出して return する
  - [動的ルーティングに必要なパスの返し方について](https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required)

- Next.js の動的なルーティングでページを表示する実装方法についてチュートリアルをすすめた

  - `getStaticProps` で表示するページのパスが渡されたときの処理を作成する
    - `params` をパラメータとして受け取る
    - `params.id` を表示するパスとして、表示するページのデータを取得し、 `props` として返す
    - データ取得時に、非同期式で受け取る
  - 表示部で `props` を受け取り、表示に必要なデータを組み立てる

- 以前、 `Laravel` でルーティングをしたときは前もって一覧化した上で管理していたのもあって、なかなか慣れないなと思った

- Next.js の動的なルーティングを使うときのヒントについてチュートリアルをすすめた

  - [動的ルートを使う歳の tips](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)
  - `getStaticPaths` も　`getStaticProps` と同様に、外部のデータを取得できる
  - `dev` 環境ではリクエストごとに `getStaticPaths` が走る
  - `production` ではビルド時に動く
  - Next.js のルーターにアクセスする場合、 `useRouter` でアクセスできる
  - 404 ページは `pages/404.js` を作成することでカスタムできる

- Next.js の API ルートについてチュートリアルをすすめた

  - `pages/api` ディレクトリを作って、api のエンドポイントとなるファイルが作れる
    - `pages/api/hello.js` を作ったら、エンドポイントは `ドメイン/api.hello` となる
    - ファイル内の書き方の例
      - ```javascript
        export default function handler(req, res) {
          res.status(200).json({ text: "hello" })
        }
        ```
    - サーバーレス関数（ラムダ）として使える

- Next.js の API ルートのヒントについてチュートリアルをすすめた

  - API ルートは `getStaticPaths` 、 `getStaticProps` からフェッチでしてはならない
    - 代わりに、 `getStaticPaths` 、 `getStaticProps` に直接サーバーサイドのコードを書く
    - 理由として、 `getStaticPaths` 、 `getStaticProps` はサーバーサイドでのみ動作するため、クライアント側では実行されない
    - `getStaticPaths` 、 `getStaticProps` は JS バンドルされないので、ブラウザには送信されないため、直接データベースクエリが書ける
  - API ルートの良いユースケースとしては、フォーム入力がある
    - ページにフォームを作成して、 `POST` で API ルートにリクエストの送信ができる
    - API ルートのこ～後は**クライアントバンドルの一部ではない**ので、サーバー側のコードを安全に使える
  - [プレビューモード](https://nextjs.org/docs/advanced-features/preview-mode)や[動的 API ルート](https://nextjs.org/docs/api-routes/dynamic-api-routes)も使える
  - API ルートをクライアント側から呼び出す例として[これ](https://github.com/vercel/next.js/issues/7074#issuecomment-668524370)が参考になりそう

- これで Next.js のチュートリアルは Next.js のプロジェクトをデプロイするチャプターのみになった

## [T] 次にやること

- Next.js のチュートリアルをすすめる
- 図書館で借りた本を読む（D-3）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）
