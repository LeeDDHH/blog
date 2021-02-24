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
  - 直前のIME入力状態とキーを押した後のIME入力状態を比較することで、[useEffect内で編集開始時の状態を一定に保つ](https://github.com/LeeDDHH/react-typescript-todolist/commit/002249395999f2e7801b3ae78ecc84b258666471#diff-1b23978220b5ff2b7d58ed4642d215b8bf9c7edaa55828531df2701fdd61289cR35)ことができた
      - この比較を使うことで、英語入力はキー入力するたびに「必ず直接入力によるvlaueの変更」が走る前提の挙動となった
      - もし、**英語もIMEで間接的な入力をさせる**使い方をする場合は、英語がまともに打てない可能性が大きい
- プロダクトで潜んでいる不具合とか言語ゆえの問題もあり、安全性を高めるための方法を考える時期だと思っている

## [T] 次にやること

- 図書館で借りた本を読む（D-4、D-13）
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
