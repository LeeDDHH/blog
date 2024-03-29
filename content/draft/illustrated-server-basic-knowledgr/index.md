# 図解サーバー ~仕事で使える基礎の知識~

## 1 章 ~サーバーは何をしているのか~

### サーバーはサービスを提供する

- **他のコンピューターからの要求に応える**のがサーバーの役目
  - サービスを提供するコンピューター
  - 対象は、ネットワークにつながっているほかのコンピューター（クライアント）
  - サーバーがどんなサービスを提供するかはサーバーごとに異なるので、「サーバー」の前にサービスの名前をつけて区別する
    - メールの送受信サービスを提供するメールサーバー
    - インターネットのウェブ閲覧に関するサービスを提供する web サーバー
  - 受けたいサービスに応じて別々のサーバーをクライアントが利用する
  - 言葉の響きとして難しく感じるかもしれないが、**サーバーが提供するサービスは身近なもの**
  - サービスに対して、提供するサーバー側の視点に切り替えるのがサーバーを理解する第一歩

### サーバーはネットワークを管理する

- サーバーの主な仕事
  - クライアントにさまざまなサービスを提供する
  - クライアントがネットワークを安全で快適に使用できるように管理する
    - ネットワークがきちんと機能するように設定する
    - ネットワークの使用状況を監視し、記録する
  - ファイル共有などで使用しているハードディスクをバックアップする
  - クライアントの管理
    - ネットワークに参加しているクライアントを管理する
    - クライアントごとに利用できるサービスを管理する

### サーバーはなんのためにあるのか

- クライアント/サーバー型で構築することで得られるメリット
  - リソースを集中管理できる
  - 常時稼働で安定したサービスを提供できる
  - P2P 型は構築は楽でも、構築後の運用・管理で苦労することが多い
    - 安定した　サービスを提供する必要がある場合、クライアント/サーバー型のネットワークを選ぶべき
    - 言い換えれば、P2P では得られないことがサーバーを設けることで得られる

### インターネット関連のサービス

- Web サービス
- メールサービス
- SMTP サーバー
- POP3 サーバー
- FTP サービス
- DNS サービス

### LAN 関連のサービス

- ファイル共有サービス
- プリンター共有サービス
- DHCP サービス
  - データのやり取りに必要な情報を自動的にクライアントに提供するサービス
- DNS サービス

### サーバー構築に必要なソフトウェア

- サーバー用の OS
  - Windows 系
    - Windows Server
  - UNIX 系
    - FreeBSD
    - OpenBSD
    - Linux
    - Solaris
    - AIX
    - HP-UX
    - macOSX Server
- サービスを提供するサーバーソフト
  - Web サーバーソフト
  - メールサーバーソフト
  - など

### サーバーを管理する

- ネットワーク管理者の役割
  - ネットワーク構築
    - ネットワークの設計
    - 必要なハードウェアやソフトウェアの準備
    - ケーブルの敷設
    - サーバーの設定
    - クライアントの設定
    - などなど
  - サービスの導入
    - 提供したいサービスに応じてソフトウェアを用意して設定
  - ネットワークの管理
    - ディレクトリサービスでクライアントを管理
    - ネットワークが正常に機能するように使用状況を監視・記録
    - 不具合の対処
  - ソフトウェアの管理
    - サーバー用の OS、サービスを提供するソフトウェアを管理
    - バージョンアップ
    - 修正プログラム（バッチ）の適用
    - クライアントのソフトウェアの管理
  - バックアップ
    - データの定期的なバックアップ
    - 不具合発生時にバックアップしておいたデータに戻す

## 2 章 ~ネットワークの基礎を知っておこう~

### ネットワークに繋がっているとはどういうことか？

