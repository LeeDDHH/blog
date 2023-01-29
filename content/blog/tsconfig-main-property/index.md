---
title: 【TypeScript】tsconfig.jsonの主なオプションについて
date: "2023-01-29 14:15:00"
description: "TypeScriptのtsconfig.jsonを設定する際の主なオプションとフロントエンド・バックエンドでの設定についてまとめる"
---

tscofnig を最初から設定する際に `target` 、 `lib` 、 `module` をどうやって設定すればいいのかわからなかったため、調べてみた

## target

- どのバージョンの JS 向け“に出力するかを決める
  - 指定された `target` のバージョンによって、使用できるオブジェクト、関数の定義ファイルが読み込まれる
  - 古いバージョンだと、昨今当然のように使っているオブジェクトや関数が利用できない
- `target` を最新にしても、**動作する環境が古いままだと使うことはできない**
  - TS の場合、コーディング中はあたかもそのオブジェクト、関数があるかのように入力補完をする
  - 実際に動作する JS の実行環境でそのバージョンのオブジェクトや関数を持っているかどうかは別問題
  - とはいえ、新たな記法が生まれるよりも前の `target` に設定すると、新たな記法で書いてもコンパイル時に指定した `target` で有効な構文に変換してくれる

### 何を指定したらいいのか

- 古い Node.js を使っている事情がなければ、最新に近い物を指定する
- Microsoft が公開している Node.js バージョンと ECMAScript のバージョンの対応表
  - [Node Target Mapping · microsoft/TypeScript Wiki](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)
  - Node.js 16 の場合は、 `ES2021` を指定するらしい
- Babel などの専用のコンパイラやモジュールバンドラに処理を任せたい場合
  - `esnext` を指定する
  - バージョンに合わせたコンパイルができる
- Node.js のバージョンごとにどんな機能が使えるのかが見たい場合
  - [Node.js ES2015/ES6, ES2016 and ES2017 support](https://node.green/)
- ESModule のバージョンごとにどんな型定義が使えるのかが見たい場合
  - [TypeScript/src/lib at main · microsoft/TypeScript](https://github.com/Microsoft/TypeScript/tree/main/src/lib)

## lib

- 「指定した `target` には使いたい機能がないけど使いたい」というときに、指定する
  - `lib` は必ず指定する必要はない
  - `target` を指定すればそのバージョンで使われているライブラリは自動的に追加される
  - 指定した `target` のバージョンでは実装されていないライブラリの追加や、必要がないライブラリを除外に使う
- ポリフィル
  - 最新バージョンにはある、または現時点では実装には至っていないが提案中(proposal)である機能を取り入れて使えるようにする物
  - [What is a Polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill)
- Node.js では構文のサポートよりも API のサポートが先に行われることがある
  - `target` ではまだサポートしていないが Node.js で使えるようになっている API を `lib` を指定することによって使えるようにすることがある

## module

- モジュール読み込みの仕組みが異なっているライブラリの互換性は一般的にはないものと考える
- しかしフロントエンドとバックエンドでは異なる

### バックエンド設定

- `commonjs`
  - バックエンドで使われているモジュール読み込みの解決方法
  - 作成しているモジュールやパッケージがバックエンドでの動作だけを保証したい場合はもっとも無難な選択

### フロントエンド設定

- `es2015` 、 `es2020` 、 `esnext`
  - `esmodule` と呼ばれるモジュール読み込みの解決方法

## TSConfig Base を使って、最適化する

- 実行環境に最適化された TSConfig を公開しているリポジトリから Node.js のバージョンに合わせて必要な設定をプロジェクトに取り入れる

  - Node.js 16 の場合、[@tsconfig/node16 - npm](https://www.npmjs.com/package/@tsconfig/node16)をインストールし、 `tsconfig.json` で以下のように指定する

    ```json
    {
      ︙
      "extends": "@tsconfig/node16/tsconfig.json"
      // 必要であれば、プロジェクトの固有のオプションを追加する
      ︙
    }
    ```

## 参考

- [tsconfig.json を設定する | TypeScript 入門『サバイバル TypeScript』](https://typescriptbook.jp/reference/tsconfig/tsconfig.json-settings)
- [Node Target Mapping · microsoft/TypeScript Wiki](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)
- [Node.js ES2015/ES6, ES2016 and ES2017 support](https://node.green/)
- [TypeScript/src/lib at main · microsoft/TypeScript](https://github.com/Microsoft/TypeScript/tree/main/src/lib)
- [What is a Polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill)
- [tsconfig.json を書くときは TSConfig Bases を使うと便利 - Qiita](https://qiita.com/munieru_jp/items/a67ac782bbf099d90128)
- [@tsconfig/node16 - npm](https://www.npmjs.com/package/@tsconfig/node16)
- [@tsconfig/node18 - npm](https://www.npmjs.com/package/@tsconfig/node18)

## さいごに

主なプロパティの設定方法とベースとなる設定の取り込み方法について分かった

次は React や Next.js で設定する際にどんなオプションを使ったほうがいいのかについてまとめる
