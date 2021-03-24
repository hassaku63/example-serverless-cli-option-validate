# README

関連記事: [Serverless Framework - CLI のオプションを必須指定扱いにする Tips](https://zenn.dev/hassaku63/articles/5eb5275107491c) のサンプル実装

ここでは、 `--region` のオプション指定がない場合に `serverless` CLI がエラーで実行が終了するような仕組みを実装した。

動作環境:

```bash
$ npx sls --version          
Framework Core: 2.31.0 (local)
Plugin: 4.5.2
SDK: 4.2.2
Components: 3.7.6
```

## 何のための実装？

手元の開発環境、もしくは CI 環境でデプロイコマンドを実行する場合、typo などによって意図しないリソース変更が実行されないようにしたい。

AWS を使っている場合では、特に `--region` や `--stage` といったパラメータはオプションから供給することが多い。
これらのオプションや、あるいは `provider` セクションでユーザーがパラメータを明示しない場合、 Serverless framework は自身が持つデフォルト値の設定 (stage=dev, region=us-east-1) を適用してしまう。
これは意図しないデプロイの可能性を孕んでおり、あまり安全な挙動ではないと考える。
よって、オプションが無指定であった場合は、勝手にデフォルト値を埋めて実行継続するより、むしろエラーを返す挙動であった方が望ましい。
