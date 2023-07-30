---
title: 【YWT】210418
date: "2021-04-18 21:00:00"
description: "プロジェクトの構成を試してみたり、Arduinoのキッドを試してみたりした"
---

## [Y] やったこと

- 4.8km 歩いた
- Electron + Next.js + Webpack で環境設定を試してみた
- Arduino キッドをちょっと試してみた

## [W] わかったこと

- Next.js だと Webpack の 4 系と 5 系の選択肢があった
  - 5 系を基準にすると、Next.js の `pages` が認識されなかった
  - 4 系を基準にすると、Electron 側で非同期通信系の処理が起動中にエラーとなった
  - Electron 側は 5 系、Next.js 側は 4 系にビルドしたら、起動すらできなかった
  - Electron 側は `.mjs` 拡張子にして、Next.js は `.cjs` 拡張子にしてもダメだった
  - Next.js + Electron + TypeScript でトランスパイルを TS 側に任せるような環境にしたほうが楽そうな気がした
- なかなか進捗が進まなかったが、切り替えるのであればいまのうちなんだろうなと思った
  - でもその分、何が駄目なパターンなのかはわかった

## [T] 次にやること

- Electron の BrowserWindow の show/hide を制御する
- Electron の BrowserWindow を moveable にする
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1383773752824000518?s=20 -->
