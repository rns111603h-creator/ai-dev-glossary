import { describe, expect, test } from "vitest";
import type { GlossaryTerm } from "../src/data/glossary";
import { buildGlossaryIndex, filterGlossaryTerms, getGlossaryStats } from "../src/utils/glossarySearch";

const terms: GlossaryTerm[] = [
  {
    id: "react",
    term: "React",
    reading: "りあくと",
    aliases: ["React.js"],
    category: "フロントエンド",
    tags: ["JavaScript", "UI"],
    summary: "UIをコンポーネント単位で作るJavaScriptライブラリ。",
    description: "状態に応じてUIを効率的に更新できます。",
    examples: ["ボタンを部品にする。"],
    relatedTerms: ["Component", "JSX"],
    createdAt: "2026-07-09",
    updatedAt: "2026-07-09"
  },
  {
    id: "xss",
    term: "XSS / Cross-Site Scripting",
    reading: "えっくすえすえす",
    aliases: ["クロスサイトスクリプティング"],
    category: "セキュリティ",
    tags: ["Web", "攻撃"],
    summary: "悪意あるスクリプトをWebページに注入して実行させる攻撃。",
    description: "個人情報漏えいなどにつながります。",
    relatedTerms: ["CSRF"],
    createdAt: "2026-07-09",
    updatedAt: "2026-07-09"
  }
];

describe("filterGlossaryTerms", () => {
  test("searches across term, aliases, description, tags, and related terms without case sensitivity", () => {
    expect(filterGlossaryTerms(terms, { query: "react.js" }).map((term) => term.id)).toEqual(["react"]);
    expect(filterGlossaryTerms(terms, { query: "csrf" }).map((term) => term.id)).toEqual(["xss"]);
    expect(filterGlossaryTerms(terms, { query: "javascript" }).map((term) => term.id)).toEqual(["react"]);
  });

  test("combines query, category, and tag filters", () => {
    const result = filterGlossaryTerms(terms, {
      query: "Web",
      category: "セキュリティ",
      tag: "攻撃"
    });

    expect(result.map((term) => term.id)).toEqual(["xss"]);
  });
});

describe("buildGlossaryIndex", () => {
  test("builds alphabet, reading, category, and tag indexes", () => {
    const index = buildGlossaryIndex(terms);

    expect(index.alphabet.R.map((term) => term.id)).toEqual(["react"]);
    expect(index.reading["え"].map((term) => term.id)).toEqual(["xss"]);
    expect(index.categories["フロントエンド"].map((term) => term.id)).toEqual(["react"]);
    expect(index.tags.UI.map((term) => term.id)).toEqual(["react"]);
  });
});

describe("getGlossaryStats", () => {
  test("counts terms, unique categories, and unique tags", () => {
    expect(getGlossaryStats(terms)).toEqual({
      terms: 2,
      categories: 2,
      tags: 4
    });
  });
});
