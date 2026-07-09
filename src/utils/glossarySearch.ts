import type { GlossaryTerm } from "../data/glossary";

export type GlossaryFilters = {
  query?: string;
  category?: string;
  tag?: string;
};

export type GlossaryIndex = {
  alphabet: Record<string, GlossaryTerm[]>;
  reading: Record<string, GlossaryTerm[]>;
  categories: Record<string, GlossaryTerm[]>;
  tags: Record<string, GlossaryTerm[]>;
};

const collator = new Intl.Collator("ja-JP", { numeric: true, sensitivity: "base" });

const normalize = (value: string) => value.trim().toLocaleLowerCase("ja-JP");

const searchableText = (term: GlossaryTerm) =>
  [
    term.term,
    term.reading,
    term.aliases?.join(" "),
    term.summary,
    term.description,
    term.tags.join(" "),
    term.relatedTerms?.join(" ")
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase("ja-JP");

export const sortGlossaryTerms = (terms: GlossaryTerm[]) =>
  [...terms].sort((a, b) => {
    const aKey = a.reading || a.term;
    const bKey = b.reading || b.term;
    return collator.compare(aKey, bKey);
  });

export const filterGlossaryTerms = (terms: GlossaryTerm[], filters: GlossaryFilters) => {
  const query = normalize(filters.query ?? "");

  return sortGlossaryTerms(
    terms.filter((term) => {
      const matchesQuery = query.length === 0 || searchableText(term).includes(query);
      const matchesCategory = !filters.category || term.category === filters.category;
      const matchesTag = !filters.tag || term.tags.includes(filters.tag);
      return matchesQuery && matchesCategory && matchesTag;
    })
  );
};

const alphabetKey = (term: GlossaryTerm) => {
  const first = term.term.trim().charAt(0).toUpperCase();
  return /^[A-Z]$/.test(first) ? first : "#";
};

const readingKey = (term: GlossaryTerm) => {
  const first = (term.reading || term.term).trim().charAt(0);
  return first || "#";
};

const addToIndex = (index: Record<string, GlossaryTerm[]>, key: string, term: GlossaryTerm) => {
  index[key] = index[key] ?? [];
  index[key].push(term);
};

export const buildGlossaryIndex = (terms: GlossaryTerm[]): GlossaryIndex => {
  const index: GlossaryIndex = {
    alphabet: {},
    reading: {},
    categories: {},
    tags: {}
  };

  for (const term of sortGlossaryTerms(terms)) {
    addToIndex(index.alphabet, alphabetKey(term), term);
    addToIndex(index.reading, readingKey(term), term);
    addToIndex(index.categories, term.category, term);
    for (const tag of term.tags) {
      addToIndex(index.tags, tag, term);
    }
  }

  return index;
};

export const getGlossaryStats = (terms: GlossaryTerm[]) => ({
  terms: terms.length,
  categories: new Set(terms.map((term) => term.category)).size,
  tags: new Set(terms.flatMap((term) => term.tags)).size
});

export const getCategories = (terms: GlossaryTerm[]) =>
  [...new Set(terms.map((term) => term.category))].sort(collator.compare);

export const getTags = (terms: GlossaryTerm[]) =>
  [...new Set(terms.flatMap((term) => term.tags))].sort(collator.compare);
