---
title: 【GA、GTM】トリガーを設定し、ページビューを測定する
date: "2021-02-14 20:45:00"
description: "Google Tag ManagerとGoogle Analyticsを組み合わせ、ページビューのトリガーを設定する"
---

以前の記事で以下の2つの設定を行う方法を紹介した

<p>
<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://expfrom.me/make-gtm-container/" data-iframely-url="//cdn.iframe.ly/1cWYZXm"></a></div></div>
</p>

<p>
<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://expfrom.me/make-ga-properties/" data-iframely-url="//cdn.iframe.ly/R4ybyiJ"></a></div></div>
</p>

GTMとGAを使って実際にイベントトラッキングをするため、以下の設定をしたため、書き残す

- **トリガーの作成**
- **トラッキングIDの設定**
- **タグの作成**
- **GTMコンテナーの状態を公開する**

## トリガーを作成する

設定をしたいコンテナーに入ったら、 `Triggers > New` をクリックする

![trigger-add](trigger-add.png)

画面が変わったら、**トリガーの名前**を設定する  
設定したら、**鉛筆マーク**をクリックする

![trigger-configuration](trigger-configuration.png)

トリガーの種類を選択する画面に変わったら、取りたいイベントの種類を選択する  
今回の例では、ページビューのカウントを取りたいため、**ページビュー**を選択した

![trigger-type](trigger-type.png)

選択した種類とトリガーの名前を確認し、問題なければ**Save**をクリックする

![trigger-save](trigger-save.png)

正常に設定できたら、画像のように新しいトリガーが生成される

![trigger-save-done](trigger-save-done.png)

## トラッキングIDを変数として作成する

次に、 `Variables > New` をクリックする

![variables-add](variables-add.png)

画面が変わったら、**変数の名前**を設定する  
設定したら、**鉛筆マーク**をクリックする

![variables-configuration](variables-configuration.png)

変数の種類を選択する画面に変わったら、設定したい変数の種類を選択する  
今回の例では、Google AnalyticsのトラッキングIDを設定したいため、**Google アナリティクス設定**を選択した

![variables-type](variables-type.png)

選択後、画面が切り替わったら、トラッキングIDに**UAのトラッキングID**を設定する

選択した種類と変数の名前を確認し、問題なければ**Save**をクリックする

![variables-save](variables-save.png)

正常に設定できたら、画像のように新しい変数が生成される

![variables-save-done](variables-save-done.png)

## タグを作成する

次に、設定したトリガーと変数を用いて、タグを設定するため、 `Tags > New` をクリックする

![tag-add](tag-add.png)

画面が変わったら、**タグの名前**を設定する  
設定したら、 `Tag Configuration` の **鉛筆マーク**をクリックする

![tag-configuration-1](tag-configuration-1.png)

画面が変わったら、設定したいタグの種類を選択する  
今回の例では、UAのトラッキングIDを使ってGoogle Analyticsにイベントを送りたかったため、**Google アナリティクス:ユニバーサル アナリティクス**を選択した

![tag-type](tag-type.png)

選択後、画面が切り替わったら、**トラッキングタイプ**と**Google アナリティクス設定**の値を選択する  
**トラッキングタイプ**は、**ページビュー**を選び、**Google アナリティクス設定**は、変数として設定した値を選ぶ

![tag-configuration-2](tag-configuration-2.png)

もし、変数としてUAのトラッキングIDを管理したくなかったり、何かの事情で変数として指定したUAのトラッキングIDは残しつつ新たなトラッキングIDを指定したりする必要があるとする

その場合は、**このタグでオーバーライド設定を有効にする**をチェックして、別途UAのトラッキングIDを指定する

![tag-configuration-3](tag-configuration-3.png)

`Tag Configuration` を設定をしたら、 `Triggering` の **鉛筆マーク**をクリックする

![tag-configuration-4](tag-configuration-4.png)

画面が変わったら、トリガーとして設定した値を選ぶ

![tag-configuration-5](tag-configuration-5.png)

`Tag Configuration` 、 `Triggering` 、タグの名前を確認し、問題なければ**Save**をクリックする

![tag-save](tag-save.png)

正常に設定できたら、画像のように新しいタグが生成される

![tag-save-done](tag-save-done.png)

## GTMコンテナーの状態を公開する

設定した**トリガー**、**変数**、**タグ**をもとに、サイト側でイベントを発火させるため、公開作業をする

`Workspace` 画面で `Workspace Changes` に今回の追加項目が入っていることを確認する  
問題なければ、**Submit**をクリックする

![publish-submit](publish-submit.png)

画面が切り替わったら、公開するGTMコンテナーの**バージョン名**と**詳細説明**を記載する

問題なければ、**Publish**をクリックする

![publish-add-version](publish-add-version.png)

公開後の結果画面が表示されたら**Workspace**をクリックし、画面を移動する

![publish-result](publish-result.png)

`Workspace` 画面で公開したバージョンに切り替わったら、すべての設定は完了になる

![publish-done](publish-done.png)

## おまけ

設定が終わり、とくに何もなければGTMのタグは正常にイベント発火をするが、念のためGTMを設定したページで最終確認もしておく

タグが正しく発火しているかどうかチェックするためには、以下のGoogleChromeの拡張機能が必要となるので、インストールする

<p>
<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk" data-iframely-url="//cdn.iframe.ly/fcoh2Ha"></a></div></div>
</p>

確認するサイトで拡張機能をクリックすると、以下のような画面が表示される  
必要であれば、チェック項目をへらしてから**Done**をクリックする

![extension-first-view](extension-first-view.png)

画面が変わり、**Enable**をクリックする

GTMコンテナーID、UAのトラッキングIDが表示されなければ、一度拡張機能の画面を閉じて、再度開く

![extension-enable](extension-enable.png)

このような画面になって、 `Google Analytics` と `Google Tag Manager` で指定したIDが表示されれば、正常にイベントが取れている

![extension-done](extension-done.png)

## さいごに

サイトを公開するたび、`Google Analytics` と `Google Tag Manager` の設定でいろんなページを調べていたが、しばらくはこの準を見ながら設定することでなんとかなりそうな気がした