- 単にケーブルでコンピューターと機器を接続しても、ネットワークで提供されているサービスを利用できなければ、つながったとは言えない
- サービスを利用できる　＝　サーバーやネットワーク機器とクライアントが問題なくデータをやり取りしている
- ネットワークに繋がっていることは、**他のコンピューターや機器とデータをやり取りできる**こと
- プロトコール
  - ネットワークでやり取りするための決まりごと
  - 同じプロトコールに対応していれば、異なる OS、異なるメーカーのコンピューターや機器でも問題なくデータをやり取りすることができる

### データはパケットでやり取りされる

- データには、データをパケットに分割する際、またデータをやり取りする際に、必要な情報がプロトコルによって付け加えられる
  - ヘッダー（データの先頭につける情報）
  - トレーラー（データの末尾につける情報）
- パケットは総称
  - 他にも、**データグラム**、**セグメント**、**フレーム**などと区別することもある
  - データの単位を PDU（プロトコル・データ・ユニット）と言う

### IP アドレスでコンピューターや機器を特定する

- IP アドレス

  - ネットワークの中の住所のようなもの
  - IP プロトコルがコンピューターや機器を特定するために使う

- **ネットワークアドレス**と**ホストアドレス**

  - ネットワークアドレス（ネットワークを識別する）
  - ホストアドレス（個々のコンピューターや機器を識別する）

- 用途や使用するネットワークの規模に応じて、クラスが分けられる

  - クラス A
    - ネットワークアドレス：8 ビット
    - ホストアドレス：24 ビット
    - 大規模
    - `10.0.0.0` ~ `10.255.255.255`
  - クラス B
    - ネットワークアドレス：16 ビット
    - ホストアドレス：16 ビット
    - 中規模
    - `172.16.0.0` ~ `172.31.255.255`
  - クラス C
    - ネットワークアドレス：24 ビット
    - ホストアドレス：8 ビット
    - 小規模
    - `192.168.0.0` ~ `192.168.255.255`
  - クラス D
    - マルチキャストアドレス
  - クラス E
    - 実験用アドレス

- ネットワークアドレスを表す部分が少ないと、表せるネットワーク数は少ない

  - その分、ホストアドレスを表す部分が大きいので、1 つのネットワークに多くのコンピューターや機器を接続できる

- ホストアドレス部分が 2 進数ですべて 1 のアドレスは**ブロードキャストアドレス**

  - ネットワークに属するすべてのコンピューターや機器に対して一斉にデータが送れる

- マルチキャストアドレスは、ネットワークの中の特定のグループのコンピューターや機器に対して一斉にデータが送れる

### グローバル IP とプライベート IP

- **プライベート IP**

  - 1 つのネットワークの中だけで通用する IP アドレス
  - ネットワーク管理者が自由につけてよいアドレス

- **グローバル IP**

  - インターネットデ使われる IP アドレス
  - ICANN という組織が管理をしている
  - 日本では、JPNIC が管理業務をしている
    - 一般的にプロバイダーが申請業務を行い、プロバイダーが取得したグローバル IP を借りることで利用する

- 企業ネットワーク

  - ネットワークの中のコンピューターや機器にはプライベート IP をつけるのが一般的
  - 直接インターネットに接続し、データをやり取りする役目を持つコンピューターや機器（ゲートウェイ）にだけグローバル IP をつける

- 家庭
  - ブロードバンドルーターにグローバル IP
    - PC を直接インターネットに接続している場合は、その PC にグローバル IP がつく
  - 個々の PC や機器にプライベート IP をつける

### サブネッティングと CIDR

- クラスフル
  - IP アドレスをネットワークアドレスとホストアドレスに分ける方法
  - 1 つのネットワークで使えるホストアドレスの数が決まっている
    - たとえば、300 台のコンピューターや機器をつないだネットワークを 1 つ作りたいとする
    - クラス C では、24 ビットのネットワークアドレスを使って、8 ビットのホストアドレスを使うので、1 つのネットワークで 300 台のコンピューターや機器をつなげるのができない
    - クラス B では、16 ビットのネットワークアドレスを使って、16 ビットのホストアドレスを使うので、300 台のコンピューターや機器をつなげると膨大なホストアドレスの無駄が発生する
  - ここで、**サブネッティング**という方法が生まれる
    - IP アドレスの 32 ビットのうち、先頭からどこまでがネットワークアドレスなのかを表す**サブネットマスク**と IP アドレスを併用することで、ネットワークアドレスとホストアドレスの数を調整する
    - 調整された分で表せるようになったネットワークは**サブネットワーク**
