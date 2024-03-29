---
title: 【React、React Native】ReactとReact Nativeでの構文の違い
date: "2021-10-21 16:00:00"
description: "ReactとReact Nativeで似通っていたり、書き方が違ったりする構文についてまとめる"
---

今まで React でコードを良く書いてきたが、React Native のコードを書こうとしたら、React とは勝手が違う書き方を見かけた

作法の違いと考えれば良いが、どうしても React でコードを書いたことが先入観として頭の中にあるので、見つけた次第ちょっとずつ書く

確認した環境は以下になる

|              |         |
| :----------: | :-----: |
|   node.js    | 14.17.6 |
|    react     | 17.0.2  |
| react-native | 0.63.2  |
|     expo     | 4.12.6  |
|     npm      | 7.22.0  |

なお、関数コンポーネントでの書き方を基本とする

## 配列をレンダリングするときの書き方

React で配列のデータをリスト化して表すとき、以下のような書き方になると思う

- [key](https://ja.reactjs.org/docs/lists-and-keys.html)にユニークな識別子をつけることで要素の変更/追加/削除をした場合、配列内の項目を安全に更新できる
- 配列の `map` メソッドで表示する要素を反復処理し、最終的に返す要素の子要素として指定する

```javascript
import React from "react"

const list = [
  { name: "aaa", hoge: "20" },
  { name: "bbb", hoge: "45" },
  { name: "ccc", hoge: "32" },
  { name: "ddd", hoge: "27" },
  { name: "eee", hoge: "53" },
  { name: "fff", hoge: "30" },
  { name: "ggg", hoge: "20" },
]

const SampleList = () => {
  const listItems = list.map(obj => <div key={obj.name}>{obj.hoge}</div>)
  return <div>{listItems}</div>
}

export default SampleList
```

React Native では、 [`FlatList`](https://reactnative.dev/docs/flatlist) というコンポーネントを使って以下のような書き方にする

- [`data`](https://reactnative.dev/docs/flatlist#required-data) に `FlatList` で扱う配列のデータを指定する
  - 必須要素
- [`renderItem`](https://reactnative.dev/docs/flatlist#required-renderitem) に `data` から渡された配列の要素を表示するために加工をする
  - 必須要素
- [`keyExtractor`](https://reactnative.dev/docs/flatlist#keyextractor) に配列の要素で扱っているユニークな値を指定することで React の `key` のように使う

```javascript
import React from "react"
import { Text, FlatList } from "react-native"

const list = [
  { name: "aaa", hoge: "20" },
  { name: "bbb", hoge: "45" },
  { name: "ccc", hoge: "32" },
  { name: "ddd", hoge: "27" },
  { name: "eee", hoge: "53" },
  { name: "fff", hoge: "30" },
  { name: "ggg", hoge: "20" },
]

const ListScreen = () => {
  return (
    <FlatList
      keyExtractor={listItem => listItem.name}
      data={list}
      renderItem={({ item, index }) => {
        return <Text>{item.age}</Text>
      }}
    />
  )
}

export default ListScreen
```
