---
title: 【Lighthouse】公開した1枚のウェブページを改善してみた
date: "2021-01-24 20:30:00"
description: "Lighthouseで指摘されたことを直したら、100点が取れた"
---

Webデザインの勉強も兼ねて[一枚のウェブページ](https://kind-engelbart-db1cd7.netlify.app/)を作った

ついでにChromeの[Lighthouse](https://developers.google.com/web/tools/lighthouse)を使ってページの監査をしてみたら、一部改善点があった

今回はウェブページを公開してから2点指摘されたことを改善した

## 表示する画像の最適化

まず、Lighthouseから表示している画像の読み込みで指摘を受けた  
[Serve images in next-gen formats](https://web.dev/uses-webp-images/?utm_source=lighthouse&utm_medium=devtools)

要するに、 `png` や `jpeg` 形式の画像データを使うのではなく、イメージのロードが早くなる `webp` 形式のデータを使おうという指摘だった

`webp` といえば、IE以外のブラウザでほとんど対応されている画像形式らしい  
[Can I use... Support tables for HTML5, CSS3, etc | webp](https://caniuse.com/?search=webp)

`png` や `jpeg` から `webp` へ変換する方法は簡単で、 `cwebp` というコマンドを使うことで、変換ができる  
[Creating WebP Images with the Command Line](https://web.dev/codelab-serve-images-webp/)

基本的には以下のように使えば変換ができる

```shell
cwebp -q 変換後の画像のクォリティー 変換する画像のパス -o 変換後の画像のパス

# example
cwebp -q 50 ./img/test.png -o ./img/test.webp
```

変換してみた感想は、クォリティーを `50` に指定しても目では画像の劣化が感じられなかった

## サイトの概要を設定

SEO関連でサイトの `description` が設定されておらず、キーワードに合わせた検索エンジンの結果に表示されやすくなるために設定した  
[Document does not have a meta description](https://web.dev/meta-description/?utm_source=lighthouse&utm_medium=devtools)

```html
<meta
  name="description"
  content="夜にだけ開くカモカフェ。開店日はいまのところ、未定です"
/>
```

## 改善した結果

ここまでの修正を反映し、再度[Lighthouse](https://developers.google.com/web/tools/lighthouse)をかけてみたら、見事に100点が取れた

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">なるほど、lighthouseで指摘されたことを直したら、100点になった<br>PWAはそもそも対応してないから0だけど <a href="https://t.co/Kkv9cMj42L">pic.twitter.com/Kkv9cMj42L</a></p>&mdash; カモ@1月はGatsbyブログをつくる生活 (@camomile_cafe) <a href="https://twitter.com/camomile_cafe/status/1353199873344978944?ref_src=twsrc%5Etfw">January 24, 2021</a></blockquote>

今後、他にも指摘される点があるたびにちょっとずつ改善していきたい
