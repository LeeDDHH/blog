---
title: 【Spotify】Mac起動時の自動起動を切る
date: '2021-01-19 09:04:16'
description: 'Mac版のSpotifyが自動起動されないように設定する'
---

Macを起動するたびに、デスクトップ版の[Spotify](https://www.spotify.com/jp/)が自動起動されて、煩わしかった

## 問題

`システム環境設定 > ユーザーとグループ > ログイン項目` に[Spotify](https://www.spotify.com/jp/)がログイン時の自動起動項目に入っていなかったため、調査をしてみた


## 解決

1. メニューバーの `Spotify > 環境設定` を開く

![Spotify 環境設定](./spotify-preference.png)

2. 設定画面の一番下に `詳細設定を開く` をクリックする

![詳細設定を開く](./preference-window.png)

3. `パソコン起動時に Spotify を自動的に起動する` を `いいえ` にする 

![自動起動を切る](./autolaunch-off.png)

---

これでMacを起動するたびに自動起動されることはない
