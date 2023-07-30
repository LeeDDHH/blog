---
title: 【YWT】211005
date: "2021-10-05 20:00:00"
description: "windowsのインストーラーの使い方を調査した"
---

## [Y] やったこと

- 5.4km 歩いた
- Windows 用のインストーラーを作るための調査をした

## [W] わかったこと

- windows のインストーラー自体は作れたが、文字化けした状態でインストール作業するような感じのビルドにしかできなかった
  - まだ原因不明だけど、解決できなさそうだったら、英語にしてビルドする
- 特定の Slack チャンネルに Bot を招待して、チャンネル内のテキストを Speeadsheet に転載する方法について調べた
  - 以前は、slack の outgoing webhook を使うことで実装できたけど、いつの間にか slack app から作るのが推奨されるみたい
  - やることとしては、だいたい以下の手順で進めば実現はできそう
    - slack 側でチャンネルの書き込みを検知する bot （slack app）を作る
    - 検知した書き込みを取得するために、Spreadsheet と GAS を用意する
    - GAS をウェブアプリとしてデプロイする
    - デプロイした GAS のウェブアプリアドレスを bot 側で転載できるように指定する

## [T] 次にやること

- `alias` を登録するための機構を用意する
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）
- 『［図解］大学 4 年間の ◯◯ が 10 時間でざっと学べる』シリーズを読んでみる
  - [統計学](https://www.amazon.co.jp/dp/B07PXB4NN9)
  - [データサイエンス](https://www.amazon.co.jp/dp/B07XNW3TQM)
  - [経済学](https://www.amazon.co.jp/dp/B01KNLFHH6)
  - [マーケティング](https://www.amazon.co.jp/dp/B07BNC2SV3)
  - [経営学](https://www.amazon.co.jp/dp/B071SKDF3L)
  - [金融学](https://www.amazon.co.jp/dp/B07BB6Z7FW)
- [Lift-the-Flap Computers and Coding](https://www.amazon.co.jp/dp/1409591514)

<!-- https://twitter.com/camomile_cafe/status/1448073950420996113?s=20 -->
