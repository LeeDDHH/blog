---
title: 【YWT】210112
date: "2021-01-12 21:35:00"
description: "徐々にエンジンをかける日だった"
---

- 1時間フレックス勤務して、セミナーに参加した

## [Y] やったこと

- 4.3km歩いた
- ロフトで保管している電子機器の箱を1階に下ろした
- 一日にやることリストを書いた
- ドトールで読書30分した
- Node.jsのforkで生成した子プロセスの制御で苦戦した
  - まだ解決していない
- 1時間早くフレックスタイムを使って18時に上がった
- 18時から[セミナー](https://peraichi.com/landing_pages/view/97zvx)に参加した

## [W] わかったこと

- ドトールでコーヒーを飲みながら本を読むのがなんだかんだで1週間続いてきたことがわかった
  - コードを書く系の本でなければ、普通にこの活動でインプットする時間は作れそうだった
- Node.jsのforkを使った処理が厄介な感じがした
  - ビルドしてから動かない原因にforkで使うファイルがビルド生成後に参照できていない可能性があった
    - 確かにビルドしてからを基準にしたら存在しないパスのファイルを読み込もうとしていた
    - webpackのoutput設定を追加して解決した
  - forkでプロセスを正常に生成したものの、ミリ秒で落ちてしまう現象が起きていた
    - 原因がわからず、Node.jsで使うログ出力用のライブラリを使って調査をすすめることにした
- [幸働セミナー](https://peraichi.com/landing_pages/view/97zvx)に参加した
  - 幸せの定義はセミナー中にやってたワークをもとに定義する材料まとめるところからスタートだと感じた
  - この定義次第で次にやることと結果の想定に繋がりそうだった
  - まとめたらブログにして、次の活動へ活かすための助言やイベントへの参加にまでつながったらいいなと思った
## [T] 次にやること

- 電子機器を管理する箱を1階のメタルラック下に整理する
- 一日にやることリストを書く
- ドトールで読書30分する