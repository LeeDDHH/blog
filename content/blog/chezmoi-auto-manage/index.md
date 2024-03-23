---
title: 【chezmoi】chezmoiで管理するdotfileに変更があったら自動でコミット・プッシュする
date: "2024-03-23T16:56:00.000Z"
description: "chezmoiで管理するdotfileに変更があるたびに手動で管理するのが大変だったため、自動でコミット・プッシュする方法を紹介する"
---

[chezmoi](https://github.com/twpayne/chezmoi)でdotfileを管理しているが、 `chezmoi edit` で修正したファイルを毎回手動でコミット・プッシュするのが面倒だった

そこで、chezmoiの設定ファイルを使って修正したdotfileがあれば、自動でコミット・プッシュする機能があるみたいだったので実際に設定してみた

## 設定ファイルの配置

`chezmoi` 自体の設定は `~/.config/chezmoi/chezmoi.toml` に配置すれば認識してくれる

もし、 `chezmoi.toml` が存在しなければ、直接 `~/.config/chezmoi` に配置する

以下のような注意文が出たら、 `chezmoi init` で設定ファイルを再生成する

```shell
chezmoi: warning: config file template has changed, run chezmoi init to regenerate config file
```

## 設定項目

自動でコミット・プッシュする際に、コミットログをきれいに保ちたいわけではないので、以下のような設定を行う

```shell
[git]
    autoCommit = true
    autoPush = true
```

設定自体は、[Daily operations - chezmoi](https://www.chezmoi.io/user-guide/daily-operations/#automatically-commit-and-push-changes-to-your-repo) に記載されているものになる

このように設定しておくと、 `Update {dotfile名}` という形でコミットメッセージが自動で生成される

## 普段使うとき

`chezmoi` で管理するdotfileとホームディレクトリに配置されるファイルはそれぞれが**独立した実ファイル**なのでホームディレクトリのファイルを編集してもgit管理下では反映されない

そのため、ファイルの編集をする際には以下の二通りのどちらかで編集することで、chezmoiの設定ファイルに変更があった場合に自動でコミット・プッシュされる

### chezmoiで編集する

```shell
# chezmoi配下のdotfileを修正する
chezmoi edit {dotfile名}

# 問題なければ、chezmoi配下のdotfileの内容でホームディレクトリを更新する
chezmoi re-add
```

### ホームディレクトリで編集する

```shell
# dotfileを直接修正する
# chezmoi配下のdotfileに反映する
chezmoi add {dotfile名}

# 問題なければ、chezmoi配下のdotfileの内容でホームディレクトリを更新する
chezmoi re-add
```

## さいごに

上記の設定をすることで、ホームディレクトリで修正した内容を `chezmoi` に反映し忘れることはなくなった

もうちょっと `chezmoi` 配下で管理することに徹する場合、 `chezmoi edit` を shellの　`alias` に設定して運用することもいいのかもしれないと思った

## 参考

- [chezmoi - Yusuke Ebihara](https://www.ebiyuu.com/dotfiles/chezmoi/)
- [Daily operations - chezmoi](https://www.chezmoi.io/user-guide/daily-operations/#pull-the-latest-changes-from-your-repo-and-see-what-would-change-without-actually-applying-the-changes)