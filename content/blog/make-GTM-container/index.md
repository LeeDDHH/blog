---
title: 【GTM】コンテナーを作成し、IDを確認する
date: "2021-02-10 20:00:00"
description: "Google Tag ManagerのUIが変わりすぎて混乱したため、コンテナー作成の手順をまとめる"
---

何年か前にGoogle Tag Managerを触ってた時のUIのまま覚えていて手順でコンテナーを作ろうとしたが、すっかり変わってしまった

新しくなったUIでコンテナー作成とコンテナーのIDを確認する方法がわかったので、その手順をまとめる

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