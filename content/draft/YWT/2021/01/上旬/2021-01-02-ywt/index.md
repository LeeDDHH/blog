---
title: 【YWT】210102
date: "2021-01-02T21:59:59.000Z"
description: "去年と今年とふりかえり"
---

理想に近い休日を過ごした

## [Y] やったこと

- 一日で 6km 歩いた
- [壁打ちをしたお礼をもらう](https://twitter.com/camomile_cafe/status/1345173403297140739)
  - [UNIX という考え方](https://www.ohmsha.co.jp/book/9784274064067/)
- [ドトールでブランチ](https://twitter.com/camomile_cafe/status/1345182990284935168)
- 知の整理術の「はじめに」を読んだ
  - アウトプットはまだ
- 本屋でほしい本をいくつか見つけた
  - [自分の時間](https://www.amazon.co.jp/dp/4837957641)
  - [仕事は「段取りとスケジュール」で 9 割決まる](https://www.amazon.co.jp/dp/4756920047)
  - [要領がよくないと思い込んでいる人のための仕事術図鑑](https://www.amazon.co.jp/dp/4801400744)
  - [【ビジュアル完全版】やってはいけない勉強法](https://www.amazon.co.jp/dp/4866631279)
  - [問題解決ラボ 「あったらいいな」をかたちにする「ひらめき」の技術](https://www.amazon.co.jp/dp/4532199689)
  - [自分を鍛える!: 「知的トレーニング」生活の方法](https://www.amazon.co.jp/dp/4837957730)
- [KALDI で福袋を買った](https://twitter.com/camomile_cafe/status/1345202260700090368)
  - 税込み 4000 円
  - 中身はその倍の金額分の物が入っていた
- 化粧台の整理をした
- 一箇所に束ねて管理していた年金、税金、国民健康保険、iDeCo 関連の書類を分類した
- 特定の Twitter ユーザーのタイムラインを RSS で取得する方法を変更した
  - [nitter](https://nitter.net/)だと最新の RSS を取得するまで 8 時間以上かかっているように見える
  - [RSSHub](https://docs.rsshub.app/en/)を使ったほうが Twitter のタイムラインを取得するには適していると判断し、取り方を変更
- [github の Projects にブログでやることリストを作成した](https://github.com/LeeDDHH/blog/projects/1)
- Gatsby で iframely が使えるように設定をした
- Gatsby で twitter 埋め込みが使えるように設定をした
- [2020 年のふりかえり記事を書いた](https://expfrom.me/2020-review/)
- [2021 年の豊富をまとめた記事を書いた](https://expfrom.me/2021-new-goal/)
- はてなブログテクノロジーの RSS を SpreadSheet で受信しはじめた

## [W] わかったこと

- ドトールのアップルパイが大きさの割に腹持ちが良かった
- Gastsby で iframely を使うためには、ちょっと工夫が必要だった

  - [iframely の公式ドキュメント](https://iframely.com/docs/reactjs)によると、React が使っている仮想 DOM の場合、**HTML 要素に対するインラインスクリプトを実行しない**

    - React は同期していない仮想 DOM に危険な状態を晒していると判断する

      ```HTML
      //HTMLのこういうケースではスクリプトを実行しない
      <body>
        <div>
        // 何かの要素
        </div><script src="リモートアドレス"></script> //このケースで、Reactは実行しない
      </body>
      ```

  - つまり、React は基本的に**JavaScript の embed 機能（埋め込み機能）がサポートされていない**
  - 本文に書く script タグをページが読み込まれるヘッダーに書いておくことで解決できる
    - `react-helmet` のようなヘッダータグを管理するコンポーネントを使ってページのレンダリング時に iframely のスクリプトを読み込ませるのが解決策の 1 つ
  - [Takumon さんのブログ](https://takumon.com/iframely)のおかげで助かった

## [T] 次にやること

- Gatsby で iframely を使うための設定方法を記事する
- Gatsby で twitter 埋め込み機能を使うための設定方法を記載する
- Gatsby に追加する機能を GitHub の projects に記載する
- 明日も 5km 以上歩く
- 明日、Oculus Go を売る
- 知の整理術の 1 章を読む
- [Udemy の講座](https://www.udemy.com/course/adobe-photoshop-cc-essentials-training-course/)を受講する