- CIDR
  - クラスの概念をなくした考え方
  - **クラスレス**
  - 全体が 32 ビットのうち、先頭からどこまでがネットワークアドレスなのかを IP アドレスの後ろに「/」をつけて、表記する
    - **CIDR 表記**

### ポート番号

- 1 台のコンピューターで同時に複数のサービスを利用できるようにする
- トランスポート層の TCP・UDP プロトコルがつけるヘッダーにポート番号の情報が含まれる
- 設定できるポート番号
  - `0~1023`
    - ウェルノウンポート番号
    - IANA という団体が管理する
  - `1024~49151`
    - 予約済みポート番号
    - IANA という団体が登録を受け付けて管理する
  - `49152~65535`
    - 動的・プライベートポート番号

### MAC アドレスとは

- ネットワークインターフェイス層のプロトコルがデータをやり取りする相手と自分自身を識別するために使う**物理アドレス**
- ネットワークインターフェイス層に**Ethernet**を採用している場合、物理アドレスは**MAC アドレス**になる
- IP アドレスは最終的にデータをやり取りする相手に届くまで変わらない
  - MAC アドレスの情報は、「次に送る」相手に届いたら、そこからさらに「次に送る」相手の MAC アドレスに書き換えられる
- インターネット層の IP アドレスから MAC アドレスを調べるプロトコル
  - **ARP プロトコル**
- MAC アドレスから IP アドレスを調べるプロトコル
  - **RARP プロトコル**

### ルーターの役割

- ゲートウェイとして機能して、データの道筋を選択する
- ルーターは**ゲートウェイ**と**ルーティング**という機能を持っている
- **ゲートウェイ**
  - ほかのネットワークへの出入り口として機能するコンピューターや機器
- **ルーティング**
  - データの道筋（ルート）を選択する機能
  - TCP/IP では IP プロトコルが担当する
- **ルーティングテーブル**
  - ほかのネットワークにデータを送信する際、どのルーターに送るかを決めている情報

### NAT、NAPT の仕組み

- **NAT**
  - プライベート IP とグローバル IP を変換する仕組み
  - プライベート IP を持つコンピューターがインターネットにあるコンピューターとデータをやり取りするとき、**IP パケットに送信側の IP アドレスとして、送信側のコンピューターのプライベート IP が記載される**
  - そこで、**ゲートウェイ**が**IP パケットに記載されているプライベート IP をゲートウェイに付けられたグローバル IP に書き換えて**送る
  - 受信側は、届いた IP パケットのヘッダーを参照し s て送信側アドレス（ゲートウェイのグローバル IP）を宛先としてデータを送る
  - データを受け取ったゲートウェイは、どのプライベート IP と変換したかの記録を参照して、本来の受け取り先のコンピューターにデータを送る
- **NAPT**
  - NAT では、グローバル IP とプライベート IP の組み合わせを**1 通りしか作れない**
  - 同時に行いたいデータのやり取り野数だけグローバル IP を用意しなければならない
  - そこで、IP アドレスにポート番号を組み合わせた NAPT（**IP マスカレード**）という仕組みを使って、複数のコンピューターでデータをやり取りできるようになる
- グローバル IP とポート番号を組み合わせる NAPT が一般的に使われる

## 3 章 ~さまざまなサーバーの働き~

### DHCP サーバーの働き

- データのやり取りに必要な情報を自動的にクライアントに配布する
- TCP/IP ネットワークでは、ネットワークに参加するすべてのコンピューターや機器に IP アドレスをつける必要がある
  - 直接指定もできるが、複数台あった場合、手動でつけるのは現実的ではない
