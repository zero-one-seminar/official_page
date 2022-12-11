# nuinfo-seminar2
ゼロイチゼミのサイトのソース管理用リポジトリ．
サイト：https://nu-zero-one.netlify.app/

## Docker環境
割と簡単めでDockerの勉強にもなるので興味ある人はやってみて！

<details><summary>初心者向けの詳細な解説</summary>
<div>

### 1. Dockerのダウンロード
Dockerデスクトップとかを入れて`docker`コマンドと `docker-compose`コマンドが動くようにしてください。

### 2. リポジトリに入る
このリポジトリをクローンして、
```bash
$ cd <クローン先のパス>/official_page
```
でディレクトリに入ります。

### 3. コンテナを立ち上げる
```shell
$ docker-compose up -d
```
で自動的にビルドが始まり、コンテナが立ち上がります。
（最初は時間がかかるかも）

```shell
$ docker-compose up -d
...
Creating nuinfo-seminar-app ... done
```

この表示が出たら完了です。

### 4. コンテナの中に入る
先ほど立ち上げたコンテナは`alpine-linux`というOSを使っているので、この中に入って作業をします。

```shell
// ここはローカルのシェル
$ docker-compose exec app sh
// ここからalpine-linux
/app #
```

`/app #` という表示が出たら、コンテナの中に入ることに成功です！

### 5. hexoが使えるか試す
`Dockerfile`のここの部分でインストールされているので使えるようになっているはずです。
```Dockerfile
RUN npm install -g hexo-cli
```

バージョンを確認してみましょう。
```shell
/app # hexo --version
hexo: 6.2.0
hexo-cli: 4.3.0
...
```

これで[hexoのコマンド](https://github.com/zero-one-seminar/official_page#commands)が使えるようになっているはずです。

### 6. Docker環境を抜ける
`Ctrl+D`（macの人は`Control+D`）で抜けられます。ただしこれだけだとDockerのコンテナが立ち上がったままになってしまうので、

```shell
$ docker-compose stop
```

をしてコンテナを一時停止してください。（メモリを圧迫します）

コンテナ自体を削除したいときは、

```shell
$ docker-compose down
```

を実行しましょう。

**初心者向け解説終わり**

---

</div></details>


- コンテナ立ち上げ
```shell
$ docker-compose up -d
```

- コンテナに接続
```
$ docker-compose exec app sh
```


## Commands
### !!最初にやること!!
```shell
yarn install
```
を実行して、諸々のパッケージのインストールをしてください。（じゃないと文字化けします）


- Build
```shell
/app # yarn build
or
/app # hexo generate
```
- Serve
```shell
/app # yarn server
or
/app # hexo server
```

詳しくは公式サイトを参照してください。
- https://hexo.io/docs/commands.html

## Deploy
@nac-39個人のNetlifyでホスティングしています。
mainブランチに変更があった時にビルドがかかるようになっています。
