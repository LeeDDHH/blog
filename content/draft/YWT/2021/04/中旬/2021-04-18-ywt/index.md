---
title: 【YWT】210418
date: "2021-04-18 21:00:00"
description: "プロジェクトの構成を試してみたり、Arduinoのキッドを試してみたりした"
---

## [Y] やったこと

- 4.8km歩いた
- Electron + Next.js + Webpackで環境設定を試してみた
- Arduinoキッドをちょっと試してみた

## [W] わかったこと

- Next.jsだとWebpackの4系と5系の選択肢があった
  - 5系を基準にすると、Next.jsの `pages` が認識されなかった
  - 4系を基準にすると、Electron側で非同期通信系の処理が起動中にエラーとなった
  - Electron側は5系、Next.js側は4系にビルドしたら、起動すらできなかった
  - Electron側は `.mjs` 拡張子にして、Next.jsは `.cjs` 拡張子にしてもダメだった
  - Next.js + Electron + TypeScriptでトランスパイルをTS側に任せるような環境にしたほうが楽そうな気がした
- なかなか進捗が進まなかったが、切り替えるのであればいまのうちなんだろうなと思った
  - でもその分、何が駄目なパターンなのかはわかった

## [T] 次にやること

- ElectronのBrowserWindowのshow/hideを制御する
- ElectronのBrowserWindowをmoveableにする
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1383773752824000518?s=20 -->
