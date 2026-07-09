import type { GlossaryTerm } from "../data/glossary";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export const validateGlossaryTerms = (terms: GlossaryTerm[]) => {
  const errors: string[] = [];
  const seenIds = new Set<string>();

  terms.forEach((term, index) => {
    if (seenIds.has(term.id)) {
      errors.push(`id '${term.id}' is duplicated.`);
    }
    seenIds.add(term.id);

    if (!term.term.trim()) {
      errors.push(`term at index ${index} has an empty term.`);
    }
    if (!term.category.trim()) {
      errors.push(`term '${term.id}' has an empty category.`);
    }
    if (!term.summary.trim()) {
      errors.push(`term '${term.id}' has an empty summary.`);
    }
    if (term.tags.length === 0) {
      errors.push(`term '${term.id}' has no tags.`);
    }
    if (!datePattern.test(term.createdAt)) {
      errors.push(`term '${term.id}' has an invalid createdAt date.`);
    }
    if (!datePattern.test(term.updatedAt)) {
      errors.push(`term '${term.id}' has an invalid updatedAt date.`);
    }
  });

  return errors;
};
