---
title: 【Gitbook】"cb.apply is not a function"エラー発生時の対応
date: "2021-02-13 12:00:00"
description: "node.jsとnpmのバージョンを上げたらgitbookコマンドでエラーが出てたので対応した"
---

その日にあったことをYWTに合わせて書くための[Gitbook](https://github.com/GitbookIO/gitbook)を書いていたが、node.jsとnpmを上げてから試そうとしたらエラーが発生し、困っていた

なんとか `gitbook-cli` のコマンドが使えるようになったので、実行時のエラーも含めて対応を書く

## 実行環境

node.jsの12バージョンで使っていた[Gitbook](https://github.com/GitbookIO/gitbook)を以下の環境で使おうとした

- node,js: 14.15.4
- npm: 7.5.4

しかし、[Gitbook](https://github.com/GitbookIO/gitbook)でプラグインをインストールするコマンドを実行したら以下のエラーが発生した

```shell
// プロジェクト内のgitbook-cliを使ってプラグインをインストールする
> node node_modules/gitbook-cli/bin/gitbook.js install

/Users/kamo/output/gitbook-ywt/node_modules/npm/node_modules/graceful-fs/polyfills.js:287
      if (cb) cb.apply(this, arguments)
                 ^

TypeError: cb.apply is not a function
    at /Users/kamo/output/gitbook-ywt/node_modules/npm/node_modules/graceful-fs/polyfills.js:287:18
    at FSReqCallback.oncomplete (fs.js:184:5)
```

何年か前にGoogle Tag Managerを触ってた時のUIのまま覚えていて手順でコンテナーを作ろうとしたが、すっかり変わってしまった

新しくなったUIでコンテナー作成とコンテナーのIDを確認する方法がわかったので、その手順をまとめる

## トリガーを作成する

## トラッキングIDを変数として作成する

## タグを作成する

## コンテナーの作成

まず、[Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/)のページに遷移し、サインインする

表示される画面の**Create Account**をクリックする

アカウントは、基本的に1つあればそのアカウント内で複数のコンテナーが作れる  
コンテナーに関しては後述する

![create-account](create-account.png)

アカウント作成ページでは以下の5つの項目を埋める

1. ユーザーが識別するための**アカウント名**
2. アカウントを所有する組織の**国**
3. **Googleに匿名でデータの共有**を有効/無効にする
4. **コンテナーの名前**
5. コンテナーのの**プラットフォーム**の種類

コンテナーとは、特定の目的を持つ複数のタグを一元管理するための仕組みの単位を指す  
ウェブサイトで取得したタグであれば**Web**を選択し、アプリケーションでの挙動でタグを取得したいのであれば、**iOS**、**Android**を選択する

選択が終わったら、**Create**をクリックする

![detail-container](detail-container.png)

## コンテナーIDを確認する

コンテナーを生成すると、最初にGoogle Tag Managerで使うためのIDを表示してくれる

オレンジの枠に書かれている**GTM-**からはじまる文字列が、よく**GTMのID**、**GTMコンテナーのID**と呼ばれるIDである

一般的なHTMLのページであれば、スクリプトをコピーして**head**タグに貼り付ければ動作するだろう  

![gtm-tag-id](gtm-tag-id.png)

OKボタンをクリックすると、以下の画面が表示される

もし、再度**GTMのID**を確認したいのであれば、このページのオレンジの枠で囲ったところをクリックすると、表示してくれる

![re-view-gtm-tag-id](re-view-gtm-tag-id.png)

## さいごに

[Gatsby.JS](https://www.gatsbyjs.com/)とか[Hugo](https://gohugo.io/)とかのようなフレームワークを使う場合は、別途ライブラリを使う可能性があるので、公式ページから探してみるほうがいいと思った
