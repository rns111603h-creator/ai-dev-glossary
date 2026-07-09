import type { GlossaryIndex as GlossaryIndexData } from "../utils/glossarySearch";

type GlossaryIndexProps = {
  index: GlossaryIndexData;
  onSelectCategory: (category: string) => void;
  onSelectTag: (tag: string) => void;
};

const sortedEntries = <T,>(record: Record<string, T[]>) =>
  Object.entries(record).sort(([a], [b]) => a.localeCompare(b, "ja-JP"));

export function GlossaryIndex({ index, onSelectCategory, onSelectTag }: GlossaryIndexProps) {
  return (
    <aside className="index-panel" aria-label="索引ナビゲーション">
      <section>
        <h2>索引</h2>
        <p>英字・読み・カテゴリ・タグからたどれます。</p>
      </section>

      <section>
        <h3>アルファベット</h3>
        <div className="index-links">
          {sortedEntries(index.alphabet).map(([key, terms]) => (
            <a key={key} href={`#${terms[0]?.id}`}>
              {key} <span>{terms.length}</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h3>五十音に近い表示</h3>
        <div className="index-links compact">
          {sortedEntries(index.reading).map(([key, terms]) => (
            <a key={key} href={`#${terms[0]?.id}`}>
              {key} <span>{terms.length}</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h3>カテゴリ別</h3>
        <div className="index-list">
          {sortedEntries(index.categories).map(([category, terms]) => (
            <button type="button" key={category} onClick={() => onSelectCategory(category)}>
              {category}
              <span>{terms.length}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3>タグ別</h3>
        <div className="index-list tag-index">
          {sortedEntries(index.tags).map(([tag, terms]) => (
            <button type="button" key={tag} onClick={() => onSelectTag(tag)}>
              {tag}
              <span>{terms.length}</span>
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}
