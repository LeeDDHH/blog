# 入門Node.jsプログラミング

## 序文

### node.jsとは何か？

- 非同期でイベント駆動のjavascriptランタイム
- javascriptのコードを読んで解釈するインタープリター
- javascriptのコードを読んで、そのコードを逐次実行していく
- V8 JavaScriptエンジンを使うことで、webページだけではンク、サーバー上でアプリケーション全体を構築するのに使える
- javascriptアプリケーションが起動されると、全部のコードがメモリにロードされる
- すべてのコードブロックが即座に実行されなくても、そのアプリケーションで使えるようになる

### 本書の目的

- node.jsを通じてweb開発をお教えすること
  - 動的なページを作成する方法
  - データベース接続の方法
  - ユーザーのアクティビティをアプリケーションで保存する方法
  - アプリケーションの構築方法

---

## lesson 0

### node.jsを理解する

- javascriptはクライアントサイドのスクリプト言語から、データ管理のためのサーバーサイドプログラミング言語へシフト

#### クライアントサイド/サーバーサイド

- クライアントサイド
  - ユーザーがwebブラウザで見るものを実装するコード
  - webページがロードされるときのユーザー経験を活性化するjavascriptが含まれる

- サーバーサイド
  - アプリケーションのロジックの組み立てに使われるコード
  - ユーザー認証、タスクの実行、クライアントサイドコードをクライアントに届けるなどの責任

#### イベントループ

- 順番
  - タスクの実行
  - タスクをキューに入れる
  - ポーリングで順番を保ちながらキューを処理する
  - キューからのコールバックを実行する
  - 新たなコールバックはキューに入れる
- これの繰り返し

#### スレッドとプロセス

- スレッド
  - 逐次実行する処理
  - 1つのタスクの実行に必要な計算能力と資源を、1つに束ねたもの
  - 処理の単位

- プロセス
  - 実行中のプログラム
  - プログラムを実行すると、1つのプロセスが起動される
  - リソースの割当と保護の単位

- 複数のnode.jsのランタイムを実行する：複数のプロセスで実行する
- node.jsがコードの処理をする：スレッドを実行する

### なぜnode.jsでの開発を学ぶのか

- 開発のコア言語としてjavascriptだけに注意を集中できる
- データの連続的なストリーミング、何らかのチャット機能が欲しい場合、他のプラットフォームよりも有利とみなされる
- GoogleのV8 javascriptインタープリターがあるので、広くサポートされ、性能と機能の向上に期待できる
- 具体的なjavascriptのスキルを持つ開発者は、仕事に就く機会が多く、フロントエンド/バックエンドにも参加できる

---

## lesson 3

### モジュール

- `export` オブジェクトは、 `module` オブジェクトのプロパティ
  - `module` は、グローバルオブジェクトの1つ
  - `export` は、 `module.export` の略

- `require` を使ってライブラリ、モジュールをロードする
  - `require` は、グローバルオブジェクトの1つ
  - `require` は、 `module.require` の略

- Node.jsでは、 `CommonJS` を使っている
  - ブラウザの外でJavaScriptを実行するために、モジュールの使い方を定義する仕様

---

## lesson 4

- `http` モジュールはインターネットを介したり、リクエストを処理するNode.jsライブラリ

### Webサーバーを理解する

- webサーバー
  - インターネット越しの**リクエストに対して、データをロード/処理することによってレスポンスを返す**よう設計されたソフトウェア
- リクエストとレスポンス
  - ユーザーがどういう糸でアプリケーションと対話処理をしているのかを示すコンテクスト
- GET
  - クライアント：サーバーに情報をリクエストする
  - サーバー：ユーザーがブラウザで閲覧できるコンテンツによって対応する
- POST
  - クライアント：サーバーに情報を送る
  - サーバー：データをアプリケーションで処理をする

### アプリケーションのコード

