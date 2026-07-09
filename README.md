# AI・開発用語集

AI開発、Web開発、フロントエンド開発で出会う用語を、ローカルで検索・索引できる静的サイトです。外部DBやログインは使わず、Vite + React + TypeScript で完結します。

## セットアップ方法

```bash
npm install
```

## 起動方法

```bash
npm run dev
```

表示されたローカルURLをブラウザで開きます。

## 用語追加方法

用語データは `src/data/glossary.ts` の `glossaryTerms` 配列で管理します。追加ルールは `docs/add-term.md` を確認してください。

追加後は以下で確認します。

```bash
npm test
npm run build
```

## エージェントに追加依頼する方法

`docs/agent-add-term-template.md` を使って、追加したい用語、読み方、カテゴリ、タグ候補、知りたい文脈を埋めて依頼します。

## データ構造

```ts
export type GlossaryTerm = {
  id: string;
  term: string;
  reading?: string;
  aliases?: string[];
  category: string;
  tags: string[];
  summary: string;
  description: string;
  whyImportant?: string;
  commonMisunderstandings?: string[];
  examples?: string[];
  relatedTerms?: string[];
  sourceNote?: string;
  createdAt: string;
  updatedAt: string;
};
```

## 今後の拡張案

- JSONインポート/エクスポート
- Markdownでの用語管理
- SQLiteやローカルファイルDBへの移行
- Fuse.jsなどの全文検索ライブラリ導入
- LLM、RAG、AIエージェント、MCP、障害福祉DXカテゴリの追加
