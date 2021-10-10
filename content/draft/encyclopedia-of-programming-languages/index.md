---
read_start_date: "2021-08-21"
read_end_date: ""
---

# プログラミング言語大全

## プログラミング言語とは何か

### なぜ複数のプログラミング言語が存在するのか

#### 最適な道具

- プログラミング言語ごとに得意分野が異なる
  - web
    - PHP、Ruby、Pythonなど
  - iPhone、Mac
    - Swift、Objective-C
  - データベース操作
    - SQL
  - それぞれの適した用途がある
  - 何をどのように作るかに応じて、プログラミング言語を変える必要がある
  - プログラミング言語は複数の用途で使えるようになっているが、得意分野と苦手分野はある
    - なので、仕事でプログラミングをしているのであれば2、3つ以上の言語を使える人が大半

#### プログラミング言語の進化

- 新しい技術が次々と生まれている
- 新しい技術に見合ったプログラミング言語が用意される
- 新しいプログラミング言語そのものが技術を刷新していく
- あるプログラミング言語では解決できない新しいタイプの課題が見つかる
- これまで時間をかけて作っていた処理を、簡単に実現できるようになることもある

#### プログラミング言語の多様性

- 自由に作れるから生まれる多様性
- 独自の事情やセールスポイントがあるため、用途が似ていたとしても、並立して生き残っていく
- AppleのiOSとGoogleのAndroidのOS
  - OSが統一されないのは、それぞれのプラットフォームが自前で提供していることに価値を見出しているから
- 純粋な興味からプログラミング言語を作る人もいる
- 大きな視点で考えれば似たようなものでも、どのプログラミング言語も独自のバックグラウンドや特徴がある

---

## どのプログラミング言語を学ぶべきか

### 高速なプログラミング言語

- 一般的に、静的型付けでコンパイルを必要とする言語のほうが、動的型付け言語より実行速度が高速
- 静的型付け言語でも、ネイティブコードを出力できるC、C++がVMを介する必要のあるバイトコードを生成するJavaなどの言語より高速な傾向がある

### 書きやすい、生産性の高いプログラミング言語

- プログラミング言語の書きやすさは数値化しづらい
  - 情報がどれだけあるか
  - ライブラリが使いやすいか
  - 言語そのものが書きやすいか
  - などの観点がある
- Python、Ruby、Kotlinなどがある

---

## プログラミング言語の活躍するシーン

### Webアプリ（Webアプリケーション/Webサービス）

- サーバー側
  - PHP
  - Python
  - Ruby
  - Node.js(JavaScript)
  - Java
  - など

- クライアント側
  - JavaScript
  - WebAssembly

### スマートフォンアプリ

- Android
  - Java
  - Kotlin

- iOS
  - Objective-C
  - Swift

- クロスプラットフォーム
  - Dart(Flutter)
  - JavaScript(React Native)

### デスクトップアプリ

- Windows
  - C++(MFC、WTL、Qt)
  - C#
  - Visual Basic

- Mac
  - Objective-C
  - Swift

- クロスプラットフォーム
  - JavaScript(Electron)

### 人工知能/機械学習

- 画像認識、音声認識、機械翻訳、チャットボット、自動運転など

- 機械学習
  - Python
  - R
  - C++
  - Java
  - JavaScript

### システムプログラミングや高性能シフトウェアの開発

- OS、デバイスドライバーなどのシステムプログラム
  - 高速な応答性や目盛り効率の高さが求められる
  - DB、Webブラウザなどのソフトウェアもある
  - 効率よくハードウェアの性能を最大限引き出すプログラミング言語が必要
  - C/C++、Rust、Javaなど

### 組み込み機器

- さまざまな機器に組み込まれる制御システム
  - TV、オーディオ機器から自動車の制御、工業機械の制御
  - C/C++、Python、Javaなど
  - 処理能力が限定されて、制限が多い環境でも動かしやすいC/C++が需要にマッチする
  - ある程度立地な環境ならJavaも使われる
  - Linux上で動くPythonもある

### ゲーム制作

- スマホ
  - Kotlin
  - Swift

- Webアプリケーション
  - JavaScript

- Unity
  - C#

- Unreal Engine
  - C++

- コンシューマーゲーム
  - ハードの性能を引き出す必要があるので、C/C++が多くの場面で使われている

### コマンドツール

- 提供したいプラットフォームできちんと動くこと（移植性）やツールの書きやすさが求められる

- C、Go、Perl、Bash/Shell Script

### その他の用途

- プログラミング言語を作るためのプログラミング言語
  - C、OCaml

- データベース操作
  - SQL

---

## プログラミング言語を分類して考える

- 静的型付け言語
  - 大人数で開発することが決まっている
  - 値のデータの種類による不具合を用意に検出できる
- 動的型付け言語
  - 少人数の開発
  - 開発速度を重視する
- オブジェクト指向の言語
  - 長期に渡り使われることが若ており、メンテナンスが継続的に行われるのが予想される
  - ライブラリの再利用性や拡張が容易

### プログラミング言語と型

- プログラミング言語を分類するためのいくつかの基準
  - 型の取り扱い
- 静的型付け（Static typing）
  - 変数、関数の型がプログラムの実行前に決まっている言語
- 動的型付け（Dynamic typing）
  - 実行時に方が決まる言語

#### 静的型付け

- 型が厳格
- プログラム実行前に型の正当性チェックを行う
  - **静的型検査**
  - データの種類違いによるミスなどが防げる
- IDEを利用することで、該当する型のプロパティやメソッドなどの自動補完機能を利用できる
  - エラー回避、可読性の向上に役立つ機能も持つ
- 変数、関数の型を明示的に宣言する必要がある
- C、C++、Java、Scala、Haskell、OCamlなど

#### 動的型付け

- 明示的な変数の型注釈ができない
  - 型を書く手間が必要ない
- プログラム実行時に変数の方が決定されるので、型が間違っている場合、実行時のエラーが出るか、暗黙的にその型に変換される
- 事前に型が判定できないので、プログラムの実行速度の最適化がしづらい
- Python、Ruby、Perl、PHP、Common Lisp、Groovyなど

#### 命令型と宣言型

- **命令型（Imperative programming）**
  - プログラムで順に処理の方法（how）を書いていく
- **宣言型（Declarative programming）**
  - プログラムで該当する条件ややるべき状態など処理の性質（what）を書く

#### 宣言型

- 論理型
- 関数型

#### 命令型

- 手続き型
- オブジェクト指向

#### 構造化と非構造化

- **構造化（Structured programming）**
  - プログラムの逐次実行を前提として、分岐/繰り返し/任意の関数の呼び出しを用いてプログラムの構造を記述するパラダイム
  - 現代用いられるほぼすべての言語が持っている特徴

- **手続き型（Procedural programming）**
  - 関数などで処理を構造化できる能力を持ったプログラミング言語
  - オブジェクト指向的な書き方を用いることなくかつ関数型ともある程度距離がある言語
  - データと関数（手続き）はそれぞれ別物として扱われる
  - C、Goなど

#### **オブジェクト指向（Object-Oriented Programming）**

- オブジェクトを中心としてプログラムを構築するパラダイム
- データ構造や処理は、オブジェクトに包含（ほうがん）される
  - オブジェクトを起点に処理やデータがまとめられる
- 手続き型から発展し、プログラムの構造を作る能力の向上した経緯がある
  - Java、JavaScriptなどのオブジェクト指向言語では手続き型的なコードを書くこともできる
- データも手続きも1つのオブジェクトの中にまとめられている
- プログラムを抽象化する能力を有し、プログラムを整理して書くのに適している
- Java、JavaScript、Ruby、Pythonなど

#### **関数型（Functional programming）**

- 複数の式を組み合わせてプログラムを作るパラダイム
- 現代的な言語では、**関数型のエッセンスを持ったオブジェクト指向のプログラミング言語**も数多く見られる
- JavaScriptにも関数型の影響は強く現れる
- 「入力に対して、結果を返す」機能だけの関数を用意して組み合わせることでプログラムを作成する
- JavaScriptやScalaのようにオブジェクト指向と関数型が並立しているケースもある
- Haskell、OCamlなど

