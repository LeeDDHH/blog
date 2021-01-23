---
title: 【React】新しくReactプロジェクトを使うためにインストールしたパッケージ
date: '2021-01-23 17:34:00'
description: '新しくReact、Reduxのプロジェクトを作る際に使ったパッケージについてまとめた'
---

新しくReact、Reduxのプロジェクトを作ろうとしたが、ビルドがうまく行かなかった

調査した結果、なんとか動くものにはなったので、Babel、React、Redux、Webpackの組み合わせで使うためのパッケージについて残す

# 使用するパッケージ

新規でプロジェクトを立ち上げることもあり、主要技術のバージョンは以下になる

|パッケージ|バージョン|
|--|--|
|@babel/core|7.12.10|
|@babel/preset-env|7.12.11|
|@babel/preset-react|7.12.10|
|babel-loader|8.2.2|
|html-webpack-plugin|4.5.1|
|react|17.0.1|
|react-dom|17.0.1|
|react-redux|7.2.2|
|react-router-dom|5.2.0|
|redux|4.0.5|
|webpack|5.16.0|
|webpack-cli|4.4.0|
|webpack-dev-server|3.11.2|

## Babel

`babel` は `v7` から指定されたパッケージの書き方に変わったものがある

[What is the difference between babel-core and @babel/core?](https://stackoverflow.com/questions/53380741/what-is-the-difference-between-babel-core-and-babel-core#:~:text=1%20Answer&text=Since%20Babel%207%20the%20Babel,and%20which%20are%20third%2Dparty.)  
[Upgrade to Babel 7 · Babel](https://babeljs.io/docs/en/v7-migration#scoped-packages)

今回使う `babel` 関連のパッケージに関しては以下のものを使う

- 最新版の `babel`
  - `@babel/core`
- 出力するECMAScriptのバージョン、polyfillの指定のためのプリセット
  - `@babel/preset-env`
- `React` 用のプリセット
  - `@babel/preset-react`

[webpackとBabelの基本を理解する(2) ―Babel編― - Qiita](https://qiita.com/koedamon/items/92c986456e4b9e845acd)  
[@babel/preset-env · Babel](https://babeljs.io/docs/en/babel-preset-env)

`npm` でインストールする場合、以下のコマンドになる

```shell
npm i -D @babel/core @babel/preset-env @babel/preset-react
```

インストールが終わったらプロジェクトのルートに `.babelrc` を生成して以下のように設定する

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## Webpack

- Babel使って、JavaScriptファイルをトランスパイリングするためのパッケージ
  - `babel-loader`
- webpackで生成下JavaScript/CSSなどを埋め込んだHTMLを生成するために使うパッケージ
  - `html-webpack-plugin`
- webpackを使うためのパッケージ
  - `webpack`
- webpackをコマンドライン上で使うためのパッケージ
  - `webpack-cli`
- ローカルで開発用のサーバーを立ち上げるために使うパッケージ
  - `webpack-dev-server`

[babel-loader | webpack](https://webpack.js.org/loaders/babel-loader/)  
[HtmlWebpackPlugin | webpack](https://webpack.js.org/plugins/html-webpack-plugin/)  
[webpackでhtmlファイルも出力する - emahiro/b.log](https://ema-hiro.hatenablog.com/entry/2017/10/12/015748)  
[Command Line Interface | webpack](https://webpack.js.org/api/cli/)  
[DevServer | webpack](https://webpack.js.org/configuration/dev-server/)

`npm` でインストールする場合、以下のコマンドになる

```shell
npm i -D babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server
```

インストールが終わったらプロジェクトに `webpack.config.js` を生成して以下のように設定する

```javascript
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}
```

## React、Redux

- Reactを使うためのパッケージ
  - `react`
- ReactとDOMをつなげるためのパッケージ
  - `react-dom`
- ReactとReduxをバインディングするためのパッケージ
  - `react-redux`
- Reactのルーティング用のパッケージ
  - `react-router-dom`
- Reduxを使うためのパッケージ
  - `redux`

[ReactDOMのrender()とReact.Componentのrender()の違いを理解する - Qiita](https://qiita.com/tatane616/items/9808f8861586fb2b2926)  
[reactjs - React vs ReactDOM? - Stack Overflow](https://stackoverflow.com/questions/34114350/react-vs-reactdom)  
[ReactDOM – React](https://reactjs.org/docs/react-dom.html)

ちなみに、 `react-router-dom` は、 `v4` から `react-router` で使っていたコアな機能を使いつつ、`Link` や `BrowserRouter` のような新しいAPIが使える

[react-routerとreact-router-domの違い - Qiita](https://qiita.com/koja1234/items/486f7396ed9c2568b235)  
[what's the diff between `react-router-dom` & `react-router`? · Issue #4648 · ReactTraining/react-router](https://github.com/ReactTraining/react-router/issues/4648)


`npm` でインストールする場合、以下のコマンドになる

```shell
npm i -S react react-dom redux react-redux react-router-dom
```

後は、React、Reduxで開発をしていく
