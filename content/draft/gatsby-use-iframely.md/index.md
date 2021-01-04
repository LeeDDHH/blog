---
title: Gatsbyでiframelyを使うためにやったこと
date: '2021-01-03 18:54:45'
description: 'Gatsbyでiframelyを使うためにやったこと'
---

以前投稿していたブログでよく使っていた[iframely](https://iframely.com/)をGatsbyでも使おうとしたが、同じ要領では表示されなかった

今回はGatsbyで[iframely](https://iframely.com/)を使うために調べたこと、やったことについてまとめる

# iframelyとは？

<p>
<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://iframely.com/" data-iframely-url="//cdn.iframe.ly/UjEwgS"></a></div></div>
</p>

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

公式ドキュメントに書いていることを実装する

※本ブログがどのstarterから切ったのかを明記する  
※本記事ではReactで書くことを想定する（TypeScript形式では書かない）

src/components配下にiframely.jsを作成
react-helmetの説明
iframelyは何を判定しているのか

templates/blog-postのヘッダータグ内にiframelyを配置

iframelyで生成したリンクを記事に貼って確認する
※貼る際に、scriptタグ部分はiframelyコンポーネントで書いた内容と重複しているので除外する

# 最後に
takumonさんの記事が大変参考になった

余談だけど、素の状態のReactで埋め込みコードを簡単に使いたい場合、[react-embed](https://github.com/streamich/react-embed)というパッケージがあるので、これを使うのもいいかもしれない

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/streamich/react-embed" data-iframely-url="//cdn.iframe.ly/UZy9YyH"></a></div></div>
