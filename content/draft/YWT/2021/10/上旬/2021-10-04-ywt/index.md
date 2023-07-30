---
title: 【YWT】211004
date: "2021-10-04 19:50:00"
description: "Mac用のインストーラーを作ったり、firebaseのドキュメントを読んだりした"
---

## [Y] やったこと

- 9.2km歩いた
- Mac用のインストーラーを作った
- firebaseの認証用のコードを書いてもIDE上でエラーが発生していたため、調査をした

## [W] わかったこと

- Macのファイルシステムトップレベルから特定のファイルをコピーして配置する必要があるが、Node.js内で `fs` 系の操作をしてもコピーができなかった
  - パーミッションの実行ユーザーが `root wheel` でないと書き込みができなかった
  - `pkgbuild` コマンドでインストーラーを作ったら一発で解決できた
  - ```
    pkgbuild --root コピー元ディレクトリ \
    --identifier 識別子 \
    --install-location コピー先ディレクトリ（/Applicationsとか）
    --version バージョン番号
    パッケージ名
    ```
- zennとqiitaで `next.js + firebase` の認証導入記事を参考にして、コードを書いてもIDE上でエラーが発生していた
  - どうやら、今年の8月末に `Firebase JavaScript SDK` の `v9` が正式リリースされたみたいで、今までの `v8` の書き方はエラーが表示されるらしい
  - https://zenn.dev/hiro__dev/articles/605161cd5a7875
  - 基本的なコードの構成は参考にしつつ、 `v9` に合わせて書き換える必要があるので、ある程度進んだら認証の部分だけアウトプットしたいと思った

## [T] 次にやること

- `alias` を登録するための機構を用意する
- [github learning lab](https://lab.github.com/githubtraining)のチュートリアルをすすめる
  - [Introduction to Design Thinking](https://lab.github.com/githubtraining/introduction-to-design-thinking)
  - [Introduction to Node with Express](https://lab.github.com/everydeveloper/introduction-to-node-with-express)
- node.js関連の積読を解消する（69/200）
- 『［図解］大学4年間の◯◯が10時間でざっと学べる』シリーズを読んでみる
  - [統計学](https://www.amazon.co.jp/dp/B07PXB4NN9)
  - [データサイエンス](https://www.amazon.co.jp/dp/B07XNW3TQM)
  - [経済学](https://www.amazon.co.jp/dp/B01KNLFHH6)
  - [マーケティング](https://www.amazon.co.jp/dp/B07BNC2SV3)
  - [経営学](https://www.amazon.co.jp/dp/B071SKDF3L)
  - [金融学](https://www.amazon.co.jp/dp/B07BB6Z7FW)
- [Lift-the-Flap Computers and Coding](https://www.amazon.co.jp/dp/1409591514)

<!-- https://twitter.com/camomile_cafe/status/1448073753213214729?s=20 -->