- そこで、IP アドレスやデータのやり取りに必要な情報を自動的に配布する DHCP サービスを利用する
- DHCP サーバーがクライアントに配布するもの
  - IP アドレス
  - サブネットマスク
  - デフォルトゲートウェイ（外部ネットワークとの出入り口）の IP アドレス
  - などの情報
- クライアントの OS で「DHCP サービスを利用する」という設定をするだけで、DHCP サーバーから配布された情報が自動的に設定される
- 新しいクライアントがネットワークに参加したら、DHCP サーバーは範囲内の IP アドレスから使われていないものを選んで配布する
  - IP アドレスには有効期限があって、有効期限が来たら IP アドレスを回収して新しい IP アドレスを設定する
  - IP アドレスを有効に活用するための仕組み

### DNS サーバーの働き

- グローバル IP とドメイン名を変換するサービスを提供する
- DNS は、**ルートサーバー**という DNS サーバーを頂点とした階層構造をとっている
- クライアントがとあるドメインに対応する対応するグローバル IP を調べたいとする
  - まず、クライアントは**リゾルバー**というソフトを使って、クライアントが属するネットワークに配布された DNS サーバーへアクセスする
  - クライアントが最初にアクセスする自分のネットワークに配置された DNS サーバー（**フルサービスリゾルバー**もしくは**DNS キャッシュサーバー**）は、**クライアントの要求に応えてグローバル IP を調べる**役割を持つ
  - フルサービスリゾルバーがルートサーバーにアクセスし、クライアントが要求したドメインのグローバル IP を尋ねる
  - ルートサーバーでは、すべてのグローバル IP ではなく、**トップレベルドメイン**を管理している DNS サーバーを教える
  - その DNS サーバーに再度、クライアントが要求したドメインのグローバル IP を尋ねる
  - 徐々にドメインレベルごとの問い合わせをすることで、最終的にクライアントが要求したドメインのグローバル IP を管理する DNS サーバーまでたどり着いたら、グローバル IP を教えてもらう
  - クライアントはそのグローバル IP をもとにデータのやり取りをはじめる

### ウェブサーバーの働き

- クライアントから要求されたデータを送るというシンプルな仕組み
  - ウェブサーバーはクライアントからの要求を受け取って、データを返す
