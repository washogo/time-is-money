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