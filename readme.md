# 競プロ用 nCk 計算ツール

このリポジトリは、`index.html` / `styles.css` / `script.js` だけで動くシンプルな静的サイトです。

## GitHub での公開方法

### 1. GitHub に新規リポジトリを作成
1. GitHub にログインし、**New repository** から空のリポジトリを作成します。
2. リポジトリ名を決め、公開/非公開を選びます。

### 2. ローカルからリモートを登録して push
> 例: `https://github.com/<username>/<repo>.git`

```bash
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin <branch>
```

### 3. GitHub Pages で静的サイトとして公開
1. GitHub のリポジトリ画面で **Settings** → **Pages** を開きます。
2. **Build and deployment** で **Source** を `Deploy from a branch` にします。
3. ブランチ（例: `main`）とフォルダ（`/`）を選んで **Save** します。
4. 数十秒待つと、公開 URL が表示されます。

## 補足
- このサイトは静的ファイルだけで動くため、GitHub Pages に向いています。
- ブランチ名は環境に合わせて `main` / `master` / `work` などを指定してください。
