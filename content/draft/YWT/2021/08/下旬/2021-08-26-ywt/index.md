---
title: 【YWT】210826
date: "2021-08-26 19:30:00"
description: "出社したり、不具合解消のためのコードを書いたりした"
---

## [Y] やったこと

- 4.7km歩いた
- 出社をした
- OS側とアプリ側で違いのある仕様があって、確認と実装をした
- 読み終わった本を返却した
  - [自分で考えて動く社員が育つOJTマネジメント](https://www.amazon.co.jp/dp/4866801034)
- 新たに本を借りた
  - [実用Git](https://www.amazon.co.jp/dp/4873114403)
  - [Atomic Design ~堅牢で使いやすいUIを効率良く設計する](https://www.amazon.co.jp/dp/477419705X)
  - [「大人のADHD」のための段取り力](https://www.amazon.co.jp/dp/4062596962)
  - [「段取りが良い人」と「段取りが悪い人」の習慣](https://www.amazon.co.jp/dp/475692056X)
- [開発やプログラミング勉強に役立つリソースサイト](https://rod.expfrom.me/)にコンテンツを更新した
- [Findyのイベント](https://findy.connpass.com/event/222574/)に参加した
- リリース時に使うコマンドを種類ごとにワンコマンドで実行できるように簡略化した

## [W] わかったこと

- 今日も出社した
- 
- アプリケーションを正常に終了させているのにクラッシュレポートが出てくる現象が生じていたが、まだ原因が分からなかった
  - 今のところわかる手がかりは以下
    - ```markdown
      例外タイプ：EXC_BAD_ACCESS (SIGSEGV)
      例外コード：KERN_INVALID_ADDRESS at 0x0000000000000020
      例外ノート：EXC_CORPSE_NOTIFY
      終了シグナル：Segmentation fault: 11
      終了理由：Namespace SIGNAL, Code 0xb
      終了プロセス：exc handler [5399]
      ```
    - これだけ見てもあまりよく分からなかった
  - 終了前に `BrowserWindow` のインスタンスを `null` にして終了させたが、状況変わらず
  - レポートのスタックの一番上に `libsystem_kernel.dylib` と `__ulock_wait` が書かれてあったので、これをもとにたどるしかないかなと思った
- 取り置き期限が明日までの本があったのを思い出した

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

<!-- https://twitter.com/camomile_cafe/status/1430897618645708816?s=20 -->