- HTTPステータスコートの定数を提供するパッケージ
  - [http-status-codes](https://github.com/prettymuchbryce/http-status-codes)
- [npmドキュメントを日本語に翻訳下Liberty Technologyのページ](http://liberty-technology.biz/PublicItems/npm/npm.html)

- ポートの指定がなければ、OSがポートを選んでくれる

### node.jsにおけるコールバック

- コールバック
  - 無名関数の一種
  - 別の関数から呼び出すように設定できる
  - メリットは、もとの関数の処理が完了するのを待たずに、任意のコードを実行できる

- サーバーでのコールバックは、クライアントに応答するタイミングを示す
  - 複数のクライアントがサーバーに一連のリクエストを出すかもしれない
  - リクエストは、サーバーによって受信されると、それぞれ非同期に処理される
  - サーバーは、個々のリクエストを処理するのに時間を要する
    - 応答する準備ができたら、コールバックで、それを知らせる
  - レスポンスは、リクエストを受信した順序で返されるとは限らない
  - クライアントは、出したリクエストの処理時間に依存したタイミングで、そのレスポンスを受信する

---

## lesson 5

- `request` 自身がもつ特定のイベント
  - streamを見ると[Readable streamsでいくつか使えるイベント](https://nodejs.org/api/stream.html)がある

---

## lesson 6

- viewに必要なファイルは `fs` で読み込んでレスポンス時に返す

---

## lesson 7

### routerの設定の仕方

- 生のNode.jsでルーティングをするときの例

```javascript
// router.js
// マップ収納用のオブジェクト
const routes = {
  "GET": {},
  "POST": {}
}

// createServer時にコールバック関数として参照する関数
exports.handle = (req,res) => {
  try {
    routes[req.method][req.url](req,res);
  } catch(e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("view/error.html", res);
  }
}

// getリクエストのマップ用の関数
exports.get = (url, action) => {
  routes["GET"][url] = action;
}

// postリクエストのマップ用の関数
exports.post = (url, action) => {
  routes["POST"][url] = action;
}
```

- `router.get` 、 `router.post` でそれぞれのURLとコールバック関数を受け取り、 `routes` オブジェクトにマップする
- 経路が見つからなかったら、エラーページを表示する

### 経路を設定する例

- ユーザーがアクセスできるURLと、サーバーが供給するファイルとのマッピングを経路で決める
- 経路を処理するためのファイルは上記の `router.js`
- しかし、経路を登録する必要がある
  - 基本的には `router.get` 、 `router.post` を呼び出して、URLとコールバック関数を渡す
  - どちらの関数を使うかは、処理に使うHTTPメソッドによって依存する
- `router.get` 、 `router.post` によって経路を追加する `router.routes` オブジェクト
  - URLへアクセスされたときに呼び出すべきコールバック関数を決めるため、両者をマップするもの

#### 経路を1つ登録するのに明らかにする必要があるもの

- リクエストメソッドのGET/POSTの区別
- URLパス
- 返すファイル（データ）
- HTTPステータスコード
- コンテンツタイプ（返すファイル/データの種類）

```javascript
// main.jsとかで経路を登録する

router.get("/", (req,res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
})

router.get("/courses.html", (req,res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/courses.html", res);
})

router.get("/contact.html", (req,res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/contact.html", res);
})

router.get("/graph.png", (req,res) => {
  res.writeHead(httpStatus.OK, contentTypes.png);
  utils.getFile("public/images/graph.png", res);
})

router.get("/index.css", (req,res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/index.css", res);
})

router.get("/index.js", (req,res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/index.js", res);
})

router.post("/", (req,res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/thanks.html", res);
})

// サーバーを起動する
http.createServer(router.handle).listen(port);
console.log(`server listening on port number : ${port}`);
```

---

## lesson 8

### Node.jsのwebアプリケーションフレームワーク

- MVCアーキテクチャ
  - データを構造化するモデル
  - データを表示するビュー
  - データとの対話処理リクエストを処理するコントローラー

|フレームワーク名|説明|
|-------------|----|
|[Koa.js](https://koajs.com/)|Express.jsを作った開発者たちによって設計される<br>Express.jsが提供していないメソッドのライブラリに重点を置く|
|[Hapi.js](https://hapi.dev/)|Express.jsと同様なアーキテクチャで設計される<br>コーディング量の削減に重点を置く|
|[Sails.js](https://sailsjs.com/)|Express.jsを土台として、より多くの構造、大きなライブラリを提供し、カスタマイズの手間を減らす|
|[Total.js](https://www.totaljs.com/)|コアHTTPモジュールを土台とした高速なリクエストとレスポンスの処理が目立つ|

[Node.jsのwebフレームワークについての情報](http://nodeframework.com/)

- webフレームワークの最終的な目標
  - webアプリケーションを**ゼロから構築するときにありがちな開発の難関を乗り越えやすくすること**
- express.jsのメリット
  - 他の新しいフレームワークよりもサポートを得やすい
  - はじめてnode.jsのwebアプリケーションを作るのであれば、支援を得やすいツールが要る
- webフレームワークはweb開発で一般に使われるツールを、いくつか提供するように設計されている
  - Express.jsの場合、`リクエストの処理` 、 `静的/動的コンテンツの供給` 、 `DB接続` 、 `ユーザーアクティビティの追跡管理` などを援助するメソッドとモジュール

### webフレームワークを理解する

- webフレームワーク
  - 開発者の代わりに、大量の退屈ンア作業をこなすように設計されている
  - アプリケーションをカスタマイズする直感的な構造を与えてくれる
- express.jsの特徴
  - 特定のURLへのリクエストを監視してコールバック関数によってレスポンスする方法を提供する
  - HTTPによるweb上の相互作用とNode.jsプラットフォームとの中間に位置する

### expressのrequestオブジェクトのデータ項目

|データオブジェクト|説明|
|---|---|
|params|URLからIDとトークンを抽出できる<br>「リクエスト属性」|
|body|リクエストの内容のほとんどすべてを含む<br>POSTリクエストからのデータが含まれる|
|url|訪問されているURLに関する情報を提供する|
|query|送られてきたデータをアプリケーションのサーバーに抽出できる<br>クエリ文字列としてURL内でリクエストされたものが対象|

---

## lesson 9

### Express.jsでの経路構築

```javascript
// POSTリクエスト
app.post('/contact', (req, res) => {
  res.send('contact information submitted success')
});

// パラメータのあるパスを使う
// 経路パラメータとして扱うパラメータの前に（:）をつける
// 特定のユーザー/コンテンツにアクセスできる
app.get('/item/:itemName', (req, res) => {
  res.send(req.params.itemName)
});

// ミドルウェアを自分で追加する
// 全経路にログメッセージを追加したい場合
// next()は、「リクエストとレスポンス」の流れにある「次の関数」をを呼び出すためにある
// nextを呼び出さないと、コードブロック内で完了を待つ状態のままハングする
app.use((req,res,next) => {
  console.log(`request made to: ${req.url}`);
  console.log(`request made to: ${JSON.stringify(req.params)}`);
  console.log(`request made to: ${req.protocol}`);
  console.log(`request made to: ${JSON.stringify(req.query)}`);
  console.log(`request made to: ${req.rawHeaders}`);
  next();
});

// 特定の経路でミドルウェアを通したい場合
app.use('/item',(req,res,next) => {
  console.log('item passed');
  next();
});

// URLエンコードされたデータを解析する
// urlencodedのextendedはリクエストで渡されたオブジェクトのデータ内で重複されたオブジェクトを許可するか/しないかの設定で使う
// extended: false にすることでnode.jsのqueryStringを使ってurlをパースして、 `req.body` に入れる
// URLエンコードされたデータを使いたいことをExpress側に知らせるために使う
app.use(express.urlencoded({ extended: false }));
// リクエストで渡されたオブジェクトにJSON形式があれば、JSON形式でパースして、 `req.body` に入れる
// JSONフォーマットのデータを使いたいことをExpress側に知らせるために使う
app.use(express.json());
```

### 参考

[body-parser의 urlencoded는 도대체 어떤 역할을 하는 걸까?](https://velog.io/@hyunju-song/body-parser%EC%9D%98-urlencoded%EB%8A%94-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%96%B4%EB%96%A4-%EC%97%AD%ED%95%A0%EC%9D%84-%ED%95%98%EB%8A%94-%EA%B1%B8%EA%B9%8C)

[[Express] Body-Parser 미들웨어 다루기 :: 코드이터](https://fullmoon1344.tistory.com/153)

### MVC

- ビュー
  - アプリケーションからのデータをレンダリングしたもの
- モデル
  - アプリケーションとDBの中で、データを表現するクラス
  - データ、データに対して実行できる関数の種類などを定義する
- コントローラー
  - ビュートモデルを結びつける
  - リクエストを受信した時のリクエスト本体データの処理方法を決める
  - モデルおよびビューとの関係を決める

---

## lesson 10

### setメソッド

- `app.set`
- アプリケーションにおいて、あらかじめ定義されたConfigration用の変数に値を代入するときに使う
- 「アプリケーション設定プロパティ」

---

## lesson 11

### Configurationとエラー処理

```javascript
// エラー処理用のミドルウェアを追加する
exports.logErrors =
  (error, req, res, next ) => { // 4つの引数をすべてもっていない関数はエラー処理ミドルウェエアとみなされない
    console.error(error.stack); // エラースタックをログ出力
    next(error); // errorオブジェクトを次のミドルウェアに渡す
}

// ステータスコード404でレスポンス
exports.respondNoResourceFound =
  (req, res) => {
    const errorCode = StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The Page dose not exist!`);
}

// すべてのエラーをキャッチして、ステータスコード500でレスポンス
exports.respondInternalError =
  (error, req, res, next) => {
    const errorCode = StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
}
```

---

## lesson 13

### データベースに接続する

- MongoDBシェル
  - MongoDB用のREPLシェル
- Mongoose
  - アプリケーションとDBの間のモデルとして扱う
- DBのスキーマ
  - データを構造化する枠組み
  - データオブジェクトの相互関係を定義する

[ExpressJS公式がまとめた接続できるデータベースの一覧](https://expressjs.com/en/guide/database-integration.html)

- DBの必要性
  - 永続ストレージがなければ、ユーザーとの対話処理の範囲が制限される
  - 格納すべきアイテムの数が多いほど、見つけやすいようにグループ化されたシステムにしておく

- MongoDB
  - ドキュメント
    - JSONに似た構造
    - データオブジェクトとプロパティの関連付けがキーバリューのペアを使うことができる
  - JavaScript構文にしたがっている
  - ドキュメントをBSON（バイナリ形式のJSON）として保存する
  - 非リレーショナルDBシステム

- ほとんどのDBはリレーショナル
  - スプレッドシートのようにテーブルによって関連付ける

- テーブル
  - コラムで格納すべきデータの種類を定義する
  - 各コラム二対応するデータを行に格納する
  - 異なるテーブル同士の関係性も参照IDを通じてJOINテーブルへ格納することもできる
  - 参照IDを通じて設計されるリレーションがリレーションDBの由来となる

- [リレーショナルデータベース概要](https://docs.oracle.com/javase/tutorial/jdbc/overview/database.html)に関するOracleのページ

---

## lesson 14

### Mongoose

- アプリケーションのロジックとデータベースとの間に構文的なレイヤーを提供するツール
  - オブジェクトとドキュメントを対応させるツール
- [ORM(O/Dマッパー)](https://www.treefrogframework.org/ja/user-guide/model/object-document-mapping-on-mongodb.html)についての記事
- どんな種類のデータを保存できるかを定義する「スキーマ」
  - ドキュメントの統一性を守る
- モデルを使って、DBクエリの組織化を行う

### スキーマ

- 言語におけるクラス定義に似ている
- アプリケーションで使う特定のオブジェクトに合わせて、どのようにデータを構成すべきかを決める設計図のようなもの
- `Schema` が提供するコンストラクターにパラメーターを与えることで、スキーマオブジェクトを構築できる

[Mongooseが提供するスキーマのデータ型](https://mongoosejs.com/docs/schematypes.html)についての情報

### Mongooseでスキーマを使う

1. スキーマの定義をする
2. スキーマをもとにモデル化する

```typescript
"use strict"

import { Schema, model, Document } from 'mongoose';

// スキーマの型
interface User extends Document {
  name: string;
  email: string;
}

// スキーマの定義
const subscriberSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true},
});

// スキーマをインスタンス化してモデルとして扱う
// コレクションとスキーマをmodelのコンストラクターに渡す
const UserModel = model('User', subscriberSchema);

export default UserModel;
```

### モデル化してデータを保存する方法

- モデルをインスタンス化して `save` する

```typescript
︙
import UserModel from './model/subscriber';
︙

// Userモデルをインスタンス化する
const userInstance = new UserModel({
  name: 'kakaokamo',
  email: 'test@gmail.com'
});

// データをUserコレクションに保存する関数
const saveDataToUserInstance = async () => {
  try {
    const result = await userInstance.save();
    console.log('result: ' + result);
  } catch (error) {
    console.log('error: ' + error);
  }
}

// 関数の実行
saveDataToUserInstance();
```

- モデルから直接 `create` を呼び出して保存する

```typescript
︙
import UserModel from './model/subscriber';
︙

// データをUserコレクションに保存する関数
const saveDataToUserCollection = async () => {
  try {
    const result = await UserModel.create(
      {
        name: 'kakaokamo2',
        email: 'test2@gmail.com'
      }
    )
    console.log('result: ' + result);
  } catch (error) {
    console.log('error: ' + error);
  }
}

// 関数の呼び出し
saveDataToUserCollection();
```

[javascript - mongoose save vs insert vs create - Stack Overflow](https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create#:~:text=save()%20is%20an%20instance,')%3B%20var%20notificationSchema%20%3D%20mongoose.)

[javascript - mongoose difference between .create and .save - Stack Overflow](https://stackoverflow.com/questions/52872335/mongoose-difference-between-create-and-save)

[node.js - Mongoose await save - Stack Overflow](https://stackoverflow.com/questions/52832010/mongoose-await-save)

[Mongoose v5.13.2: Models](https://mongoosejs.com/docs/models.html)

[Mongoose v5.13.2: Documents](https://mongoosejs.com/docs/documents.html)

[mongoose 살펴보기 - 한 눈에 끝내는 Node.js](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174385/mongoose-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0)

[(MongoDB) Mongoose(몽구스) 프로미스 - ZeroCho Blog](https://www.zerocho.com/category/MongoDB/post/59b6228e92f5830019d41ac4)

### モデルの組織化

- クエリを管理しやすい形で関数化する

```typescript
// 定義
export const searchOneQuery = (name: string, email: string) => {
  return UserModel.findOne({ name: name }).where("email", new RegExp(email) );
};

// 使う側
import { searchOneQuery } from './models/userSubscriber';

const getData = async () => {
  try {
    const result = await searchOneQuery('kakaokamo2', 'test').exec();
    console.log('result: ' + result);
  } catch (error) {
    console.log('error: ' + error);
  }
}

getData();
```

---

## lesson 15

### コントローラーとモデルを接続する

- コントローラーはモデル（データ）とビュー（webページ）をつなぐ働きをする
- コントローラーでモデルに関するデータリクエストを処理する
- 経路から来たリクエストに対して、経路に直接処理を書くのではなく、用意したコントローラーから処理をさせる

- コントローラーの作成

```typescript
// userController

"use strict"

import { Request, Response, NextFunction }  from 'express';
// ユーザーモデルを使う
import UserModel from '../models/userSubscriber';

// 全ユーザー情報を取得するミドルウェア
const getAllUsers =
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await UserModel.find({});
      req.body.data = result;
      next();
    } catch (error) {
      next(error);
    }
  }

// Postで送られたデータを保存するためのコールバック関数
const saveUser =
  async (
    req: Request,
    res: Response,
  ) => {
    try {
      const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        note: req.body.note ? req.body.note : 'none',
      });
      await newUser.save();
      res.send('user register success');
    } catch (error) {
      res.send(error);
    }
  }

export { getAllUsers, saveUser };
```

- 経路に設定する

```typescript
︙
app.get(
  '/users',
  userController.getAllUsers,
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.send(req.body?.data);
  });