#### **論理型（Logic programming）**

- 論理学の影響下にある
- 条件を与えることで結果を求める言語
- Prologなど

#### **マルチパラダイム（Multi-paradigm programming）**

- 手続き型、オブジェクト指向、関数型などのパラダイム（文化あるいは規範）の考え方や書き方に対応したプログラミング言語の総称
- Scalaなど

#### **メタプログラミング（Meta-programming）**

- 別のプログラムそのものを生成・処理するプログラムを用いるプログラミングパラダイム
- C++ではテンプレートとマクロを用いることで、コンパイル時に最適なプログラムを生成できる
  - コンパイル時の日付を定数としてプログラムに保存する
  - コンパイル時に必要な計算の一部を終えてプログラムに保存する
  - などの最適化を助ける
- マクロやテンプレートなどの言語機能により実現する
- C、C++（テンプレート）、Common Lisp、Rubyなど

#### **ビジュアルプログラミング（Visual programming）**

- 視覚的なインターフェイスを用いてプログラムを作成する言語
- 教育用途、バッチ処理の自動化などでテキストで記述するよりもわかりやすくなる場合がある
- 教育用
  - Scratch、Squeak Etoysなど
- 音声、ビデオ、映像処理のためのリアルタイムなグラフィカルプログラミング環境
  - Pure Data、Maxなど
- macOSの定型処理をドラッグ&ドロップで処理する
  - Automator

#### **コンパイルとインタプリタ**

- プログラムを実行するために、事前に（明示的な）コンパイルという手順を必要とするのがコンパイル言語
  - 必要としないのがインタプリタ言語
  - ただ、**この分類が絶対的なものではない**
- 一般的にコンパイル言語に分類されるものが、コンパイルなしで実行できたり、インタプリタ言語が内部的にソースコードをコンパイルしたりする
  - JavaScript
    - 明示的なコンパイルを必要としないものの、実行時にコンパイル（JITコンパイル、Just-In-Timeコンパイル）が行われる
  - Java11
    - 明示的なコンパイルなしにソースコードファイルが実行できる
  - Scala
    - 実際に利用する際はコンパイルすることが多いものの、インタプリタで実行できる
- 画一的な区分が難しい
- 一般にインタプリタ言語が手軽だけど実行速度に課題があり、コンパイル言語はコンパイルの手間や時間がかかるが実行速度が早いという固有のトレードオフがある

---

## プログラミング言語大全

### C　高速・省リソースで現在も活躍する言語

