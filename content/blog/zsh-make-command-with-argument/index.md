---
title: 【zsh】関数化したコマンドで、引数を渡して実行する
date: '2021-01-20 14:50:38'
description: 'zshで引数を指定した関すの定義と実行方法について調べた'
---

長くなりがちなコマンドを `zsh` の `alias` に指定することは何回もあったが、引数を渡して使うように関数化したことは滅多になかったので設定の仕方を調べてみた

## 引数を指定したコマンドを作成する

### 基本的な関数の設定

基本的な関数の指定は以下のようにできる

```shell
関数名(){実行したいコマンド}

# example
# 9秒間、処理を遅延する
theworld-dio(){sleep 9}
# 【実行コマンド】
# theworld-dio
# 【実行結果】
# 9秒間、処理を遅延する
```

`.zshrc` へ上記のように記載し、 `source .zshrc` をしてからコマンドの確認ができる

### 引数を指定した関数の設定

引数を渡して使う関数の場合は以下のように設定する

```shell
関数名(){実行したいコマンド $1}

# example
# 引数で指定した数値の秒数間、処理を遅延する
theworld-jotaro(){sleep $1}
# 【実行コマンド】
# theworld-jotaro 11
# 【実行結果】
# 11秒間、処理を遅延する
```

基本的な関数の設定と同様、 `source .zshrc` をしてからコマンドの確認ができる

複数の引数を指定したい場合は以下のように設定できる

```shell
関数名(){実行したいコマンド $1 $2 $3 ... }

# example
# 実行時に渡した第1引数が文字列として表示され、第2引数の数値だけ処理が遅延され、最後に既定の文字列が表示される
time-stop-stand(){echo $1 && sleep $2 && echo Toki Wa Ugokidasu }
# 【実行コマンド】
# time-stop-stand Star\ Platinum\ The\ World! 11
# $1がStar\ Platinum\ The\ World!、$2が11
# 【実行結果】
# Star Platinum The World! が表示される
# 11秒間、処理を遅延する
# Toki Wa Ugokidasu が表示される
```

## さいごに

既定のパスにログを吐き出すとか同じオプションで渡す値だけ違うときとかに重宝して使えそうだと思った