---
title: 210102 ふりかえり
date: "2021-01-02T21:59:59.000Z"
description: "去年と今年とふりかえり"
---

理想に近い休日を過ごした

## [Y] やったこと

- 一日で6km歩いた
- [壁打ちをしたお礼をもらう](https://twitter.com/camomile_cafe/status/1345173403297140739)
  - [UNIXという考え方](https://www.ohmsha.co.jp/book/9784274064067/)
- [ドトールでブランチ](https://twitter.com/camomile_cafe/status/1345182990284935168)
- 知の整理術の「はじめに」を読んだ
  - アウトプットはまだ
- 本屋でほしい本をいくつか見つけた
  - [自分の時間](https://www.amazon.co.jp/dp/4837957641)
  - [仕事は「段取りとスケジュール」で9割決まる](https://www.amazon.co.jp/dp/4756920047)
  - [要領がよくないと思い込んでいる人のための仕事術図鑑](https://www.amazon.co.jp/dp/4801400744)
  - [【ビジュアル完全版】やってはいけない勉強法](https://www.amazon.co.jp/dp/4866631279)
  - [問題解決ラボ 「あったらいいな」をかたちにする「ひらめき」の技術](https://www.amazon.co.jp/dp/4532199689)
  - [自分を鍛える!: 「知的トレーニング」生活の方法](https://www.amazon.co.jp/dp/4837957730)
- [KALDIで福袋を買った](https://twitter.com/camomile_cafe/status/1345202260700090368)
  - 税込み4000円
  - 中身はその倍の金額分の物が入っていた
- 化粧台の整理をした
- 一箇所に束ねて管理していた年金、税金、国民健康保険、iDeCo関連の書類を分類した
- 特定のTwitterユーザーのタイムラインをRSSで取得する方法を変更した
  - [nitter](https://nitter.net/)だと最新のRSSを取得するまで8時間以上かかっているように見える
  - [RSSHub](https://docs.rsshub.app/en/)を使ったほうがTwitterのタイムラインを取得するには適していると判断し、取り方を変更
- [githubのProjectsにブログでやることリストを作成した](https://github.com/LeeDDHH/blog/projects/1)
- Gatsbyでiframelyが使えるように設定をした
- Gatsbyでtwitter埋め込みが使えるように設定をした
- [2020年のふりかえり記事を書いた](https://expfrom.me/2020-review/)
- [2021年の豊富をまとめた記事を書いた](https://expfrom.me/2021-new-goal/)
- はてなブログテクノロジーのRSSをSpreadSheetで受信しはじめた

## [W] わかったこと

- ドトールのアップルパイが大きさの割に腹持ちが良かった
- Gastsbyでiframelyを使うためには、ちょっと工夫が必要だった
  - [iframelyの公式ドキュメント](https://iframely.com/docs/reactjs)によると、Reactが使っている仮想DOMの場合、**HTML要素に対するインラインスクリプトを実行しない**
      - Reactは同期していない仮想DOMに危険な状態を晒していると判断する
  
        ```HTML
        //HTMLのこういうケースではスクリプトを実行しない
        <body>
          <div>
          // 何かの要素
          </div><script src="リモートアドレス"></script> //このケースで、Reactは実行しない
        </body>
        ```

  - つまり、Reactは基本的に**JavaScriptのembed機能（埋め込み機能）がサポートされていない**
  - 本文に書くscriptタグをページが読み込まれるヘッダーに書いておくことで解決できる
      - `react-helmet` のようなヘッダータグを管理するコンポーネントを使ってページのレンダリング時にiframelyのスクリプトを読み込ませるのが解決策の1つ
  - [Takumonさんのブログ](https://takumon.com/iframely)のおかげで助かった

## [T] 次にやること

- Gatsbyでiframelyを使うための設定方法を記事する
- Gatsbyでtwitter埋め込み機能を使うための設定方法を記載する
- Gatsbyに追加する機能をGitHubのprojectsに記載する
- 明日も5km以上歩く
- 明日、Oculus Goを売る
- 知の整理術の1章を読む
- [Udemyの講座](https://www.udemy.com/course/adobe-photoshop-cc-essentials-training-course/)を受講する
