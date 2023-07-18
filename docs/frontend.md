# 設計
基本的には以下の方針とする
- これから機能を追加したり削除したりを繰り返すので、UIに依存するコンポーネントと機能（ドメイン）に依存するコンポーネントを明確に分ける
- KISSの原則に則り、シンプルなファイル、ディレクトリ構成を目指す
- 実装段階で考えたことはコメントで必ず残す

## 参考にする原則、デザインパターン
### 原則
https://zenn.dev/nanagi/articles/0e899711611630
### Atomic Design
https://qiita.com/ren0826jam/items/b49a4c4e4140ff32bba3
### bullet-proof
https://zenn.dev/meijin/articles/bulletproof-react-is-best-architecture
https://zenn.dev/t_keshi/articles/bulletproof-react-2022
### Container/Presentationalパターン
https://zenn.dev/kazu777/articles/9460c75b7cd8d1

# コーディング規約
- 全般
    - JavaScriptのコーディング規約を踏襲する
    - [React.jsの公式ドキュメント](https://ja.react.dev/)に準拠する
    - [単一責任の原則](https://ja.wikipedia.org/wiki/%E5%8D%98%E4%B8%80%E8%B2%AC%E4%BB%BB%E3%81%AE%E5%8E%9F%E5%89%87)に則り、関数やコンポーネントの責務を適切に設計する
        - 過度な責務を持っている場合は分割したり、設計を見直す
        - 肥大化するとコードの可読性が下がり、問題も難解になる
- 命名規則
    - 関数コンポーネント名はパスカルケースとする
    - 定数名はアッパーケースとする
- JSX
    - 複数の要素を返す場合は、スタイルを適用する必要がなければ親タグは`<></>`（フラグメント）を使う
    - `map()`を使って要素を生成する場合は、基本的にkeyに指定する値にindexは使わない
- useState
    - stateを定義する判断基準は以下とする
        - 時間が経っても変わらないものはstateにしない
        - 親コンポーネントでpropsを経由して渡されるものであればstateにしない
        - **コンポーネント内にある既存のstateやpropsに基づいて計算可能なデータであればstateにしない**
    - [DRY（Don’t Repeat Yourself; 繰り返しを避ける）](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)を守る
    - 初期値は設定する