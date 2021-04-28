---
title: 【YWT】210428
date: "2021-04-28 23:30:00"
description: "不具合報告の調査をしたり、本格的にリファクタリングを考えたりした"
---

## [Y] やったこと

- 1.3km歩いた
- 不具合報告の件で調査をした
- 朝からグラグラしてて、昼休みにちょっと寝た

## [W] わかったこと

- グローバルステート管理を二元管理したら地獄を見ることがわかった
  - デザインパターンのDAOみたいな機構を用意しないと確かに破綻する未来が待っていると感じた
- 売上は重要だけど、拡張性を失うようなコードを基盤にしてメンテナンスをし続けるのは良くないと思った

## [T] 次にやること

- ElectronのBrowserWindowのshow/hideを制御する
- ElectronのBrowserWindowをmoveableにする
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1387418204713062401?s=20 -->
