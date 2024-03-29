---
title: 【YWT】210208
date: "2021-02-08 20:00:00"
description: "XDの画面に対してフィードバックしたり、YWT記事をGitBookに移行したりした"
---

## [Y] やったこと

- 2km 歩いた
- 1 階にあるキャンプ用品をロフトに移動させた
- 昼休みに足湯をした
- 共有された XD の全ページを閲覧し、コメントを残した
  - 一部コメントで残すよりも全体的な構成の件でデザイナーと別途話をした
- Gatsby ブログに書いていた YWT の記事を GitBook へ移行した
  - 既存の URL に対しては Netlify 側からリダイレクトするように修正を加えた

## [W] わかったこと

- しばらくロフトで作業してたが、荷物をロフトに移動させたら 1 階での作業がしやすくなった
  - ロフトであぐらをかいて作業するより、1 階でやるのがいい感じにできそうな気がした
- 足湯をするだけでけっこう楽になった
- 実装する機能の画面を多さを見て、そもそもこれだけの画面を一気に実装する必要があるのかと考えた
  - デザイナーの話を聞いてみたら、今の状態から更に分解して実装ができそうな気がした
  - 二人で決められる範囲を超えた話に発展したのもあり、明日開発部長と話すことにした
- Gatsby ブログで YWT を書き続けて、他の性質を持つ記事が埋もれるのは良くないと思った
  - 技術、読書、調べたことは Gatsby ブログに書いて、YWT 自体は GitBook で書いたらスッキリするんじゃないかと考えた
  - GitBook を Netlify にデプロイすること自体は 10 分もかからなかった
  - GitBook で使うプラグインは[Qiita の記事を参考にした](https://qiita.com/mebiusbox2/items/938af4b0d0bf7a4d3e33)
  - Netlify でビルドする際、アーカイブされたプラグインがダウンロードできないのではないかと思った
  - 結果、ローカルでビルドして、 `_book` を公開先にする方法で移行をした
  - 既存のブログリンクは[Netlify 側の記事](https://docs.netlify.com/routing/redirects/)と[ブログの記事](https://howno.page/entry/netlify-gatsby-redirects/)を参考にしてリダイレクトさせた

## [T] 次にやること

- TypeScript のチュートリアルをすすめる
- 図書館で借りた本を読む
