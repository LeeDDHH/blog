---
title: Gatsbyでiframelyを使うためにやったこと
date: '2021-01-03 18:54:45'
description: 'Gatsbyでiframelyを使うためにやったこと'
---

以前投稿していたブログでよく使っていたiframelyをGatsbyでも使おうとしたが、同じ要領では表示されなかった  
今回はGatsbyでiframelyを使うために調べたこと、やったことについてまとめる

# iframelyとは？

そもそもiframelyは

# 問題だったこと

公式ドキュメントの説明によると

Reactのように仮想DOMを使う場合、素の状態ではembed機能が使えない

「余談」react-embedというライブラリが存在するぐらい

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
takumonさんの記事が大変参考になりました