︙
app.post('/userRegister', userController.saveUser);
```

### MongooseでPromiseを使う

- 必要な設定
  - DBのコネクションを行ったあたりで `mongoose.Promise = global.Promise` を書く
- [MongooseでPromiseを使う](https://mongoosejs.com/docs/promises.html)時に読むドキュメント

---

## lesson 17

### モデルの構築

- データベースの妥当性検証（バリデーション）
- モデルに静的メソッドとインスタンスメソッドを作る
- モデル間の関連付け（アソシエーション）

- モデル
  - データの抽象
- スキーマ、抽象化
  - データがどのように見えて、どのように振る舞うかを決める設計図

### モデルにバリデーションを追加する

- データに一貫性を保つためにプロパティのバリデーションを行う

- Mongoose独自に存在するスキーマ型
  - Mixed
    - キーバリューのペアで保存するので、JavaScriptのオブジェクトに近い型
    - `mongoose.Schema.Types.Mixed`
  - ObjectId
    - 各ドキュメントにある `ObjectId` 値と同じく、オブジェクトの参照
    - `mongoose.Schema.Types.ObjectId`

- `required`
  - 必須項目の指定
- `lowercase`
  - 大文字小文字を区別しない
  - DBへ保存する前、小文字に変換する
- `unique`
  - 正確にはバリデーターではなく、Mongooseスキーマのヘルパーなのでメソッド
  - ユニークなインデックスを作る

- [Mongooseで使われるスキーマタイプ](https://mongoosejs.com/docs/schematypes.html)に関するページ

- スキーマには2種類のメソッドが追加できる
  - インスタンスメソッド
    - 個別のインスタンスで機能するメソッド
    - `subscriberSchema.methods` によって定義される
  - 静的メソッド
    - 多くのインスタンスに関連するかもしれない一般的なクエリに使うメソッド
    - `subscriberSchema.statics` によって定義される

- `subscriberSchema.methods` で定義するときの注意点
  - ES6のアロー関数が使えない
  - `this` バインディングがアロー関数では消えてしまう
  - ただ、関数の内部では、ES6の機能が使える
  - [公式ドキュメント](https://mongoosejs.com/docs/guide.html#methods)で確認できる

- Mongooseのクエリメソッド
  - `find`
    - クエリのパラメーターにマッチするレコードの配列を返す
  - `findOne`
    - クエリのパラメーターにマッチする1つのレコードを返す
  - `findById`
    - `ObjectId` とマッチするレコードを返す
  - `remove`
    - データベースにあるドキュメントを削除する
  - 他のクエリに関しては[公式ドキュメント](https://mongoosejs.com/docs/queries.html)を見る

---

## lesson 18

---

## lesson 19

---

## lesson 20
