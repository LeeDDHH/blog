## メンバー間に共通点がないタイプをUnion型にして、特定のメンバーを分岐条件に使う

### 前提

たとえば、以下のようにそれぞれのメンバーが異なるタイプの定義があるとする  
そして、そのメンバーを1つのUnion型として扱うケースがあるとする

```typescript
type SaveFilePath = { saveFilePath: string };
type PrefixName = { prefixName: string };
type ShortCut = { shortCut: string[] };
type LogFlag = { logFlag: boolean };
type Count = { count: number };

type OneOfModifiedData = SaveFilePath | PrefixName | ShortCut | LogFlag | Count;
```

データを扱う関数ではUnion型を引数のtypeにして、関数内ではそのデータを他の関数へ受け渡す役割を持っているとする

```typescript
const someFunction = (data: OneOfModifiedData): void => {
  deliverFunction(data);
  deliverOtherFUnction(data);
}
```

### 処理の追加

ここで、とあるtypeでのみ行う予定の処理を追加するケースが発生したとする

```typescript
const someFunction = (data: OneOfModifiedData): void => {
  deliverFunction(data);
  // 追加
  if (data.prefixName) {
    putSomeFunction(data);
  }
  // 追加end
  deliverOtherFUnction(data);
}
```

ただ、Union型で指定した場合は**複数の型のすべてに共通するメンバーのみ**が参照/呼び出しの対象となる  
そのため、Union型として指定した複数の型に共通するメンバーを使用しないと、以下のような文章で注意文が表示される

```typescript
プロパティ 'prefixName' は型 'SaveFilePath' にありませんが、型 'PrefixName' では必須です
```

では、どうすればUnion型で指定した複数の型のうち、特定の型でデータが渡された時の判定ができるのか  

### 型の保護と型の識別（Type Guards and Differentiating Types）を使用して実装をする

特定の型のデータが渡ってくることを明示的に型注釈（type assertion）を指定すればいい

```typescript
const someFunction = (data: OneOfModifiedData): void => {
  deliverFunction(data);
  // 型注釈(type assertion)
  if ((<PrefixName>data>.prefixName) {
    putSomeFunction(data);
  }
  deliverOtherFUnction(data);
}
```

[高等な型 | TypeScript 日本語ハンドブック | js STUDIO](https://js.studio-kingdom.com/typescript/handbook/advanced_types)
