---
title: 【YWT】210108
date: "2021-01-08 21:47:35"
description: "病み上がりで、静かに過ごした"
---

気圧の影響で一気に体調が悪くなったが、なんとか回復した

## [Y] やったこと

- 2km 歩いた
- Gatsby ブログに SearchConsole を設定した
- 現タスクの実装がちょっと進んだ
- [弊社のプロダクトが紹介されているページ](https://twitter.com/camomile_cafe/status/1347475527792095235?s=20)があって、ツイートした
- [幸働セミナー](https://twitter.com/steroid66/status/1346362225636691969)に参加表明した

## [W] わかったこと

- Gatsby ブログにサイトマップを生成し、ドメイン所有権の証明用のコードを meta タグに入れるだけで SearchConsole の設定が終わるかと思ったら、違った
  - ムームードメインのカスタム設定でドメイン所有権の証明用のコードを TXT に登録してたらやっと通った
- Node.js で home ディレクトリを取得する時、 `process.env.USERPROFILE` とか `process.env.HOME` とかにしても production 版では取れなかった
  - [最近は、os.homedir のほうが推奨されている](https://stackoverflow.com/questions/9080085/node-js-find-home-directory-in-platform-agnostic-way#answer-16156985)らしい

## [T] 次にやること

- Gatsby 関連のタスクをすすめる
- 知の整理術 2 章を読む
- OculusQuest2 の初期設定をする
