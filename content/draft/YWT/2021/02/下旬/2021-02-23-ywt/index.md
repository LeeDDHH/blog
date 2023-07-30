---
title: 【YWT】210223
date: "2021-02-23 22:00:00"
description: "github actionsのトレーニングコースを触ってみたり、node.jsの本を読んだりした"
---

## [Y] やったこと

- 1.9km歩いた
- [github actionsのチュートリアル](https://lab.github.com/githubtraining/github-actions:-hello-world)を終えた
- YWTをまとめるgitbookにもgithub actionのworkflowsを書いてみた
  - plugin関連がうまく行かず、netlify-cliで直接デプロイする手を使った
- 取り置きしてた図書館の本を借りた
- [node.js関連の本](https://gist.github.com/LeeDDHH/69f903aa02309eb8d61abab00ebea7c7)を読んだ（69/200）
- シシトウ入りの料理をしてみた

## [W] わかったこと

- github actions自体、調べながら実装することはできそうな気がした
  - まずは以下のページから見ることにした
    - [CircleCIマン が GitHub Actions を導入するまで](https://zenn.dev/dodonki1223/articles/b26d3689bbb012d9e88c)
    - [GitHubの新機能「GitHub Actions」で試すCI/CD](https://knowledge.sakura.ad.jp/23478/)
    - [GitHub Actions覚え書き](https://qiita.com/progrhyme/items/56c24b3731deffcd4481)
    - [Events that trigger workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)
- フォルダーごと書き換えようとしたが、 `cp: -r not specified; omitting directory` というエラーが出てた
  - どうやら、linux環境だと `cp -rp コピー元 コピー先` の[書き方](http://keizokupw.seesaa.net/article/358217548.html)だったらしい
- github actionsを使ってnetlifyにデプロイする方法を参考に `main.yml` を書いてみたら、動作はしてた
  - `v2` がリリースされていたみたいで `actions/setup-node@v2` にした
- [GitHub Actionsのドキュメント](https://docs.github.com/ja/actions)をこれからよく参照することになりそうな気がした
- [github自体の拡張機能](https://github.com/marketplace)と[github actionsの拡張機能](https://github.com/marketplace?type=actions)があることをはじめて知った
- [github actionsの料金](https://github.co.jp/features/actions#pricing)を見る限り、一人で使う分には無料プランで十分そうな気がした
- 東京の散歩コースとして[谷根千](https://www.google.com/maps/search/%E8%B0%B7%E6%A0%B9%E5%8D%83/@35.7236264,139.7582851,15z/data=!3m1!4b1)にも行ってみたいと思った
- ここ最近、undertale実況を聞き流していることもあって、「ケツイがみなぎった」文言をジェネレートするWebサービスを作るのもありかなと思った
- [天空のアジト マルシンスパ](http://marushinspa.jp/index.html)という施設が気になって、近いうちに行ってみたいと思った
- 毎月自分が歩いた距離の合計をするのがだるくて、毎日の歩数を書き込めるアプリを作ろうかと思った

## [T] 次にやること

- 図書館で借りた本を読む（D-5、D-14）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
