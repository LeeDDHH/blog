---
title: 【YWT】210907
date: "2021-09-07 19:00:00"
description: "gistに投稿したり、新たなエラーの原因究明と対策をしたりした"
---

## [Y] やったこと

- 5.3km 歩いた
- [mac の automator で使っているあれこれを書く](https://gist.github.com/LeeDDHH/fc5a6d20fef7d4e753041d12c8d33ad4)の gist を作った
- [キャリアの悩みで共感したことがあって](https://gist.github.com/LeeDDHH/312d9337233cf7bdfe19d1e7269cf161)gist に載せた
- アプリの再起動時にクラッシュレポートが表示される不具合の対策を書いた
- デザイナーが構成したプロト版の画面に対して自分の意見を伝えた

## [W] わかったこと

- `app.exit` では `Browserwindow` も含めて強制的にアプリを終了する仕様だった
  - その影響で、正常に終了すべきレンダラープロセスが強制終了してしまい、クラッシュレポートが表示されたと推測した
- そのため、対応として以下の順で終了する処理を追加
  - 再起動前にやっておく処理を済ませ、すべてのレンダラープロセスを閉じる
  - `app.relaunch` でアプリが終了したら再起動をする
  - `app.quit` で正常に終了させる
- すべてのレンダラープロセスを閉じる処理をかける上で、 `app.quit` をする理由は、万が一、終了していないレンダラープロセスがあったとしても強制終了せず、もう一度正常終了をさせるため

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

<!-- https://twitter.com/camomile_cafe/status/1435229673441554438?s=20 -->
