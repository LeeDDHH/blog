---
title: 【Gatsby】iframelyを使うためにやったこと
date: "2021-01-05 07:01:00"
description: "Gatsbyでiframelyを使うためにやったこと"
---

以前投稿していたブログでよく使っていた[iframely](https://iframely.com/)をGatsbyでも使おうとしたが、同じ要領では表示されなかった

今回はGatsbyで[iframely](https://iframely.com/)を使うために調べたこと、やったことについてまとめる

# iframelyとは？

<p><div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://iframely.com/" data-iframely-url="//cdn.iframe.ly/UjEwgS"></a></div></div></p>

[iframely](https://iframely.com/)は一言でいうと、SNSやブログなどの共有時に使う**HTMLの埋め込みコードを簡単に取得する**ためのサービス

このサービスを使うことで便利になるのは以下の点

- HTMLの埋め込みコードを取得するのが簡単になる
- 埋め込みコード未対応のサイトでも取得できるケースが多い
- サービスに登録すると、文字色は背景色がカスタムできる（ただし、カスタマイズされた埋め込みコードは**1000リクエスト/月**まで）

[iframely](https://iframely.com/)が提供する基本機能で十分な場合は、基本的に無料で利用ができる

![iframely UI](./iframely.png)

サイトにて、上記の画像のようにURLを入力してREFRESHをクリックすると、埋め込みコードとプレビューが表示される

# 問題だったこと

あとは、ブログに埋め込みコードを配置することで外部コンテンツへのリンクが使えるはずだが、実際はプレビューが表示されなかった

[公式ドキュメント](https://iframely.com/docs/reactjs)の説明によるとReactのように仮想DOMを使う場合、**素の状態ではembed機能**が使えない

> React has its own virtual DOM and doesn't execute (eval) any inline scripts that go with HTML elements you add.

正確には、HTML要素と一緒に書かれた**インラインスクリプトをReactが危険なHTMLと判断して、実行をしない**とのこと

> Even when you use dangerouslySetInnerHTML. Even if that "dangerous" HTML is actually trusted to be safe. React considers that you expose yourself to the risks of out-of-sync virtual DOM.

# 解決策

## 注意事項

<p>
<strong>本記事は<a href="https://github.com/gatsbyjs/gatsby-starter-blog" target="_blank">gatsby-starter-blog</a>から生成していることを前提にしている</strong>
<br>
<strong>また、記事ではReactの関数コンポーネントでの実装を想定している</strong>
</p>

やることはシンプルで、iframelyで提供しているグローバルCDNを `headタグ` に配置することで、解決できる  
ただ、Reactで `headタグ` や `metaタグ` を操作するためのライブラリを使う必要がある  
これに関しては[gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)ですでに使われている[react-helmet](https://github.com/nfl/react-helmet)を使うことで実現できる

<p><div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/nfl/react-helmet" data-iframely-url="//cdn.iframe.ly/hTWaD2m"></a></div></div></p>

では、[公式ドキュメント](https://iframely.com/docs/reactjs)と[CDNスクリプト配置の例が載っているgist](https://gist.github.com/nleush/7e7775c9709eb3bdb6e6)を参考に以下のように実装する

まず、今回の実装で使うファイルは以下の通り

```tree
src
├── components
│   ︙
│   └── iframely.js ※新規生成
└── templates
    └── blog-post.js (headに)
```

`components/iframely.js` を新規作成し、iframelyのCDNスクリプトをコンポーネントで定義する

```javascript
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

const Iframely = () => {
  // 古い記事に遷移したときにもCDNがロードされるように、rendering後loadする
  useEffect(() => {
    if (window && window.iframely) {
      window.iframely.load()
    }
  }, [])

  return (
    <Helmet>
      <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" />
    </Helmet>
  )
}

export default Iframely
```

`templates/blog-post.js` に `Iframely` を配置する

```javascript
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
/* ここ */
import Iframely from "../components/iframely"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      /* ここ */
      <Iframely />
      <SEO
        title={post.frontmatter.title}
︙
```

上記のコードの修正/追加に加え、[iframely](https://iframely.com/)で生成した埋め込み用コードを貼り付けるたびに1点修正が必要になる

- `embed.js`の埋め込みを削除

  - iframely専用のコンポーネント（`components/iframely.js`）で読み込むため

    ```html
    // 埋め込みコード
    <div class="iframely-embed">
      <div
        class="iframely-responsive"
        style="height: 140px; padding-bottom: 0;"
      >
        <a
          href="https://expfrom.me"
          data-iframely-url="//cdn.iframe.ly/tn9cRBk"
        ></a>
      </div>
    </div>
    <!-- ココを削除 -->
    <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
    ```

上記の設定をすることで、以下のように[iframely](https://iframely.com/)のHTMLの埋め込みコードが表示される

<p><div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://expfrom.me" data-iframely-url="//cdn.iframe.ly/tn9cRBk"></a></div></div></p>

# まとめ

[jekyll](http://jekyllrb-ja.github.io/)で作ったブログでは、HTMLの埋め込みコードがそのまま使えたが、React製の静的ウェブサイトだと工夫が必要になることがわかった

実装時の手順や参照ページに関しては[inouetakumon](https://twitter.com/inouetakumon)さんの記事が大変参考になった

<p><div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://takumon.com/iframely" data-iframely-url="//cdn.iframe.ly/8UezQwi?iframe=card-small"></a></div></div></p>

余談だけど、素の状態のReactで埋め込みコードを簡単に使いたい場合、[react-embed](https://github.com/streamich/react-embed)というパッケージがあるので、これを使うのもいいかもしれない

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/streamich/react-embed" data-iframely-url="//cdn.iframe.ly/UZy9YyH"></a></div></div>
