---
title: 【YWT】210823
date: "2021-08-23 19:30:00"
description: "図書館で借りた本を読み終えたり、先週から抱えていた問題を解決したりした"
---

## [Y] やったこと

- 3.9km歩いた
- 図書館で借りた本を読み終えた
  - [プログラミング言語大全](https://www.amazon.co.jp/dp/4297113473)
- `child_process.fork` が実行されない問題の原因特定から解決までできた

## [W] わかったこと

- 明日出社することになった
- [プログラミング言語大全](https://www.amazon.co.jp/dp/4297113473)はけっこう読みこたえがあった
  - 各言語ごとの `FizzBuzz` 問題を自分で書いてみたら、言語特有のルールもなんとなくわかってきた
- `child_process.fork` が実行されない問題に3つの原因が絡んでいた
  - 無線キーボードの問題
    - 物理的なキーボート的に、入力下キーとは別の入力値が混ざっていた
    - Tabを押すと、Tab+pで入力されたり、aを押すとa+iTunesの起動が入力されたりした
    - 個人用のPCで使っていたキーボードを接続して回避した
  - VSCodeで制御文字が入力されてしまう問題
    - 物理キーボードの問題も相まって、日本語入力時にたまに起きる「[制御文字が入力されてしまう](https://twitter.com/camomile_cafe/status/1429710711559651332?s=20)」現象が確実に起きていた
    - VSCodeの設定周りの問題があったみたいで、再インストールして回避した
  - `child_process.fork` の実行問題
    - そもそも `fork` で起動する場合、 `Node.js` を別プロセスで起動するので、 `Node.js` 側が提供するモジュール以外は使えない
    - 必要な機能のみを抜き取り、 `fork` 起動時にオブジェクトとして渡すことで解決した

## [T] 次にやること

- `alias` を登録するための機構を用意する
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
- 『［図解］大学4年間の◯◯が10時間でざっと学べる』シリーズを読んでみる
  - [統計学](https://www.amazon.co.jp/dp/B07PXB4NN9)
  - [データサイエンス](https://www.amazon.co.jp/dp/B07XNW3TQM)
  - [経済学](https://www.amazon.co.jp/dp/B01KNLFHH6)
  - [マーケティング](https://www.amazon.co.jp/dp/B07BNC2SV3)
  - [経営学](https://www.amazon.co.jp/dp/B071SKDF3L)
  - [金融学](https://www.amazon.co.jp/dp/B07BB6Z7FW)
- [Lift-the-Flap Computers and Coding](https://www.amazon.co.jp/dp/1409591514)

<!-- https://twitter.com/camomile_cafe/status/1429765336732094475?s=20 -->