- **URI**(Uniform Resource Identifier)

  - クライアントがデータを要求するときに使う
  - クライアントのブラウザは[スキーム](https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#scheme_or_protocol)を見て、どのような方法でデータをやり取りするかを判断する

- スキームに関して
  - [スキームまたはプロトコル](https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#scheme_or_protocol)
  - [データ URL](https://developer.mozilla.org/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - [スキームのマッチパターン](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
  - [カスタムスキームの例](https://developer.mozilla.org/ja/docs/Web/API/Navigator/registerProtocolHandler#permitted_schemes)

### ウェブサーバーでプログラムを動作させる

- ほかのプログラムと連携して動的にウェブページを生成する
- CGI
  - ウェブサーバーソフトとは別に、処理用のプログラムを用意し、連携させる仕組み
  - プログラム言語によっては、そのプログラムを処理するためのソフトが必要な場合もある

## 5 章 ~インターネットに公開するサーバーを構築する~

### ウェブサイトを公開する環境を整える

- 必要な準備
  - ドメイン名の取得
  - 回線設備とドメイン名に対応するグローバル IP を用意
    - クラウドサービスでどうにかなるケースもある
  - DNS サーバーの構築
    - クラウドサービスでどうにかなるケースもある
  - ウェブサーバーの構築
    - クラウドサービスでどうにかなるケースもある
  - 提供するウェブサービスに応じたサーバーなどを構築

### 取得したドメイン名を DNS サーバーに登録

- DNS サーバーの設定で登場する用語
- DNS サーバーの役割は、フルサービスリゾルバーの問い合わせに応じて情報を提供すること
  - フルサービスリゾルバーの問い合わせを受ける側の DNS サーバーを**コンテンツサーバー**と言う
- 正引き
  - ドメイン名から、対応する IP アドレスを取得する
- 逆引き
  - IP アドレスから、対応するドメイン名を取得する
- ゾーン
  - コンテンツサーバーはルートサーバーを頂点とした階層構造を分担して情報を管理する
  - 1 つのコンテンツサーバーが管理している情報の範囲が**ゾーン**
- レコード
  - [dns レコードの種類について](https://gist.github.com/LeeDDHH/aa2cf5e0fd14b6357db6235180ad334b)

## 6 章 ~サーバーの管理と運用~

### サーバーをリモートで管理する

- クライアントからサーバーを管理するツールを活用する
- リモートデスクトップのようなソフトを使ってネットワーク経由で他の PC を遠隔操作できる
- リモートサーバー管理ツールを使うと、複数のクライアントから遠隔でサーバーを使う事ができる

### ユーザーの管理

- ユーザーをグループに分けて管理位の効率をアップさせる
- 複数のユーザーを 1 つのグループにまとめることで読み込み/書き込み/実行の権限をコントロールできる

### パスワードとアクセス権の管理

- グループごとに適切なアクセス権を設定し、記録を取る
- アクセス権を設定すると同時に、誰がいつどのファイルにアクセスしたかを履歴（ログ）に保存しておく必要がある
  - 不正や問題が起こったときの原因を追求するときに有効な情報になる

### ネットワークの監視

- ping
  - 特定のネットワーク機器に信号を送って、接続が正常かどうかを確認する
- traceroute（tracert）
  - 指定したホストまでのネットワークの経路をリストで表示する
- ipconfig
  - ネットワークの設定情報を調べる
- nslookup
  - DNS サーバーの状態を調べて、正常に動いているかを確認する
  - 特定の Web サイトに接続されにくい時にも使う
- netstat
  - ネットワークの統計情報や状態を確認する
  - 接続先のホスト名を調べたり、エラーパケットが発生していないかもチェックできる

## 7 章 ~セキュリティ管理~

### セキュリティ対策の重要性

- ネットワークの外側の危険
  - 不正侵入
  - ウイルス
  - 情報漏えい
  - サーバーのセエって嫌セキュリティ対策ソフトの導入などで対処できる
- ネットワークの内側の対策
  - 情報漏えい
  - ID/PW の管理やアクセス権管理の徹底やセキュリティ向上のためのルールづくりなどである程度対処できる

### 企業ネットワークでのセキュリティ対策

- ネットワーク内のコンピューターと情報を守る
- 不正侵入に備えてファイアウォールを設置する
  - ゲートウェイにファイアウォールを設置する
  - IDS（侵入検知システム）を併用して、不審なアクセスを検知して対処する
- ウイルス対策ソフトを導入する
  - 記録媒体で持ち込まれるウイルスに備えて、各クライアントにウイルス対策ソフトを導入すれば、さらに安全
- サーバーやルーターのアップデート、設定に気を配る
  - OS、ソフトのアップデートを行い、不要なサービスを停止する
- アクセス権、ID/PW 管理を徹底する
  - 機密情報が含まれるデータに対して誰がアクセスできるのかを設定、管理する
  - サーバー、ネットワーク機器の ID/PW をはじめ、クライアントの ID/PW 管理を行う

### ファイアウォールでネットワークを守る

- ゲートウェイでやり取りするデータを監視して、安全と判断したデータだけを通す
  - この仕組みが**ファイアウォール**
- どのデータを許可するか基準を決める
  - 不正侵入を試みる悪意のあるデータは遮断する
  - 企業ネットワークの場合、企業が定めるセキュリティの基本方針（**セキュリティポリシー**）に従う
  - 業務に関係の内ネットワークサービスのデータは許可しない
  - など
- ファイアウォール設置時に選べる選択肢
  - ファイアウォール機能を備えたルーターを使う
  - サーバーにファイアウォールのソフトをインストールする
  - ファイアウォール専用に作られたサーバー（**アプライアンスサーバー**）を使う
    - **統合脅威管理（UTM）**に対応したケースもある

### ファイアウォールの種類

- パケットフィルタリング
  - ネットワーク層（インターネット層）で作られたパケットのヘッダーを見て、IP アドレスやポート番号などの情報をもとに判断する
  - 指しているサーバーとポート番号に違いがあるパケットを破棄する
  - **ステートフルパケットインスペクション**も普及している
- サーキットレベルゲートウェイ
  - プロキシーの仕組みを使ったファイアウォール
  - 汎用プロキシー
  - トランスポート層で行われるデータのやり取りの手順まで監視する
- アプリケーションレベルゲートウェイ
  - プロキシーの仕組みを使ったファイアウォール
  - 単にプロキシーとも呼ばれる
  - アプリケーション層まで（データのやり取りのすべて）を監視する

### 判断基準に応じたファイアウォールを選ぶ

- パケットフィルタリング
  - ルーターに組み込まれることが多く、導入しやすい
  - 小規模なネットワークの場合、単体で使われるケースが多く見られる
  - IP パケットのヘッダー情報のみを調べているので、処理速度が早い
  - 他のファイアウォールと比べるとセキュリティ効果は劣る
- サーキットレベルゲートウェイ
  - プロトコルごとにソフトウェアを用意する必要はない
  - データの中身までチェックはできない
  - クライアントの代理としてデータをやり取りするので、ネットワーク内部の構成を知られない効果はある
- アプリケーションレベルゲートウェイ
  - データの中身まで調べられる
  - アプリケーションのプロトコルごとにソフトウェアが必要になる
  - 処理速度が遅く、データが渋滞を起こす場所になりやすい

### インターネットに公開するサーバーは DMZ に設置する

- インターネットに公開しないサーバーやクライアントと分ける
- インターネットに公開するサーバーを設置していないネットワークの場合、インターネットからのリクエストがネットワークに届くことはない
  - なので、ファイアウォールでそのようなデータはすべて遮断するように設定する
- しかし、インターネットに公開するサーバーを設置しているネットワークの場合、インターネット側からのリクエストを受け入れる必要がある
  - ファイアウォールで受け入れる設定をすればいいが、インターネットに公開していないサーバーやクライアントへのリクエストも受け入れることになるので危険
  - そして、インターネットに公開するサーバーは不正侵入の危険が非常に高い
- 同じネットワークにインターネットに公開する/しないサーバーやクライアントが混在すると、インターネットに公開するサーバーに侵入され、ほかのサーバーやクライアントに被害が及ぶ危険もある
- インターネットに公開するサーバーとしないサーバーやクライアントを分けたネットワークを構築するネットワーク領域を**DMZ**と呼ぶ
  - 一般的に、3 つのネットワークインターフェイスを持つファイアウォールを設置し、**インターネットに公開する DMZ**と**公開しない内部のネットワーク**に分ける
  - より安全性を考えて 2 つのファイアウォールを設置して、ファイアウォールとファイアウォールの間に DMZ を作る方法もある
- DMZ には**インターネットの側からリクエストを受け入れる必要があるサーバーのみ**を設置する
  - web サーバーと連携して動作する DB サーバー派直接インターネット側からのリクエストを受け入れることはないので、内部のネットワークに設置する

### ファイアウォールの構築

- ほとんどのサーバー OS には、外部からの侵入や攻撃を防止するためのファイアウォール機能が付属している
- ファイアウォールの特徴
  - ネットワークの外部から、**内部の PC を見えなくする**
  - ネットワーク内から外部へのデータは通すが、外部からネットワーク内の PC へのアクセスをシャットアウトする
  - など
- **NAT**機能を使って、侵入経路を塞ぐ

### SSL を導入する

- 安全のために大事なデータは**暗号化**して送ることにする
- **SSL（Secure Socket Layer）**
  - 公開鍵暗号化方式