- [Webサイト](http://www.open-std.org/jtc1/sc22/wg14/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>手続き型|B言語<br>Assembly<br>Fortran|C++<br>C#<br>Java<br>Go<br>JavaScript<br>PHP<br>現代の主要な言語のほぼすべて|

#### 特徴

- プログラムの実行速度や目盛りのしよいう効率に非常に優れている
- 仕様、コンパイラは現在でも更新されている
- メモリ管理が複雑で、最新の言語と比べて文法が不親切
- 習得難易度がやや高め
- ガベージコレクションがない
- オーバーヘッドなしにプログラムを実行できる
- ヘッダファイル
  - 共通の処理などを管理する
  - プログラムに指定することで利用できる

#### 活用するシーン

- OS
  - Linuxはほぼすべての部分がC
- コマンドラインツール
  - Git
- 組み込み
- プログラミング言語
  - Ruby、Pythonは言語の基本的な部分がC製

#### CのFizzBuzz

```c
// ヘッダファイルの取り込み
// 標準入出力を行うためにヘッダファイルを読み込む
#include<stdio.h>

// 最初に実行されるmain関数
int main(void) {
  int i;
  for(i = 1; i = 100; ++i) {
    if (i % 3 == 0 && i % 5 == 0) {
      printf("FizzBuzz");
    } else if (i % 3 == 0) {
      printf("Fizz");
    } else if (i % 5 == 0) {
      printf("Buzz");
    } else {
      printf("%d", i);
    }
    printf("\n");
  }
  return 0;
}
```

#### ポインター

- 変数のアドレスを記憶するもの
- **アドレス**
  - コンピューターの記憶領域（メモリー）に振られている番号
- 関数や変数の参照先の受け渡しができたり、複数のデータを効率よく扱うことができたりする
- Cへの理解が進まない段階だと難しい

#### Cと仕様

- 独自のルールが持ち込まれて、互換性が失われるケースも出てくる
- 標準化機関によってCの仕様が定められる
  - ANSI、ISO、JISなど
- この仕様を各コンパイラが追従していく

#### 代表的なCコンパイラ

- gcc（GNU C Compiler）
- Clang

#### なぜCはいまだに人気なのか

- 汎用性が高い
- 動作速度が高速なこと
- OSや機器のスペックを選ばずどこでも高速に使える
- PC、組み込みなどさまざまな機器にプログラムが作れる
- プログラムのオーバーヘッドを極限まで少なくしているので、計算能力の高くない機器にも搭載できる

#### システムプログラミング

- OSやコンパイラーなどの領域のハードウェアにより近いプログラミングの分野
  - 動作が高速でオーバーヘッドが少ない
  - メモリー操作などハードウェア関連の操作が容易
- Cのメモリ管理などの難しさはシステムプログラミング言語としての柔軟さと表裏一体の関係

#### マクロを使ったCのプログラム

```c
#include<stdio.h>

// マクロを定義
// Cの強力な機能マクロ
// Fizz、Buzzの条件を判定するマクロを定義
#define IS_FIZZ(i) (i % 3 == 0)
#define IS_BUZZ(i) (i % 5 == 0)

// 変数の定義
// Cには文字列型がない
// 1バイトの文字を表すchar型の配列として表現する
char buf[256];

// FizzBuzzを返す関数を定義
char* fizzbuzz(int i) {
  if (IS_FIZZ(i) && IS_BUZZ(i)) return "FizzBuzz";
  if (IS_FIZZ(i)) return "Fizz";
  if (IS_BUZZ(i)) return "Buzz";
  sprintf(buf, "%d", i);
  return buf;
}

// メイン関数
int main(void) {
  int i;
  for(i = 1; i = 100; ++i) {
    printf("%s\n", fizzbuzz(i));
  }
  return 0;
}
```

---

### Go Google発！　高速な現代的言語

- [Webサイト](https://golang.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>手続き型<br>並行|C<br>Python<br>Limbo<br>Pascal<br>Smalltalk<br>Newsqueak<br>Modula-2|Crystal|

#### 特徴

- Cに文法の影響を受けた並行実行などに優れる言語
- Googleが自社の開発で抱えていた課題、ビルドの遅さや非効率な開発スタイルを解決するために生まれる
- ガベージコレクションを標準で備える
- **Goroutine**
  - 並行処理、型推論などの機能
- 高速なコンパイル
- **クロスコンパイル**
  - あるOSから他のOS向けにコンパイルできる
- **シングルバイナリ生成**
  - 依存ファイルを外部に持たない

#### 活用するシーン

- コマンドラインツール
- Webアプリケーション（APIサーバー）
- クラウド

#### GoのFizzBuzz

```golang
// パッケージの指定
// Goではプログラムは必ず何かしらのパッケージに属する
// 同じパッケージ内であれば関数などに自由にアクセスできる
package main

// 基本ライブラリの取り込み
// 外部のパッケージを利用する際には、importでパッケージを取り込む必要がある
import ("fmt")

// メイン関数
func main() {
  for i := 1; i <= 100; i++ {
    result := FizzBuzz(i)
    fmt.Println(result)
  }
}

// 戻り値がstring型のFizzBuzz関数の定義
func FizzBuzz(i int) (string) {
  switch {
    case i % 3 == 0 && i % 5 == 0:
      return "FizzBuzz"
    case i % 3 == 0:
      return "Fizz"
    case i % 5 == 0:
      return "Buzz"
    default:
      return fmt.Sprint(i)
  }
}
```

#### ガベージコレクション

- プログラムが動的に確保した目盛り領域を自動で開放する機能
  - C、C++には存在しない
  - C、C++の開発ではメモリ管理を自身で記述しなくてはならない
  - メモリの開放を忘れた時に起きるメモリリークや、誤って使用中のメモリを開放するか書き換えるかでメモリ破壊が起きる
- Goでは自動でメモリ管理を行う

#### オブジェクト指向をサポートしていない

- クラスや継承の概念がない
  - Java、C++のウピまオブジェクト指向の言語とは考え方が多少違う
- しかし、構造体がある程度ニーズを満たしている
  - 構造体はフィールドとメソッドを定義できるもの
  - オブジェクト指向のクラスと部分的に似たような使い方ができる

#### GAE（Google App Engine）をはじめ、クラウドで広く使われる

- GAE
  - Googleが提供するクラウドサービスの1つ
  - 開発したプログラムをGoogleのインフラ上で実行できる
  - オートスケールの機能があって、アクセス数の増減に合わせて、自動的にインスタンスの追加と削除が行われる
  - OSやDBなどインフラの管理の手間が大幅に削減できる
- AWS Lamdaなど各種クラウドサービスでGoはデフォルトで利用できるなど広く支持されている

#### Goの魅力

- コンパイルが高速
- 実行速度も速い
- メモリ管理の面で安全性が高い
- 非同期処理が言語レベルでサポートされている

#### Goで構造体を使ったFizzBuzz問題

```golang
package main
import ("fmt")

// メイン関数
// 構造体を生成し、初期化したらRunメソッドを呼び出す
func main() {
  // 構造体を生成して初期化
  // 構造体のCurに1、Maxに100を初期化の値にしてインスタンス化する
  fb := FizzBuzz{1, 100}
  //実行
  fb.Run()
}

// FizzBuzz構造体を定義
type FizzBuzz struct {
  Cur int
  Max int
}

// 構造体FizzBuzzで処理実行のメソッド
// 構造体FizzBuzz利用するRunメソッドを定義する
func (p *FizzBuzz) Run() {
  // 指定回数だけ繰り返す
  // for構文で繰り返しGetValueメソッドを呼び出す
  // 構造体のフィールドCurからMaxまで繰り返す
  for ; p.Cur <= p.Max; p.Cur++ {
    fmt.Println(p.GetValue())
  }
}

// 構造体FizzBuzzで条件を判定するメソッド
func (p *FizzBuzz) IsFuzz() bool {
  return p.Cur % 3 == 0
}

func (p *FizzBuzz) IsBuzz() bool {
  return p.Cur % 5 == 0
}

// 構造体FizzBuzzでFizzBuzzの値を取得するメソッド
// 構造体FizzBuzzで使える値を返すメソッドを定義
func (p *FizzBuzz) GetValue() string {
  switch {
    case p.IsFuzz() && p.IsBuzz():
      return "FizzBuzz"
    case p.IsFuzz():
      return "Fizz"
    case p.IsBuzz():
      return "Buzz"
    default:
      return fmt.Sprint(p.Cur)
  }
}
```

---

### アセンブリ　もっとも低水準な言語

- [Webサイト](http://www.gnu.org/software/binutils/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|手続き型||C<br>C++<br>WebAssembly|

#### 特徴

- 簡単な書き方ではないが、高速化などに役立つ
- 人間に読みやすい高水準言語と機械語の中間に当たる原始的な言語
- 機械語に近い低水準な言語で、機械語の各命令を人間にわかりやすくする
  - 機械語とアセンブリ言語は、ほぼ1対1の対応関係がある

#### 活用するシーン

- 低水準
  - ハードウェアに近い領域で用いられる
  - コンピューターのアーキテクチャごとに命令が異なり、移植性が低い
  - Cなどの言語では、部分的にアセンブリ記述できるインラインアセンブラーの機能を持つ処理系もある
  - コンピューターの働きを学ぼうと思った時、機械語と1対1の関係にあるアセンブリは役立つ
- 高速化
  - かつては、プログラムを高速化するためにプログラムの一部をアセンブリ言語で記述していた
  - 現在では、コンパイラがが非常に賢くて十分に高速な機械語を生成するためにアセンブリ言語を使う機会はほとんどない

---

### C++ Cにオブジェクト指向を載せてパワーアップ

- [Webサイト](https://isocpp.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>オブジェクト指向<br>メタプログラミング|C<br>Simula<br>BCPL<br>アセンブリ|Java<br>C#<br>D<br>PHP<br>Rust<br>Python<br>Perl|

#### 特徴

- Cにオブジェクト指向を載せる
- 大規模開発で役立つ機能を取り入れる
  - 仮想関数
  - 多重定義
  - 多重継承
  - など
- Windowsアプリの開発、OSなどの基盤ソフトウェア開発にも積極的に採用されている
- ISO/IECによる標準化も行われている
- Cとできる限りの互換性を持っている
- **テンプレート機能**
  - プログラムのコードそのものをコードで操作できるもの
  - 雛形となるコードに、任意の要素を加えられる
  - 他の言語のマクロに相当する

#### 活用するシーン

- OS
- DB
- デスクトップアプリ
- ブラウザ
- ゲーム開発
- 実行速度重視

#### C++は進化を続ける

- C++標準化委員会を中心に新仕様に関する活発な議論が行われて、現在も機能が増えている
- 周辺ライブラリも活発に開発が続く
  - Boost、Qtなど

#### C++はCを良くも悪くも受け継いでいる

- オブジェクト指向を付け足したような部分以外は多くの点でCに似ている
  - ガベージコレクションをデフォルトでは有していない
  - メモリの明示的な開放が必要となる
- パッケージマネージャーなど開発環境が未整備
  - そもそもの用途は違うが、Python、Rubyなどの言語に比べてとっつきづらいとみなされる

#### C++のコンパイラ

- GCC、Clang、MSVC

#### C++のFizzBuzz

```c++
#include <iostream>
// オブジェクト指向を利用して、クラスを定義する
class FizzBuzz {
  private:
    int max;
  public:
    // クラスを生成したときに実行されるコンストラクタを定義
    FizzBuzz(int num) {
      this->max = num;
    }
    // クラス内では、任意のメソッドを定義できる
    void run () {
      for (int i = 1; i <= max; i++) {
        this->check(i);
      }
    }
    void check (int i) {
      if (i % 3 == 0 && i % 5 == 0) std::cout << "FizzBuzz";
      else if (i % 3 == 0) std::cout << "Fizz";
      else if (i % 5 == 0) std::cout << "Buzz";
      else std::cout << i;
      std::cout << "\n";
    }
};

int main() {
  // クラスを使うには、newでインスタンスを作成してから利用する
  FizzBuzz *obj = new FizzBuzz(100);
  obj->run();
  return 0;
}
```

---

### Rust　高速・安全・並行　新世代の言語

- [Webサイト](https://www.rust-lang.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>手続き型<br>並行|C<br>C++<br>OCaml<br>Scheme<br>Haskell<br>Erlang|Swift|

#### 特徴

- 高速、安全、平行の新世代の言語
- C/C++のより安全な置き換えを狙って開発される
- Firefoxで使われる
- 静的型付けで型の機能がC/C++より強力
- モダンな機能
  - 型推論
  - ジェネリック型
  - 高速な並行
- 高速で省リソース
  - 最適化がしいやすい静的型付け言語
  - ガベージコレクションがない
  - LLVM採用
  - ゼロコスト抽象化採用
    - プログラム内でいくつかの高度な機能、型の表現などを駆使してもコンパイル時などに適切に解釈し、実行時にオーバーヘッドがないこと
  - 並行実行性能
- 安全性
  - C/C++と比べて高いメモリ安全性を達成している
  - 並列並行処理のデータ競合が避けられる
- ツールの充実
  - **rustup**
    - 開発環境ツール
  - **Cargo**
    - パッケージ管理ツール
  - **rustfmt**
    - フォーマット統一
  - **clippy**
    - リントツール
- 言語の提供元が開発者ツールも提供する

#### 活用するシーン

- システムプログラミング
- ブラウザ
- Webアプリケーション（APIサーバー）
- コマンドライン

#### なぜRustなのか？

- 重要になってくるキーワードが安全性
  - C++のメモリ管理の複雑さで安全性の達成が難しい
  - そこで、最初から安全性を考慮して設計される
  - パフォーマンスを犠牲にすることなく実行速度も速い

#### RustとGoはライバル？

- RustとGoの共通点
  - 登場時期が比較的に近い
  - 優れた並行処理を可能にする
  - C/C++からの影響を受けた
- しかし、言語の性格が異なる点も多く、必ずしも純粋な競合関係にあるわけではない
- 設計思想の違い
  - Go
    - ガベージコレクションを採用して比較的シンプルな言語機能中心
  - Rust
    - ガベージコレクションを採用せず、型などの機能が強力
- RustがGoと比べて注目を集めている分野
  - ブラウザ開発
  - 高速コマンドラインツール
  - OSのドライバー
  - など
- Goが得意とする分野
  - AWS SDK
  - Google API Client Libraries
  - クラウド

#### 安全なRustのメモリ管理

- **RAII**
  - メモリやリソース管理に採用している手法
- 現在の主要な言語ではメモリ管理にガベージコレクションを利用している
- しかし、Rustでは主に「**所有権**」と呼ぶ変数のスコープを確認して、そこからメモリ管理を行う
  - 関数が呼び出されたとき、変数に使うオブジェクトのためのメモリを割り当てて、関数を抜けたときに破棄する
    - ```rust
      fn test_func() {
        // 変数aにメモリが割り当てられた時点で、変数aが所有権を持つ
        // test_funcのスコープを抜けたとき（間ううを抜けたとき）にメモリは破棄される
        let a = vec![10, 20, 30];
        println!("{}", a[0]);
      }
      ```
  - しかし、一度所有権を持った変数を別の変数へ代入する場合、所有権が移るため、既存の所有権を持っていた変数は利用できなくなる
    - ```rust
      // 変数aに所有権が割り当てられる
      let a = vec![10, 20, 30];
      println!("{}", a[0]);
      // 変数aの所有権が変数bに移る
      let b = a;
      // 所有権を持っていないaを使おうとするとエラーになる
      println!("{}", a[0]);
      ```
- つまり、所有権を持った変数が利用可能であって、**所有権の有無に応じて必ずリソースを破棄する**ことでメモリを管理する
  - 所有権の仕組みにより、**コンパイル時に変数の利用範囲を明確にできる**ので、ガベージコレクションを利用することなくリソース管理が可能になる
- Rustにおける所有権の用語
  - 借用
  - ライフタイム
  - ムーブ/コピーセマンティクス
  - など
- 用語を理解するまではコンパイル時に警告が多く、なかなかプログラミングがうまく行かない

#### RustのFizzBuzz

```rust
// プログラムはmain関数からはじまる
fn main() {
  for i in 1 .. 100+1 {
    let result = fizzbuzz(i);
    println!("{0}", result)
  }
}

// FizzBuzzを返す関数を定義
// 関数定義で引数型や戻り値の型をしっかり指定する
// 上記のfor構文の内側では型推論により、明示的な型指定を省略できる
fn fizzbuzz(i:i32) -> String {
  // 無名関数を定義
  // クロージャ（無名関数）を利用して、Fizz、Buzzを判定する関数を定義する
  let is_fizz = |i| { i % 3 == 0};
  let is_buzz = |i| { i % 5 == 0};
  // 順次判定する
  if is_fizz(i) && is_buzz(i) {
    return "FizzBuzz".to_string();
  } else if is_fizz(i) {
    return "Fizz".to_string();
  } else if is_buzz(i) {
    return "Buzz".to_string();
  } else {
    return i.to_string();
  }
}
```

---

### Python　入門から機械学習まで大人気のプログラミング言語

- [Webサイト](https://www.python.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>オブジェクト指向|C<br>C++<br>Perl<br>Haskell<br>ABC（教育用言語）<br>Java<br>Scheme|D<br>F#<br>Go<br>Groovy<br>Swift<br>Nim<br>JavaScript<br>CoffeeScript<br>Julia|

#### 特徴

- オブジェクト指向のスクリプト言語
- 文法の単純化
  - 誰が書いてもだいたい同じように読みやすいプログラムになるように設計されている
  - 空白による字下げ
  - インデントによる構文ブロック
- 機械学習、深層学習の分野でデファクトといえる言語
- 手軽に始められる上に、多くのライブラリが備えられている
- **Anaconda**
  - Pythonおよび有名なPythonライブラリをまとめた、Pythonのディストリビューション（配布・実行環境）
- [Pythonをスッキリした言語にするための哲学(The Zen of Python)](https://www.python.org/dev/peps/pep-0020/)

#### 活用するシーン

- データサイエンス
- 機械学習/ディープラーニング
- Webアプリケーション
- スクリプト

#### PythonのFizzBuzz

```python
# FizzBuzz関数の宣言
# Pythonでは関数は呼び出しより先に宣言しておく必要がある
def fizzbuzz(i):
  # 1つずつ条件を確認
  if i % 3 == 0 and i % 5 == 0:
    return "FizzBuzz"
  if i % 3 == 0:
    return "Fizz"
  if i % 5 == 0:
    return "Buzz"
  # その他
  return str(i)

# 100回fizzbuzz関数を呼ぶ
# range(a, b)は、a以上b未満の範囲の値を返す
for i in range(1, 101):
  print(fizzbuzz(i))
```

#### 機械学習

- AI一分野の技術
- **Scikit-learn**
  - 手軽に機械学習が実践できるライブラリ
  - 分類、回帰、クラスタリング、次元削除などの手法をサポートしている
  - 分類だけでも、SVM、ナイーブベイズ、ランダムフォーレストなどのアルゴリズムを有している
- 機械学習以外の数学や物理学などの分野で活躍するライブラリ
  - **NumPy**
    - 機械学習で重要となる行列計算ライブラリ
  - **SciPy**
    - 科学技術計算
- **Jupyter Notebook（JupyterLab）**
  - 機械学習の実行や可視化ができるノートツール

#### 深層学習（ディープラーニング）

- 多層のニューラルネットワークを用いた機械学習の手法
  - 一部の領域で既存の機械学習手法を圧倒したため、広まる
- **TensorFlow**
  - Googleの深層学習を実践するライブラリ
- 人気のある深層学習フレームワークのほぼすべてがPythonを主な対象としている

#### Webアプリケーション開発

- 代用的なフレームワーク
  - Django
    - フル数タック
    - 大規模なWeb開発に向いている
  - Flask
    - 機能を絞った軽量フレームワーク
    - 大規模なWeb開発で必ずしも得意ではない
  - など
- Instagram、YouTubeでPythonを一部用いて開発されている

#### Python2とPython3

- 2から3への変更が大きく、2で書かれたコードの移行が難航する
  - ライブラリやフレームワークも3にすぐには移行できないものが少なくない
  - そのため、ユーザーもなかなか3に移行しないという悪循環がある
- しかし、近年ではこれらの課題はほとんど解決される
  - UbuntuなどのLinuxディストリビューションもデフォルトでPython3を採用するようになる
  - Python2系最後の2.7のサポートは2020年まで
- これからPythonを始める人はPython3以降のものだけを使っていれば問題ない

#### Pythonの実行速度とC拡張

- Pythonの弱点
  - 実行速度
  - 実際のところはちょっとしたスクリプト用途など日々の利用では十分に高速
  - ただ、一部の処理についてはPythonより速い言語があるのは事実
- 実行速度問題を回避する方法
  - 実行に際して時間がかかりそうな処理はCに任せてしまう方法
  - Pythonの処理の一部はCなどで置き換えられる
  - **C拡張**と呼ばれるもの
- NumpyなどではC拡張ライブラリを採用して、Pythonの実行速度では物足りないところをプログラムを書く側に意識させることなくCで実行できる
  - Pythonの使いやすさを保ったまま、必要なところだけCで高速に実行できる
  - 多くの場合は、C部分をライブラリ作者が書いてくれるので、Cのことを知らなくても利益を享受できる

#### PyPIとpip

- **PyPI（Python Package Index）**
  - Pythonライブラリのカタログのような存在
- pip
  - Pythonに同梱されているパッケージマネージャー
  - ライブラリのインストールができる

#### 数値計算ライブラリNumPyを使ってFizzBuzz問題を解く

```python
# NumPyを使う
import numpy as np

# 1から100までの連続する配列を生成
# 連続する値を持つ配列を生成する
nums = np.arange(1, 101)

# FizzBuzzの条件リストを指定
cond_list = [nums % 15 == 0, nums % 3 == 0, nums % 5 == 0, True]

# 条件に合致したときの値を指定
value_list = ["FizzBuzz", "Fizz", "Buzz", nums]

# 条件ごとに値を設定する
# 条件に合った値を取り出す
result = np.select(cond_list, value_list)

# 結果を出力
print("\n".join(result))
```

#### +1 PyPy　Pythonの処理系の1つ

- Pythonの処理系の1つ
- 独自の言語ではない
- 標準のPython（CPython）より、一部のケースで後続に実行できる処理系
- CPythonと一部互換性がなく、CPythonのバージョンアップにもやや遅れて追従することになってしまう課題がある
- 一般に利用する範囲ではCPythonを選ぶ

#### +1 Cython　Python高速化のための言語

- PythonのC拡張を作成して、高速化するためのプログラミング言語、コンパイラの名前

#### +1 MicroPython　組み込み向けのPython

- 組み込み向けのPython五感のプログラミング言語

---

### Ruby　日本が世界に誇るスクリプト言語

- [Webサイト](https://www.ruby-lang.org/ja/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>オブジェクト指向<br>メタプログラミング|Lisp<br>Perl<br>C<br>Smalltalk<br>CLU<br>Eiffel|D<br>Groovy<br>Swift<br>Crystal|

#### 特徴

- 記述の柔軟さ、簡潔さ
- 使われているサービス
  - Vagrant
    - 仮想環境の設定ツール
  - サーバー管理
    - Chef

#### 活用するシーン

- Webアプリケーション
- スクリプト

#### RubyのFizzBuzz

```ruby
# FizzBuzzに応じた値を返す関数
# if文の直後に値を書くことができて、関数の戻り値となる
def fizzbuzz(i)
  if i % 3 == 0 and i % 5 == 0
    "FizzBuzz"
  elsif i % 3 == 0
    "Fizz"
  elsif i % 5 == 0
    "Buzz"
  else
    i
  end
end

# 1から100まで繰り返しfizzbuzzを呼ぶ
# Rubyですべての数値や文字列はオブジェクト
# 1もオブジェクト
# 整数値がもつuptoメソッドを使って、1から100まで繰り返しfizzbuzzを呼び出す
1.upto(100) do |i|
  puts fizzbuzz(i)
end
```

#### オブジェクト指向を利用したFizzBuzz問題のプログラム

```ruby
# クラス定義
class FizzBuzz
  # 初期化メソッド
  def initialize(max)
    @max = max
    # Fizz、Buzzを判定する条件をlambda式で定義
    @is_fizz = lambda { |n| n % 3 == 0 }
    @is_buzz = lambda { |n| n % 5 == 0 }
  end

  def run
    1.upto(@max){ |n| puts check(n)}
  end

  def check(n)
    if @is_fizz.call(n) and @is_buzz.call(n)
      "FizzBuzz"
    elsif @is_fizz.call(n)
      "Fizz"
    elsif @is_buzz.call(n)
      "Buzz"
    else
      n.to_s
    end
  end
end

# クラスをインスタンス化して実行
fb = FizzBuzz(100)
fb.run
```

#### +1 mruby　組み込み向けのRuby

- 組込みシステム向けの軽量実装のRuby
- Luaのように、組み込みの分野やC/C++との組み合わせで使うことを目的としている

#### +1 Crystal　もしもRubyが静的型付けを重視したら？

- Rubyに性的片付け機能をつけたような言語
  - TypeScriptに近い立ち位置
- コンパイル言語
- Cとのバインディングも可能

#### +1 JRuby　JVMで動くRuby

- RubyのJava実装（JVM言語）
  - JRuby自体はプログラミング言語ではなく、処理系
- JVMで高速に動作し、Rubyよりもスレッドの処理に優れている
- JRubyCompiler
  - RubyコードをJVMで動作する `.class` ファイルにコンパイルできる
- CによるRuby実装（CRuby、MRI）と完全互換というわけではない

#### +1 Opal RubyをJavaScriptにする

- RubyをJavaScriptに変換（トランスパイル）する試み

---

### PHP　もっともWebで使われるWebアプリ開発に特化したプログラミング言語

- [Webサイト](https://www.php.net/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>オブジェクト指向|C<br>C++<br>Perl<br>Java<br>Tcl/Tk|Hack|

#### 特徴

- Web分野に完全特化
- Webサーバー嬢で動的なWebページを作るのに便利な機能を多く備えている
- コマンドラインで文字列を処理するのはPerl、Ruby、Pythonと比べるとそこまで得意ではない
  - CLIとしてはあまり使われない
- DBとの接続が容易
  - DB関連のバッチ処理に使われる
- **Composer**
  - Node.jsのnpmなどに影響を受けたパッケージマネージャー・リポジトリ
  - かつてはPECL/PEARが使われていた

#### 活用するシーン

- Webアプリケーション

#### PHPのFizzBuzz

```php
for ($i = 1; $i <= 100; $i++) {
  $result = fizzbuzz($i);
  echo $result."\n";
}

function fizzbuzz($i) {
  if ($i % 3 == 0 && $i % 5 == 0) return "FizzBuzz";
  if ($i % 3 == 0) return "Fizz";
  if ($i % 5 == 0) return "Buzz";
  return $i;
}
```

#### PHPの有名なフレームワーク

- CakePHP
  - Ruby On Railsの概念を取り入れる
- Symfony
  - MVCフレームワーク
- Laravel
  - 一番人気
- CodeIgniter
  - 軽量で速度重視

#### +1 Hack/HHVM　Facebook製のPHPライクな言語

- Hack
  - Facebookによって開発されたプログラミング言語
- HHVM
  - PHPの実行環境として開発
- PHPとほぼ同じ言語仕様だけど、静的な型システムがある

---

### Lua　高速動作と高い移植性を持つ組み込みスクリプト言語

- [Webサイト](https://www.lua.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>手続き型<br>プロトタイプベースのオブジェクト指向|Scheme|mruby|

#### 特徴

- 単体でも活躍するが、他言語に組み込むことで威力を発揮する
- 軽量なプログラミング
- アプリケーション内に組み込んで、C/C++とともに使うことが想定されている
- Cで記述しつつ設定変更を頻繁にしたい（プログラムの再コンパイルをしたくない）ときにLuaを用いる
- 動作速度、移植性の高さ、消費リソースの少なさ
- MITライセンスで配布されているため、商用製品に組み込むことが容易
- C/C++で作成されたゲームなどのアプリケーション開発の補助的な役割（設定変更）で使われる
- GitHub、Wikipediaなどのサービスでも使われる
- Webフレームワークも存在する

#### 活用するシーン

- ゲーム開発
- アプリケーションの設定

#### LuaでFizzBuzz

```lua
-- FIzzBuzzを返す関数
function fizzbuzz(i)
  --無名関数を定義
  is_fizz = function (i) return i % 3 == 0 end
  is_buzz = function (i) return i % 5 == 0 end
  if is_fizz(i) and is_buzz(i) then
    return "FizzBuzz"
  elseif is_fizz(i) then
    return "Fizz"
  elseif is_fizz(i) then
    return "Buzz"
  end
  return i
end

-- 1から100まで繰り返す
for i = 1, 100 do
  print(fizzbuzz(i))
end
```

#### +1 LuaJIT JITでLuaを速くする

- 速度に注力したLuaの実行環境
  - Luaプログラムを実行時にコンパイルして高速化する機能を持っている
  - JIT（Just-in-time）
- JITは動的型付け言語の高速化に寄与するため、JavaScriptの主要な処理系などで用いられている

#### +1 MoonScript Luaを書きやすくしたいなら

- Luaは記述の柔軟さにかけている
- そこで、より強力な言語からトランスパイル（変換）する**MoonScript**が出る
- HaxeもLua出力に対応している
- Pythonライクなインデント重視の文法

#### MoonScriptのFizzBuzz

```moonscript
fizzbuzz = (i) ->
  if i % 3 == 0 and i % 5 == 0
    print "FizzBuzz"
  else if i % 3 == 0
    print "Fizz"
  else if i % 5 == 0
    print "Buzz"
  else
    print i

for num = 1, 100
  fizzbuzz num
```

---

### JavaScript Webブラウザ／サーバーで活躍する言語

- [Webサイト](https://developer.mozilla.org/ja/docs/Web/JavaScript)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>プロトタイプベースのオブジェクト指向|C<br>Java<br>Perl<br>Python<br>Scheme<br>Self<br>CoffeeScript|Haxe<br>Dart<br>TypeScript<br>CoffeeScript<br>ActionScript<br>Node.js<br>WebAssembly<br>Kotlin|

#### 特徴

- 実質的に唯一のWebブラウザ上で動作するプログラミング言語
- ECMAScript6（ECMAScript 2015）
  - クラス定義
  - モジュール
  - イテレータ
  - for .. ofループ
  - ジェネレーター
  - アロー関数
  - 定数宣言
  - テンプレート文字列
  - など

#### 活用するシーン

- Webプロントエンド
- Webアプリケーション
- スマートフォンアプリ
- デスクトップ

#### JavaScriptのFizzBuzz

```javascript
function fizzbuzz(i) {
  switch (i) {
    case i % 3 == 0 && i % 5 == 0:
      return "FizzBuzz";
    case i % 3 == :
      return "Fizz";
    case i % 5 == 0:
      return "Buzz";
    default:
      return i;
  }
}

for (var i = 1; i <= 100; i++) {
  console.log(fizzbuzz(i));
}
```

#### ECMAScriptとJavaScriptの違い

- ECMAScript
  - JavaScriptの標準規格

#### JavaScriptは誰が作っているのか

- JavaScriptのもととなる仕様のECMAScript
  - ECMAのTC39というグループが策定を進める
- TC39
  - Mozilla、Apple、GoogleなどのJavaScriptを実装する側、JavaScriptで実際にWebアプリケーションなどを構築する側など複数の企業団体から集まったメンバーで運営される
  - 現代のJavaScriptはTC39によって仕様が策定され、JavaScript処理系はWebブラウザ提供者の企業や団体が作っていると考えていい

#### altJS

- altJS
  - 何らかのプログラミング言語からJavaScriptに変換して実行する言語

#### ES2015の機能を生かしたFizzBuzz

```javascript
// 配列を101個生成し、keys()で0~101まで連番を振って、その上で最初の0を取る
const nums = [...Array(100 +1).keys()].slice(1);

const isFizz = n => n % 3 === 0;
const isBuzz = n => n % 5 === 0;

const getFizzBuzz = (i) => {
  switch (i) {
    case isFizz(i) && isBuzz(i):
      return "FizzBuzz";
    case isFizz(i):
      return "Fizz";
    case isBuzz(i):
      return "Buzz";
    default:
      return i;
  }
}

// 配列numsの各要素に対してmapでgetFizzBuzz関数を適用し、配列を返す
// その配列をforEachで個別に表示する
nums.map(v => getFizzBuzz(v)).forEach((v,i) => console.log(v);)
```

---

### Node.js Webサーバーで動作するJavaScript実行エンジン

- [Webサイト](https://nodejs.org/en/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>プロトタイプベースのオブジェクト指向|JavaScript|Deno|

#### 特徴

- JavaScript実行エンジン
  - V8エンジンを利用しつつ、Webサーバー向けの機能を追加したもの
- ブラウザ抜きで動かすための環境
- ノンブリッキングI/O
  - ネットワークやファイルの入出力など実行に時間がかかる処理を完了するまで待たず、次の処理を行って、処理が完了した時点であらためて完了時の処理を実行するもの
  - プログラム中の待ちの時間が減らせる
- イベントループ
- 大量のアクセスに対応するWebアプリケーションを作成しやすい
- npm
  - Node.jsのライブラリを手軽にインストールできるパッケージマネージャー
- ローカル環境で開発ツールを動作させるのに使える
- 大量アクセスによる性能劣化の防止
- クライアント1万台（ck10k）問題が起こらない

#### 活用するシーン

- Webアプリケーション
- コマンドライン

#### Node.js（JavaScript）のFizzBuzz

- V8搭載により、ECMAScriptの最新仕様に追随している
- ES2015で導入されたクラス定義の機能を利用

```javascript
// FizzBuzzクラスを定義
class FizzBuzz {
  // インスタンス生成時にジで王的に実行されるメソッド
  constructor(max) {
    this.max = max;
    this.cur = 1;
  }

  // getをつけてメソッドをプロパティのように使えるゲッターにする
  get isFizz() { return this.cur % 3 == 0}
  get isBuzz() { return this.cur % 5 == 0}
  get value() {
    if(this.isFizz && this.isBuzz) return "FizzBuzz";
    if(this.isFizz) return "Fizz";
    if(this.isBuzz) return "Buzz";
    return this.cur;
  }
  get isEnd() {
    return this.max < this.cur;
  }

  // カーソルを次に移動する関数
  next() {
    this.cur++;
  }

  // isEndがtrueになるまで繰り返し、カーソルを勧めてFizzBuzzの結果を出力する
  run() {
    while(!this.isEnd) {
      console.log(this.value);
      this.next();
    }
  }
}

// オブジェクトを生成して実行
const fb = new FizzBuzz(100);
fb.run();
```

---

### TypeScript　JavaScriptのスーパーセットで大規模アプリの開発向け

- [Webサイト](https://www.typescriptlang.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>プロトタイプベースのオブジェクト指向<br>トランスパイル|JavaScript<br>Java<br>C#||

#### 特徴

- JavaScriptのスーパーセット（上位互換）の文法
- JavaScriptにトランスパイル（変換）して使う
- 型に関する能力が弱いJavaScriptを補完
- 型を付け加えて大規模開発でも使いやすいように設計されている
- 静的型付け言語になったことで、**開発環境でのコード補完や型の間違いを指摘できる**
- 型定義はCのヘッダファイルと似た仕組み
- 型推論
  - 型注釈を省略できる
  - すべての変数や関数に型を書くような盆雑さがなく、必要なところだけ使える
- 型があると、バグを減らせたり、エディターの補完機能が使いやすくなったりする

#### 活用するシーン

- Webフロントエンド
- Webアプリケーション
- スマートフォンアプリ
- デスクトップ

#### TypeScriptのFizzBuzz

```typescript
const fizzbuzz = (num: number): string => {
  const isFizz = (i: number): boolean => i % 3 === 0
  const isBuzz = (i: number): boolean => i % 5 === 0
  if(isFizz(num) && isBuzz(num)) return 'FizzBuzz'
  if(isFizz(num)) return 'Fizz'
  if(isBuzz(num)) return 'Buzz'
  return num.toString()
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzbuzz(i))
}
```

---

### Dart　JavaScriptの置き換えからモバイルアプリ開発まで幅広く

- [Webサイト](https://dart.dev/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>オブジェクト指向<br>トランスパイル|JavaScript<br>Java<br>C#<br>Erlang<br>Haxe<br>CoffeeScript||

#### 特徴

- JavaScript対抗としては普及せず
- Flutterのモバイルアプリ開発で人気
  - パフォーマンスと生産性を両立したクライアント向け言語に進化
- ユーザーインターフェイス構築が得意なプログラミング言語
- JavaScriptへのトランスパイルとクロスプラットフォームでモバイルアプリ開発できるフレームワーク
- 静的型付け
- クラスベースのオブジェクト指向言語
- クライアント、サーバーを分けることなく、同一の言語出開発できる
- gRPC用のライブラリも公開されている
- Dartの実行環境
  - コンパイル言語
  - 仮想マシンで即時実行できるインタプリタ言語
  - 開発時は使いやすいdartインタプリタ（仮想マシン）
  - 実際にデプロイ（利用）するときは高速なdart2nativeによるコンパイル
  - JavaScript用途ならトランスパイル
- Dart2.0以降ではクライアント重視に変わっている
- **Flutter**
  - クロスプラットフォームのアプリ開発フレームワーク
  - Android/iOSのスマートフォン向けアプリを開発できる

#### 活用するシーン

- Webフロントエンド
- Webアプリケーション（APIサーバー）
- スマートフォンアプリ

#### DartのFizzBuzz

```dart
isFizz(int i) { return i % 3 == 0; }
isBuzz(int i) { return i % 5 == 0; }

fizzbuzz(int i) {
  if (isFizz(i) && isBuzz(i)) return "FizzBuzz";
  if (isFizz(i)) return "Fizz";
  if (isBuzz(i)) return "Buzz";
  return i;
}

// プログラムはmain()関数から始まる
main() {
  for (var i = 1; i <= 100; i++) {
    var result = fizzbuzz(i);
    print(result);
  }
}
```

---

### WebAssembly　Webブラウザ用のアセンブリ言語

- [Webサイト](https://webassembly.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け|JavaScript<br>アセンブリ<br>asm.js||

#### 特徴

- さまざまな言語で書いたコードをWebAssemblyで出力して高速実行できる
- JavaScript以外、唯一Webブラウザ上で実行できるプログラミング言語
- 直接書くというよりも他言語からの変換で生成することを前提としている
- C/C++、Rustから変換されるケースが知られている
- JavaScriptを補う言語に近い
- WebAssemblyだけでJavaScriptができるすべての操作が単独でできるわけではない
- 高速性
- JavaScript以外の言語から実行ファイルを作成できる
- Webブラウザ側で高速な性能を出したいところに使う
- Webブラウザ上でCADアプリケーション、画像/動画編集ソフトを動かすなど
- Webブラウザだけでなく、Node.jsやGraalVMでも動作する
- 統計処理や複雑なアニメーション、ゲームなど速度が求められるケース
  - JavaScriptの動的型付けでは限界があるときに使う

#### 活用するシーン

- Webフロントエンドの複雑な処理

#### WebAssemblyのコード（WAT、WebAssembly Text format）

```wasm
;; 引数$aと$bを加算する関数の定義
;; WebAssemblyでは各ファイルがモジュールとして構成されている
(module
  ;; 関数の引数と戻り値を定義
  (export "add" (func $add))
  ;; i32は32ビット整数を意味する
  ;; WebAssemblyで32ビット整数を足し合わせる命令を呼び出す
  (func $add (param $a i32)(param $b i32) (result i32)
    (return
      ;; 関数をJavaScriptから使うために、export宣言を行う
      (i32.add
        (get_local $a)
        (get_local $b)
      )
    )
  )
)
```

---

### Java　スマートフォンやWebなど幅広く利用されるオブジェクト指向言語

- [Webサイト](https://java.com/en/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>オブジェクト指向|C<br>C#<br>Eiffel<br>Smalltalk<br>Objective-C<br>C++|C#<br>Scala<br>Kotlin<br>D<br>Dart<br>Clojure<br>Groovy<br>Haxe<br>PHP<br>Python<br>JavaScript<br>TypeScript<br>Processing|

#### 特徴

- 代表的なオブジェクト指向言語
  - C++とSmalltalkと比べて比較的記述がわかりやすい
- プラットフォーム非依存を目標にして、高性能な仮想マシン上で動く
- マルチスレッドを言語仕様に含んで、並行計算が可能
- JRE（Java Runtime Engine）
  - Javaのプログラムは、Javaバイトコードにコンパイルされて、JRE（Java実行環境）上で実行される
  - javac
    - Javaをバイトコードにコンパイルするコマンド
  - java
    - バイトコードを事項するコマンド
- サーブレット
  - Webページを動的に生成できる技術
- JSP
  - サーブレットをHTMLテンプレート上に書ける
- Tomcat
  - これらを動かすのに使われるソフトウェア

#### 活用するシーン

- Webアプリケーション
- スマートフォンアプリ
- 事務処理
- バッチ処理

#### JavaのFizzBuzz

```java
// オブジェクト指向を利用して、クラスを定義する
public class FizzBuzz {
  private int max;
  // クラス生成時に実行されるコンストラクタを定義する
  public FizzBuzz(int max) {
    this.max = max;
  }

  // クラス内でのみ有効な変数maxを使って、FizzBuzzを繰り返す
  public void run() {
    for (int i = 1; i <= this.max; i++) {
      printNum(i);
    }
  }

  public void printNum(int i) {
    if (i % 3 == 0 && i % 5 == 0) {
      System.out.println("FizzBuzz");
    }else if (i % 3 == 0) {
      System.out.println("Fizz");
    }else if (i % 5 == 0) {
      System.out.println("Buzz");
    } else {
      System.out.println(i);
    }
  }

  // Javaではmainメソッドを起点として実行される
  public static void main(String[] args) {
    FizzBuzz obj = new FizzBuzz(100);
    obj.run();
  }
}
```

#### JVM Java仮想マシン

- JVM（Java Virtual Machine、Java仮想マシン）
  - Javaのプログラムを動かすために必要なソフトウェア
  - Javaバイトコードとして定義された命令セットを実行するスタック型の仮想マシン
- JVMは実行速度に優れていることで知られている
  - JVM上で動作するプログラミング言語の開発も進む
  - Scala、Groovy、Kotlinなど

#### フレームワークでWeb開発を加速

- Spring、Play、Jakarta EEなど

#### Java SE、Java EE、JDKの違い

- JREはローカルでJavaを実行するのに使う
  - 以前はOracleが単体配布をしていたが、現在はJDKに含まれる
- Java SE（Java Standard Edition）
  - Javaの基本機能をまとめたもの
- Java EE（Java Enterprise Edition）
  - Java SEを元にしつつ、Webアプリの開発に役立つ拡張機能を追加したもの
  - 現在はJakarta EEという名称になっている
- JDK（Java Development Kit）
  - Javaのアプリを開発する際に必要
  - OpenJDK、AdoptOpenJDKなど

#### ビルドツール&パッケージマネージャーのMaven、Gradle

- Javaのビルドツール
  - Maven、Gradle
    - それぞれパッケージマネージャーのように働く
    - 外部のMavenリポジトリ（パッケージリポジトリ）を指定してビルドに必要なパッケージを取得できる
  - Maven
    - 設定をXMLで記述する
  - Gradle
    - カスタマイズが容易なGroovyで設定が書ける

---

### Kotlin　簡潔に書けて汎用的なAndroidの公式開発言語

- [Webサイト](https://kotlinlang.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>オブジェクト指向<br>トランスパイル|Java<br>Groovy<br>C#<br>Scala<br>JavaScript||

#### 特徴

- JVM言語
  - Javaを高速に動作させる仮想マシン上で動作するプログラミング言語
  - Javaを簡潔・安全にしたような文法
  - Javaのように汎用的な言語を目指して開発されている
  - Javaのリソースも利用できる
  - **コルーチン**を導入
  - 非同期プログラミングも得意
- キーワードの短縮化
- ヌル安全（Null Safety）
  - プログラムに意図せぬnullの混入を防ぐ仕組み
  - NullPointerExceptionが起きにくくなる

#### 活用するシーン

- スマートフォンアプリ
- Webアプリケーション

#### KotlinのFizzBuzz

```kotlin
// main関数から処理を開始する
fun main(args: Array<String>) {
  for(i in 1..100) {
    var res = fizzbuzz(i)
    // JavaのAPIがKotlinではそのまま使える
    System.out.println(res)
  }
}

fun fizzbuzz(i: int): String {
  // whenを使って次々と条件を判定する
  return when {
    i % 3 == 0 && i % 5 == 0 -> "FizzBuzz"
    i % 3 == 0 -> "Fizz"
    i % 5 == 0 -> "Buzz"
    else -> i.toString()
  }
}
```

#### 進化を続けるKotlin

- ユースケースをマルチプラットフォームに広げようとしている
  - ネイティブへのコンパイル（Kotlin for Native）
  - JavaScriptへのトランスパイル機能（Kotlin for JavaScript）

---

### Processing　デジタルアートとデザインのためのビジュアル表現言語

- [Webサイト](https://processing.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>オブジェクト指向|Java<br>Design by Numbers||

#### 特徴

- インタラクティブなビジュアルデザインが手軽に作れる
  - マウス、キーボードからの入力も手軽に操作できる
- デジタルアートのためのプログラミング言語
- 視覚的なフィードバックを優先する
- 図形を描く
- オブジェクトを動かす
- ビジュアル表現の入門に適している

#### 活用するシーン

- アート/デザイン
- 教育

#### コードで円を描く

```processing
// プログラムの最初にsetup関数を呼び出す
// 初期化処理
void setup() {
  // 背景色
  background(255,255,255);
  // キャンバスサイズ
  size(640, 640);
  noStroke();
}

// 自動的にdraw関数を呼び出す
// 指定しない限り、繰り返され続ける
// アニメーションは複数のがぞうで　構成されるが、draw関数には描画の1コマを記述する
void draw() {
  for (int i = 0; i < 50; i++) {
    fill(random(100, 255), random(240, 255), random(100, 255), 200);
    float cSize = random(0, width/2);
    // 円の描画
    ellipse(random(width), random(height), cSize, cSize);
  }
  // ループしないための設定
  noLoop();
}
```

---

### Swift　AppleによるiOS/macOS向けプログラミング言語

- [Webサイト](https://swift.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>オブジェクト指向|Rust<br>Haskell<br>Ruby<br>Objective-C<br>Python<br>C<br>C#||

#### 特徴

- SwiftのコンパイラはLLVMのフロントエンド
  - コードの最適化画行いやすくなっている
- クロージャ
- タプル
- ジェネリックプログラミング

#### 活用するシーン

- スマートフォンアプリ
- デスクトップアプリ

#### SwiftのFizzBuzz

```swift
func fizzbuzz(i:int) -> String {
  if i % 3 == 0 && i % 5 == 0 { return "FizzBuzz" }
  if i % 3 == 0 { return "Fizz" }
  if i % 5 == 0 { return "Buzz" }
  return String(i);
}

for num in 1..100 {
  print(fizzbuzz(i:num))
}
```

#### Swiftの変数

- var
  - 通常の変数宣言
- let
  - 定数扱いで、後から値の変更ができない
- 型に厳格
  - 異なる型の変数に代入するとエラーになる

#### Swiftが重視するポイント

- 安全性
  - デフォルトで入っている仕組み
    - メモリ安全（メモリ破壊を招かない）
    - 型安全（型のエラーを招かない）
    - ARC（Automatic Reference Counting）メモリ管理仕組み
- 速度
  - LLVMの採用
- デザインパターン
  - オブジェクト指向を下敷きにしながら、なるべく書きやすい言語仕様を保つ

---

### C#　Windowsの定番言語　UnityやXamarinで人気がさらに加速

- [Webサイト](https://docs.microsoft.com/ja-jp/dotnet/csharp/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|静的型付け<br>オブジェクト指向|C<br>C++<br>Delphi<br>Eiffel<br>Java|D<br>F#<br>Java<br>TypeScript<br>Dart<br>Kotlin<br>Swift|

#### 特徴

- .Net Frameworkという実行環境の上で動かすことを目的に作られる
  - Windows向けのアプリケーションの実行環境
  - C#で書かれたコードは、最初、共通中間言語（CIL）にコンパイルされる
  - .Net frameworkではCILをネイティブコードに変換してから実行する
  - 今後はクロスプラットフォームの `.Net Core` が中心にとらえられる
- Javaと比較して語られる
  - 共通中間言語（CIL）にコンパイルされてから実行される点
  - 文法的な類似点
- .Net Core
  - Windows、Mac、Linuxをサポートする
  - WPF（デスクトップアプリケーション）作成もサポートしている

#### 活用するシーン

- Webアプリケーション
- デスクトップ
- ゲーム開発
- スマートフォンアプリ

#### C#の標準化

- C#の仕様の標準化
  - ECMA-334
  - ISO/IEC 23270:2003
  - JIS X 3015
  - など
- OSSのMonoが誕生し、他のOSでもC#が動作可能になる

#### C#のFizzBuzz

```csharp
class FizzBuzz {
  // プログラムは Main関数を起点として実行される
  public static void Main() {
    for (int i = 1; i <= 100; i++) {
      if (i % 3 == 0 & i % 5 == 0) cout("FizzBuzz");
      else if (i % 3 == 0) cout("Fizz")
      else if (i % 5 == 0) cout("Buzz")
      else cout(i.ToString());
    }
  }
  // staticを指定して定義したメソッドはイブジェクトを生成することなく利用できる
  public static void cout(string s) {
    System.Concole.WriteLine(s);
  }
}
```

#### オブジェクト指向を使ったFizzBuzzのプログラム

```csharp
class FizzBuzz {
  int max;
  // クラスを生成したときに実行されるコンストラクタを定義
  FizzBuzz(int max) {
    this.max = max;
  }
  // クラス内でのみ有効な変数maxを使って、FizzBuzzを繰り返す
  void Run() {
    for (int i = 1; i <= 100; i++) {
      System.Console.WriteLine(this.Check(i));
    }
  }

  static Check(int i) {
    if (i % 3 == 0 & i % 5 == 0) return "FizzBuzz";
    if (i % 3 == 0) return "Fizz";
    if (i % 5 == 0) return "Buzz";
    return i.ToString();
  }
  
  // プログラムは Main関数を起点として実行される
  public static void Main() {
    FizzBuzz obj = new FizzBuzz(100);
    obj.Run();
  }
}
```

---

### AppleScript macOSのスクリプト言語

- [Webサイト](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>手続き型|HyperTalk<br>Objective-C||

#### 特徴

- macOS向けスクリプト言語
- バッチ処理
- アプリ自動操作
- ファイル処理
- タスク実行
- ワークフロー自動化
- macOSのGUI操作

#### 活用するシーン

- スクリプト

#### AppleScriptのFizzBuzz

```
on fizzbuzz(i)
  if i mod 15 is 0 then
    return "FizzBuzz"
  else if i mod 3 is 0 then
    return "Fizz"
  else if i mod 5 is 0 then
    return "Buzz"
  else
    return i as string
  end if
end fizzbuzz

set res to ""
repeat with i from 1 to 100
  set res to res & fizzbuzz(i) & "\n"
end repeat
```

---

### R　統計解析向けの言語と実行環境

- [Webサイト](https://www.r-project.org/)

|分類|影響を受けた言語|影響を与えた言語|
|:---:|:---:|:---:|
|動的型付け<br>手続き型|S<br>Scheme||

#### 特徴

- データ分析に特化
- ベクトル処理
  - データ集合を柔軟に処理できる用に工夫されている
- 統計処理に役立つ機能を持っている
- データのグラフ化
- 図解化の機能
- さまざまな入力ソースからデータを読み込める
  - Excelファイル
  - CSV
  - ODBC
  - など
- データサイエンス、データ解析、AI分野でよく使われる
- 150万行のデータの読み込みができる
- Excelよりも手軽かつ高速にデータ分析できる

#### 活用するシーン

- データ分析
- 統計

#### RのFizzBuzz

```r
alias<-seq(100)
blist<-alist
blist[alist%%3==0]<-"Fizz"
blist[alist%%5==0]<-"Buzz"
blist[alist%%15==0]<-"FizzBuzz"
print(blist)
```
