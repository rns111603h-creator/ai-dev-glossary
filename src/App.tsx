import { useMemo, useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { GlossaryCard } from "./components/GlossaryCard";
import { GlossaryIndex } from "./components/GlossaryIndex";
import { SearchBox } from "./components/SearchBox";
import { TagFilter } from "./components/TagFilter";
import { glossaryTerms } from "./data/glossary";
import { buildGlossaryIndex, filterGlossaryTerms, getCategories, getGlossaryStats, getTags } from "./utils/glossarySearch";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  const categories = useMemo(() => getCategories(glossaryTerms), []);
  const tags = useMemo(() => getTags(glossaryTerms), []);
  const stats = useMemo(() => getGlossaryStats(glossaryTerms), []);
  const index = useMemo(() => buildGlossaryIndex(glossaryTerms), []);
  const filteredTerms = useMemo(
    () => filterGlossaryTerms(glossaryTerms, { query, category, tag }),
    [query, category, tag]
  );

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setTag("");
  };

  return (
    <main>
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Local Knowledge Base</p>
          <h1>AI・開発用語集</h1>
          <p>
            AI開発、Web開発、フロントエンド開発で出会う用語を、あとから追加しやすい形で整理するローカル用語集です。
          </p>
        </div>
        <dl className="stats" aria-label="用語集の集計">
          <div>
            <dt>用語</dt>
            <dd>{stats.terms}</dd>
          </div>
          <div>
            <dt>カテゴリ</dt>
            <dd>{stats.categories}</dd>
          </div>
          <div>
            <dt>タグ</dt>
            <dd>{stats.tags}</dd>
          </div>
        </dl>
      </header>

      <section className="toolbar" aria-label="検索と絞り込み">
        <SearchBox value={query} onChange={setQuery} />
        <CategoryFilter categories={categories} selectedCategory={category} onChange={setCategory} />
        <TagFilter tags={tags} selectedTag={tag} onChange={setTag} />
        <button type="button" className="clear-button" onClick={clearFilters}>
          クリア
        </button>
      </section>

      <div className="layout">
        <GlossaryIndex index={index} onSelectCategory={setCategory} onSelectTag={setTag} />
        <section className="results" aria-live="polite">
          <div className="results-heading">
            <h2>用語一覧</h2>
            <p>{filteredTerms.length}件を表示中</p>
          </div>

          {filteredTerms.length > 0 ? (
            <div className="card-grid">
              {filteredTerms.map((term) => (
                <GlossaryCard key={term.id} term={term} />
              ))}
            </div>
          ) : (
            <div className="empty-state" role="status">
              <h3>該当する用語がありません</h3>
              <p>
                新しい用語として追加したい場合は、<code>docs/agent-add-term-template.md</code>
                のテンプレートを使って依頼できます。
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
