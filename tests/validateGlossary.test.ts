import { describe, expect, test } from "vitest";
import type { GlossaryTerm } from "../src/data/glossary";
import { validateGlossaryTerms } from "../src/utils/validateGlossary";

const validTerm: GlossaryTerm = {
  id: "react",
  term: "React",
  reading: "りあくと",
  aliases: ["React.js"],
  category: "フロントエンド",
  tags: ["JavaScript", "UI"],
  summary: "UIをコンポーネント単位で作るJavaScriptライブラリ。",
  description: "ReactはWeb画面を部品として組み立てるためのライブラリです。",
  createdAt: "2026-07-09",
  updatedAt: "2026-07-09"
};

describe("validateGlossaryTerms", () => {
  test("accepts valid glossary data", () => {
    expect(validateGlossaryTerms([validTerm])).toEqual([]);
  });

  test("reports duplicate ids, required fields, missing tags, and invalid dates", () => {
    const errors = validateGlossaryTerms([
      validTerm,
      {
        ...validTerm,
        id: "react",
        term: "",
        category: "",
        tags: [],
        summary: "",
        createdAt: "2026/07/09"
      }
    ]);

    expect(errors).toContain("id 'react' is duplicated.");
    expect(errors).toContain("term at index 1 has an empty term.");
    expect(errors).toContain("term 'react' has an empty category.");
    expect(errors).toContain("term 'react' has no tags.");
    expect(errors).toContain("term 'react' has an empty summary.");
    expect(errors).toContain("term 'react' has an invalid createdAt date.");
  });
});
