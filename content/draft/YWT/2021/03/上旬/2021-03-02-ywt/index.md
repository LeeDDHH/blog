---
title: 【YWT】210302
date: "2021-03-02 20:10:00"
description: "Electron側の内部処理を書いたり、Next.jsのチュートリアルをすすめたりした"
---

## [Y] やったこと

- 2.6km 歩いた
- Next.js のチュートリアルをすすめた
- 読み込み関連の実装をした
- コードレビューをした
- 1on1 がてら、開発部のミーティングもした

## [W] わかったこと

- 一部同期処理でしか走らない関数があって、遠回りの処理をすることでやりたい処理はできるようになった
  - できれば非同期処理をして、その処理が終わったら追従する処理をするように変更したいが、けっこう影響範囲が大きいのでしばらくは遠回りの処理をすることにした
- Next.js のページ間移動のチュートリアルをすすめた
  - `pages` 配下に表示するページを置くことでページの追加ができる
    - `pages` 配下に置き、`Link` コンポーネントを使うことでルーティングライブラリを必要としない
  - `Link` コンポーネントを使うことで Next.js プロジェクト内ページへのリンクがつけやすくなる
  - `Link` コンポーネントを使うことでクライアントナビゲーション（Client-Side Navigation）が使える
    - サーバーとのやり取りを行わず、JavaScript でページ遷移ができる
  - Next.js ではコード分割（Code Splitting）を自動で実行してくれる
    - これにより、リクエストしたページのコードのみをロードする
  - `Link` コンポーネントがブラウザのビューポートに現れたら、Next.js はリンク先のページを自動的にプリロードする
    - リンクをクリックするまえに、すでにバックグラウンドでロードされる
- Next.js でアセット、メタデータ、CSS を扱うチュートリアルをすすめた

  - `public` 配下に `robots.txt`、 `google-site-verification`などの静的ファイルが置ける
  - `Image` コンポーネントを使えば、以下のような動作をしてくれる
    - 異なるサイズのスクリーンサイズに合わせた調整
    - サードパーティツールを使ったイメージの最適化
    - ビューポートに入ったときのみイメージをロードする
  - 画像は基本的に遅延ロードされる
  - Google が検索ランキングで使っている[Cumulative Layout Shift](https://web.dev/cls/)と[Core Web Vital](https://web.dev/vitals/#core-web-vitals)を回避するように画像をレンダリングしている
  - 基本的に `Image` には `src` 、 `alt` 、 `width` 、 `height` の props を指定する
  - メタデータは `Head` で囲って設定できる
  - CSS は JSX のスタイリングで指定する場合、 `<style jsx>{…}</style>` でできる
    - `styled-components` 、 `emotion` 、 `Tailwind CSS` などのライブラリも使おうとすれば使える
  - 複数のページで共有するコンポーネントは、プロジェクトの最上位ディレクトリに `components` ディレクトリを作って管理する
    - `components` 内で生成したファイルにスタイルをつけ加える場合、 `.module.css` で終わる CSS Modules を使って設定する
    - CSS Modules で設定したクラスは コンポーネント内で `className` で指定する
    - `className` で指定した名前は、Next.js 側で固有の名前に変えてくれるのでコンフリクトする心配もない
  - すべてのページに適用するスタイルを指定する場合、 `pages/_app.js` を生成してグローバルスタイルを指定するためのコンポーネントで管理する

    - 便宜上、プロジェクトの最上位ディレクトリに `styles/global.css` ディレクトリを作ってグローバルスタイルを管理する
    - ```javascript
      // pages/_app.js
      import "../styles/global.css"

      export default function App({ Component, pageProps }) {
        return <Component {...pageProps} />
      }
      ```

  - [スタイリングする上での tips](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)もある

## [T] 次にやること

- Next.js のチュートリアルをすすめる
- 図書館で借りた本を読む（D-8）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）
