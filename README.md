このリポジトリは Next.js を使って作成された Web アプリケーションのプロジェクトです。

以下は、このプロジェクトを初めて見る人向けに整理した説明です。ローカルで動かす手順、主要なファイルの役割、よくある注意点をまとめています。

**前提環境**
- Node.js (v16 以上を推奨)
- 好みのパッケージマネージャ: `npm` / `pnpm` / `yarn`

**ローカルでの起動方法**
1. 依存パッケージをインストールします：

```bash
npm install
# または
pnpm install
# または
yarn install
```

2. 開発サーバを起動します：

```bash
npm run dev
# または
pnpm dev
# または
yarn dev
```

3. ブラウザで `http://localhost:3000` にアクセスします。

**主要なファイルとディレクトリ（開発時に参照する場所）**
- `app/page.tsx`: トップページ。表示の編集はここを変更します。
- `app/layout.tsx`: 全ページ共通のレイアウトを定義します。
- `components/`: 再利用可能な UI コンポーネント（例: `ImageGallery.tsx` とそのスタイル）。
- `lib/`: 外部 API クライアントやユーティリティ（このプロジェクトでは `microcms.ts` が含まれます）。
- `public/`: 画像や静的ファイルを配置。`/profile6.avif` のように参照できます。
- `app/**/*.module.css`: ページやコンポーネントごとのスタイル。

**外部サービス（microCMS）について**
- `lib/microcms.ts` を通して microCMS からデータを取得する構成になっている場合、API のキーやドメインはローカル環境変数（例: `.env.local`）に設定してください。環境変数名はコード内で参照されている名前に合わせます。

例：`.env.local`

```text
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=your-service-domain
NEXT_PUBLIC_MICROCMS_API_KEY=your-api-key
```

**よくある問題と対処**
- サーバーコンポーネント（`app/` 配下の一部ファイル）で `Math.random()` のような不純な関数を直接呼び出すとエラーになります。乱数やタイミング依存の処理はクライアントコンポーネント（`'use client'` を付けたファイル）で実行してください。
- 画像パスは `public/` 配下に置けば `/画像名` で扱えます。

**追加メモ**
- README にプロジェクト固有の環境変数名や microCMS の設定例をさらに追記できます。どの程度の詳細を加えるか指示してください。

---

必要であれば、この README からさらに「デプロイ手順（Vercel など）」「テスト実行方法」「コントリビューションルール」などを追記します。希望があれば教えてください。
