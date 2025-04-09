## 👁️ オブザーバブル型
`observable<T>`
- 値の変更を監視できる型。
  - メソッド:
    - `subscribe(callback: (T) => void): void`: 値の変更時に呼び出されるコールバックを登録。
    - `unsubscribe(callback: (T) => void): 登録されたコールバックを解除。
  - 例:
    ```ts
    const obs: observable<int> = observable(0);
    obs.subscribe((value) => console.log(value));
    obs.next(1); // コンソール出力: 1
    ```

## 📤 サブジェクト型
`subject<T>`
- `observable`を拡張し、値を発行できる型。
  - メソッド:
    - `next(value: T): void`: 値を更新し、登録されたコールバックを呼び出す。
    - `subscribe(callback: (T) => void): void`: 値の変更時に呼び出されるコールバックを登録。
  - 例:
    ```ts
    const subj: subject<int> = subject(0);
    subj.subscribe((value) => console.log(value));
    subj.next(1); // コンソール出力: 1
    ```

## 🔄 リアクティブプロパティ型
`ReactiveProperty<T>`
- プロパティの変更を監視し、リアクティブな動作を提供する型。
  - メソッド:
    - `get(): T`: 現在の値を取得。
    - `set(value: T): void`: 値を設定し、変更を通知。
    - `subscribe(callback: (T) => void): void`: 値の変更時に呼び出されるコールバックを登録。
  - 例:
    ```ts
    const prop: ReactiveProperty<string> = ReactiveProperty('John');
    prop.subscribe((value) => console.log('Name changed to:', value));
    prop.set('Jane'); // コンソール出力: Name changed to: Jane
    ```

## 📏 ベクトル
`vector<TYPE_NAME>`
- 同じ型の要素を持つ1次元配列。
  - 例:
    ```ts
    const vec: vector<int> = [1, 2, 3];
    ```

## 🧮 行列
`matrix<TYPE_NAME>`
- 2次元の数値データを表す配列。
  - 例:
    ```ts
    const mat: matrix<int> = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    ```

## 🔍 正規表現
`regex`
- 文字列のパターンマッチングを行うための型。
  - メソッド:
    - `test(input: string): boolean`: 入力文字列が正規表現に一致するかを判定。
    - `exec(input: string): RegExpExecArray | null`: 入力文字列に一致する部分を取得。
  - 例:
    ```ts
    const pattern: regex = /hello/;
    console.log(pattern.test('hello world')); // コンソール出力: true
    console.log(pattern.test('goodbye world')); // コンソール出力: false

    const match = pattern.exec('hello world');
    if (match) {
        console.log(`Matched: ${match[0]}`); // コンソール出力: Matched: hello
    }
    ```

## 🔍 正規表現 (関数チェーン)
`regexBuilder`
- 正規表現を関数チェーンで構築し、操作するための型。
  - メソッド:
    - `startWith(pattern: string): regexBuilder`: 指定したパターンで始まる正規表現を追加。
    - `endWith(pattern: string): regexBuilder`: 指定したパターンで終わる正規表現を追加。
    - `contains(pattern: string): regexBuilder`: 指定したパターンを含む正規表現を追加。
    - `flags(flags: string): regexBuilder`: 正規表現のフラグを設定。
    - `build(): regex`: 構築した正規表現を生成。
  - 例:
    ```ts
    const builder: regexBuilder = regexBuilder()
        .startWith('hello')
        .contains('world')
        .endWith('!')
        .flags('i');

    const pattern: regex = builder.build();
    console.log(pattern.test('Hello amazing world!')); // コンソール出力: true
    console.log(pattern.test('Goodbye world!')); // コンソール出力: false
    ```

## 🌀 スタック
`stack<TYPE_NAME>`
- LIFO（後入れ先出し）構造のコレクション。
  - メソッド:
    - `push`: 要素を追加。
    - `pop`: 要素を削除。

## 📚 固定長配列
`fixedArray<TYPE_NAME, SIZE>`
- サイズが固定された配列。要素数を変更することはできない。
  - 例:
    ```ts
    const arr: fixedArray<int, 3> = fixedArray();
    const arr: fixedArray<int> = [0, 1, 2];
    ```