import { describe, expect, test } from "vitest";
import { glossaryTerms } from "../src/data/glossary";
import { validateGlossaryTerms } from "../src/utils/validateGlossary";

describe("glossaryTerms", () => {
  test("contains the initial glossary data without validation errors", () => {
    expect(glossaryTerms.length).toBeGreaterThan(80);
    expect(validateGlossaryTerms(glossaryTerms)).toEqual([]);
  });
});
