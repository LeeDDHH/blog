---
title: 【YWT】210501
date: "2021-05-01 20:20:00"
description: "OZENでマッチングが決まったり、Electronのコードを書いたりした"
---

## [Y] やったこと

- 5.3km 歩いた
- [React + TypeScript + Electron 用のテンプレートリポジトリ](https://github.com/LeeDDHH/react-typescript-electron-template)を作った
- `webpack` の `devServer` を複数立ち上げられた
- Electron で書いているプロジェクトの Todo リストを書き出した
- `Tray` の表示項目だけを管理するよう、関数を分離した
- メインで表示している画面をグローバルショートカットで表示/非表示にできるようにした
- 明日、高尾山に行くための準備をした

## [W] わかったこと

- `webpack` の `devServer` を複数立ち上げるには `webpack-cli serve` で個別に起動させる必要があった
  - 一つの設定ファイル内で複数の `devServer` を立ち上げようとすると、すでに起動していると怒られる
- メインの表示ウィンドウを非表示にしたとき、ビュー側で保持していたデータを初期化する処理がしたかった
  - `win.webContents.send` で、ビューの非表示後に初期化のためのメッセージを送ることで解決した

## [T] 次にやること

- Electron の BrowserWindow を moveable にする
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1388462726083604481?s=20 -->
