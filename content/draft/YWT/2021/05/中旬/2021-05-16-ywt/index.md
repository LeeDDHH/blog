---
title: 【YWT】210516
date: "2021-05-16 20:00:00"
description: "デートしたり、ちょっとコーディングしたりした"
---

## [Y] やったこと

- 8.9km 歩いた
- デートをした
- TypeScript の型定義まわりの知識を勉強した

## [W] わかったこと

- 話は通じるものの、何か空回りするような気がした
- TypeScript の自作型定義で `Union` 型で書いたタイプで配列の型指定をしたら VSCode 上でエラーが表示された
  - エラー内容は、 `type 'xxx' is not assignable to parameter of type 'never'`
  - 型定義にオブジェクト配列と空の配列の `Union` 型を定義してたが、なぜエラーが出るのかが分からなかった
  - どうやら、[Union 型に指定した型も含めて、全ての型において条件を満たさないと never 型の警告が出る](https://tech-blog.rakus.co.jp/entry/20201224/typescript#never)ようだ
  - `Union` 型の定義から空の配列を取り消すことで解決できた
- React で複数の `input` を `form` で扱おうとしたら、 `useState` で扱う要素を管理してから、 `submit` 実行時に処理を続ける必要があることがわかった
  - `react-hook-form` を使うほどではなかったので、今回は上の方法で処理をすすめた

## [T] 次にやること

- `alias` を登録するための機構を用意する
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Managing merge conflicts](https://lab.github.com/githubtraining/managing-merge-conflicts)
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js 関連の積読を解消する（69/200）

<!-- https://twitter.com/camomile_cafe/status/1393886174947680264?s=20 -->
