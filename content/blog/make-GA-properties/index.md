---
title: 【GA】アカウントとプロパティを作成し、UAのトラッキングIDを確認する
date: "2021-02-12 06:30:00"
description: "Google Analytics 4が加わって、新しくなった仕様上でUAのトラッキングIDを確認する手順をまとめる"
---

[YWT ページ](https://ywt.expfrom.me/)のビュー数を計測するため、Google Analytics で新しくアカウントを作ったが、UA のトラッキング ID を閲覧するためのプロパティが生成されず、困っていた

どうやら、[2020 年 10 月 14 日以降に Google Analytics を設定すると「Google Analytics 4」というプロパティが作られる](https://support.google.com/analytics/answer/10220206)みたいで、以前まで覚えていた手順では UA のトラッキング ID が取得できなかった

Google Analytics 4 の仕様が加わり、新しくなった Google Analytics で UA のトラッキング ID を確認するまでの手順をまとめる

## アカウントとプロパティの作成

まず、[Google Analytics](https://analytics.google.com/analytics/web/)のページに遷移し、サインインする

画面が変わったら、 `⚙ > アカウント作成` をクリックする

![create-account](create-account.png)

アカウント作成ページに遷移したら、アカウント名を決める

![account-name](account-name.png)

次に、プロパティの詳細を設定する  
ここではプロパティ名、Google Analytics で取得した情報をレポートしてくれるタイムゾーンなどが指定できる

この時点で、基本的には Google Analytics 4 のみ生成する  
なので、追加で UA（ユニバーサルアナリティクス）も生成するために「**詳細オプションを表示**」をクリックする

![detail-properties-1](detail-properties-1.png)

詳細画面で UA を使うウェブサイトの URL を書き込み、プロパティを生成するオプションが選択できる

選択肢としては、「UA のみ生成」と「Google Analytics 4 と UA を生成」がある  
ここで UA のみを選択してもいいが、今後 UA が廃止されたり Google Analytics 4 の機能が強化されたりする可能性があるため、両方とも生成するように選ぶ

設定が終わったら、**次へ**をクリックする

![detail-properties-2](detail-properties-2.png)

ビジネス情報と Google Analytics 利用規約などをひととおり記入し、設定を終えると指定したアカウント名/プロパティ名（Google Analytics 4）が選ばれた状態になる

UA のプロパティをみるために、**すべてのアカウント**から**設定したアカウント名/UA のプロパティ**のビューを選択する

![select-ua-properties](select-ua-properties.png)

## トラッキング ID を確認する

UA プロパティに切り替わったら、 `⚙ > 管理 > トラッキング情報 > トラッキングコード` の順で項目をクリックする

![select-ua-tracking-id](select-ua-tracking-id.png)

プロパティの詳細画面に切り替わり、トラッキング情報が表示される

オレンジの枠に書かれているのが**トラッキング ID**である

一般的な HTML のページであれば、**グローバル サイトタグ**のスクリプトをコピーして**head**タグに貼り付ければ動作するだろう

![view-ua-tracking-id](view-ua-tracking-id.png)

## さいごに

GTM のときと同様、[Gatsby.JS](https://www.gatsbyjs.com/)とか[Hugo](https://gohugo.io/)とかのようなフレームワークを使う場合は、別途ライブラリを使う可能性があるので、公式ページから探してみるほうがいいと思った
