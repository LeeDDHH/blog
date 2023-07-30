---
title: 【imagemagick】pngファイルをsvgに変換する
date: "2021-01-25 07:43:22"
description: ""
---

`imagemagick` → コマンド実行時は `convert`
バージョンは `ImageMagick 7.0.10-58`

エラー発生

```
convert: delegate failed `'potrace' --svg --output '%o' '%i'' @ error/delegate.c/InvokeDelegate/1933.
```

調べてみたら、`potrace`をインストールする必要があった
[Convert svg to dxf results in coredump](https://github.com/ImageMagick/ImageMagick/issues/1785)

`potrace`
バージョンは `1.16`

sample

## [Y] やったこと

- sample

## [W] わかったこと

- sample

## [T] 次にやること

- sample
