---
title: 【YWT】210224
date: "2021-02-24 22:00:00"
description: "TodolistにIME対応したり、会社のプロダクトに画面を実装したりした"
---

## [Y] やったこと

- 9km歩いた
- [Todolist](https://todolist.expfrom.me/)にちょっと手を加えた
  - タイトルの変更
  - IME入力対応（日本語、韓国語）
- 会社のプロダクトの画面実装をはじめた
- JavaScriptの型保全問題をいかに解消するかについてCTOと話をした

## [W] わかったこと

- 家の近くにある区民集会場を調べてみたら、事前申請と費用を済ませれば場所が借りられることがわかった
- Chromeの実験的機能に[Bluetooth機能](https://developer.mozilla.org/ja/docs/Web/API/Bluetooth)があることを知った
- ReactでInput要素に対してIME対応をしてみたら、面倒な作業ではあるけど、動き自体はできるようになった
  - [間接的なテキストの入力](https://developer.mozilla.org/ja/docs/Web/API/CompositionEvent)を検知するイベントがあって、Reactの[合成イベント](https://ja.reactjs.org/docs/events.html)で取得できる
  - [間接入力を確定して、Enter/returnで編集内容を保存する](https://github.com/LeeDDHH/react-typescript-todolist/commit/002249395999f2e7801b3ae78ecc84b258666471#diff-1b23978220b5ff2b7d58ed4642d215b8bf9c7edaa55828531df2701fdd61289cR78)処理も再現できた
  - Input要素に対して[3種類のイベントをつける](https://github.com/LeeDDHH/react-typescript-todolist/commit/002249395999f2e7801b3ae78ecc84b258666471#diff-1b23978220b5ff2b7d58ed4642d215b8bf9c7edaa55828531df2701fdd61289cR107)必要があった
  - 編集可能な領域の表示を別コンポーネント化して、変種開始の状態になったら[Input要素に対してfocusをあてる](https://github.com/LeeDDHH/react-typescript-todolist/commit/de093dac5963936d7fc7d0c23e3c8bc4123060e8#diff-e1edc91d3e6d807fc4d0df3c03670fd88bf625d91002757f82bfa70d17294fbeR19)ようにした
  - 直前のキー入力が[IME入力だったのかどうかを判定するためのフラグ](https://github.com/LeeDDHH/react-typescript-todolist/commit/de093dac5963936d7fc7d0c23e3c8bc4123060e8#diff-1b23978220b5ff2b7d58ed4642d215b8bf9c7edaa55828531df2701fdd61289cL32)が要らなくなり、削除した
- プロダクトで潜んでいる不具合とか言語ゆえの問題もあり、安全性を高めるための方法を考える時期だと思っている

## [T] 次にやること

- 図書館で借りた本を読む（D-4、D-13）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
