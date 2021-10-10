---
title: 【YWT】210514
date: "2021-05-14 20:20:00"
description: "ipcRendererのremoveListenerを使ってみたり、他のやり方はないか探してみたりした"
---

## [Y] やったこと

- 1.3km歩いた
- `contextBridge` で分離した `ipcRenderer` イベントのリスナーが複数実行されていたため、 `removeListener` を使って、実行後はリスナーを削除するように処理を入れた

## [W] わかったこと

- `ipcRenderer.removeListener` を `useEffect` 内で使ったら、 `Uncaught TypeError [ERR_INVALID_ARG_TYPE]: The "listener" argument must be of type function. Received an instance of Object` というエラーに出くわした
  - [公式のipcRenderer.removeListenerの説明](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener)を見ても、いまいちピンとこなかった
  - そもそも、説明にある `listener` が何を指しているのかが理解できなかった
  - [こちらのブログ](https://dennistretyakov.com/ipc-render-in-cra-managed-app)を見て、 `listener` が `on` とか `once` とかで第2引数として使うイベントリスナーだということがわかった
  - `preload` で管理しているイベントの戻り値をイベントリスナーにして、フロントの `useEffect` 内でイベントを受信し、 `return` でイベントリスナーを実行するように設定したら、意図通りに動いた

## [T] 次にやること

- `alias` を登録するための機構を用意する
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1393169526687109131?s=20 -->
