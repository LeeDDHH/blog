---
title: 【YWT】210206
date: "2021-02-06 22:00:00"
description: "会社のソースコードを修正したり、TypeScriptでコードを書いたりした"
---

## [Y] やったこと

- 家から出なかった
- 朝から会社のソースコードに混入したコードについて調べた
  - 修正コードをあげて解決した
- 部屋のシーリングライトを IKEA の[光色切替えタイプ電球](https://www.ikea.com/jp/ja/p/tradfri-remote-control-kit-white-spectrum-40406550/)にした
- TypeScript、React でコードを書くときに色々とエラーに出くわしたため、調べた

## [W] わかったこと

- draw.io の Actor の名前を変更するためには、Actor 自体をダブルクリックすれば修正ができる
  - [uml - draw.io でアクターの名前を変更する方法](https://ja.ojit.com/so/uml/995445)
- シーリングライトを変えたら 1 階での作業環境が改善された
  - ルーメンが低い電球だと目が悪くなりそうな感じだったが、けっこう明るくなって見えやすかった
  - リモコン式で朝起きたあとに電源をつけるだけで目覚めやすくなりそうだった
- VSCode で TypeScript を書いたら以下のエラーに出くわした
  - `Cannot find module 'react' or its corresponding type declarations`
    - TypeScript を使うために必要な type のライブラリがインストールされていないことが原因だった
    - [reactjs - React, Typescript - Cannot find module ... or its corresponding type declarations](https://stackoverflow.com/questions/64732623/react-typescript-cannot-find-module-or-its-corresponding-type-declaration)
  - `Cannot use JSX unless the '--jsx' flag is provided`
    - `tsconfig.json` で `jsx` オプションに `react` を指定する必要があった
    - [TypeScript: Documentation - JSX](https://www.typescriptlang.org/docs/handbook/jsx.html)
    - [Cannot use JSX unless the '--jsx' flag is provided.](https://www.codegrepper.com/code-examples/typescript/Cannot+use+JSX+unless+the+%27--jsx%27+flag+is+provided.)
  - `You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders`
    - webpack に `ts-loader` で指定をしていたが、 `test` オプションで指定する拡張子名に `ts` と `tsx` の指定をしなかったのが原因だった
    - [You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file."](https://stackoverflow.com/questions/57924348/you-may-need-an-appropriate-loader-to-handle-this-file-type-currently-no-loader)
- TypeScript で型定義ファイルを使う利点として、定義したらプロジェクトのグローバルな要素として認識することで、**import、export を気にする必要がない**
- TypeScript の型定義ファイルを自作して管理する方法の 1 つを覚えた
  - `src/@types` ディレクトリを生成して、 `*.d.ts` 形式で作成する
  - `tsconfig.json` の `typeRoots` に `src/@types` ディレクトリを指定する
    - デフォルトでは `@types` になるらしい
    - [TypeScript で型定義ファイル( d.ts )がないときの対処法](https://qiita.com/Nossa/items/726cc3e67527e896ed1e)

## [T] 次にやること

- TypeScript のチュートリアルをすすめる
- 図書館で借りた本を読む
- 溜まっている家計簿を作成する
- エンジニアが集まる喫茶店のコンセプトづくりを各項目ごとに単語単位で出してみる
  - 「誰に」
  - 「何を」
  - 「どうやって」
