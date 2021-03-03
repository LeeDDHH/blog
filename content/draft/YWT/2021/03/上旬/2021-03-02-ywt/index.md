---
title: 【YWT】210302
date: "2021-03-02 20:10:00"
description: "Electron側の内部処理を書いたり、Next.jsのチュートリアルをすすめたりした"
---

## [Y] やったこと

- 2.6km歩いた
- Next.jsのチュートリアルをすすめた
- 読み込み関連の実装をした
- コードレビューをした
- 1on1がてら、開発部のミーティングもした

## [W] わかったこと

- 一部同期処理でしか走らない関数があって、遠回りの処理をすることでやりたい処理はできるようになった
  - できれば非同期処理をして、その処理が終わったら追従する処理をするように変更したいが、けっこう影響範囲が大きいのでしばらくは遠回りの処理をすることにした
- Next.jsのページ間移動のチュートリアルをすすめた
  - `pages` 配下に表示するページを置くことでページの追加ができる
      - `pages` 配下に置き、`Link` コンポーネントを使うことでルーティングライブラリを必要としない
  - `Link` コンポーネントを使うことでNext.jsプロジェクト内ページへのリンクがつけやすくなる
  - `Link` コンポーネントを使うことでクライアントナビゲーション（Client-Side Navigation）が使える
      - サーバーとのやり取りを行わず、JavaScriptでページ遷移ができる
  - Next.jsではコード分割（Code Splitting）を自動で実行してくれる
      - これにより、リクエストしたページのコードのみをロードする
  - `Link` コンポーネントがブラウザのビューポートに現れたら、Next.jsはリンク先のページを自動的にプリロードする
      - リンクをクリックするまえに、すでにバックグラウンドでロードされる
- Next.jsでアセット、メタデータ、CSSを扱うチュートリアルをすすめた
  - `public` 配下に `robots.txt`、 `google-site-verification`などの静的ファイルが置ける
  - `Image` コンポーネントを使えば、以下のような動作をしてくれる
      - 異なるサイズのスクリーンサイズに合わせた調整
      - サードパーティツールを使ったイメージの最適化
      - ビューポートに入ったときのみイメージをロードする
  - 画像は基本的に遅延ロードされる
  - Googleが検索ランキングで使っている[Cumulative Layout Shift](https://web.dev/cls/)と[Core Web Vital](https://web.dev/vitals/#core-web-vitals)を回避するように画像をレンダリングしている
  - 基本的に `Image` には `src` 、 `alt` 、 `width` 、 `height` のpropsを指定する
  - メタデータは `Head` で囲って設定できる
  - CSSはJSXのスタイリングで指定する場合、 `<style jsx>{…}</style>` でできる
      - `styled-components` 、 `emotion` 、 `Tailwind CSS` などのライブラリも使おうとすれば使える
  - 複数のページで共有するコンポーネントは、プロジェクトの最上位ディレクトリに `components` ディレクトリを作って管理する
      - `components` 内で生成したファイルにスタイルをつけ加える場合、 `.module.css` で終わるCSS Modulesを使って設定する
      - CSS Modulesで設定したクラスは コンポーネント内で `className` で指定する
      - `className` で指定した名前は、Next.js側で固有の名前に変えてくれるのでコンフリクトする心配もない
  - すべてのページに適用するスタイルを指定する場合、 `pages/_app.js` を生成してグローバルスタイルを指定するためのコンポーネントで管理する
      - 便宜上、プロジェクトの最上位ディレクトリに `styles/global.css` ディレクトリを作ってグローバルスタイルを管理する
      - ```javascript
            // pages/_app.js
            import '../styles/global.css'

            export default function App({ Component, pageProps }) {
              return <Component {...pageProps} />
            }
          ```
  - [スタイリングする上でのtips](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)もある

## [T] 次にやること

- Next.jsのチュートリアルをすすめる
- 図書館で借りた本を読む（D-8）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
