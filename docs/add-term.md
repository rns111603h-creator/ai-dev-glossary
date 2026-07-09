# 用語追加手順

新しい用語は `src/data/glossary.ts` の `glossaryTerms` 配列に追加します。

## 入力ルール

- `id` は英数字kebab-caseにします。
- `term` は画面に出す表示名を入れます。
- `reading` は日本語の読み、または英語の読み方を入れます。
- `aliases` には略語・別表記・日本語訳を入れます。
- `category` は既存カテゴリに合わせます。新カテゴリが必要なら追加して構いません。
- `tags` は検索しやすいように3から6個程度入れます。
- `summary` は1文で書きます。
- `description` は初心者にもわかるように書きます。
- `whyImportant` は実務上なぜ知るべきかを書きます。
- `commonMisunderstandings` は誤解されやすい点を書きます。
- `examples` は具体例またはたとえ話を書きます。
- `relatedTerms` は既存用語とのつながりを書きます。
- 追加後は重複IDがないか確認します。

## 確認コマンド

```bash
npm test
npm run build
```

`validateGlossaryTerms` が必須項目、日付形式、重複IDを確認します。
