---
title: 【Adobe Creative Cloud】Mac起動時の自動起動を切る
date: "2021-01-19 09:44:16"
description: "Mac版のAdobe Creative Cloudが自動起動されないように設定する"
---

Mac を起動するたびに、[Adobe Creative Cloud](https://www.adobe.com/jp/creativecloud.html)が自動起動されて、煩わしかった

## 問題

`システム環境設定 > ユーザーとグループ > ログイン項目` に[Adobe Creative Cloud](https://www.adobe.com/jp/creativecloud.html)がログイン時の自動起動項目に入っていなかったため、調査をしてみた

## 解決

1. メニューバーの `Creative Cloud > 環境設定` を開く

![Adobe Creative Cloud 環境設定](./adobe-creative-cloud-preference.png)

2. `ログイン時に Creative Cloud を起動` を `Off` にする

![自動起動を切る](./autolaunch-off.png)

---

これで Mac を起動するたびに自動起動されることはない
