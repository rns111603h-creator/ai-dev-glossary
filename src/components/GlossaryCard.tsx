import type { GlossaryTerm } from "../data/glossary";

type GlossaryCardProps = {
  term: GlossaryTerm;
};

const listOrFallback = (items: string[] | undefined, fallback: string) =>
  items && items.length > 0 ? items : [fallback];

export function GlossaryCard({ term }: GlossaryCardProps) {
  const examples = listOrFallback(term.examples, "具体例は今後追記します。");
  const misunderstandings = listOrFallback(term.commonMisunderstandings, "よくある誤解は今後追記します。");
  const relatedTerms = listOrFallback(term.relatedTerms, "関連用語は今後追記します。");

  return (
    <article className="glossary-card" id={term.id}>
      <div className="card-topline">
        <span className="category-pill">{term.category}</span>
        {term.reading && <span className="reading">{term.reading}</span>}
      </div>
      <h3>{term.term}</h3>
      <p className="summary">{term.summary}</p>
      <div className="tag-row" aria-label={`${term.term} のタグ`}>
        {term.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <details>
        <summary>詳細を読む</summary>
        <div className="detail-grid">
          <section>
            <h4>基本説明</h4>
            <p>{term.description}</p>
          </section>
          <section>
            <h4>なぜ重要か</h4>
            <p>{term.whyImportant || "実務で用語の意味を正しく共有し、AIや開発者への依頼を具体化しやすくするためです。"}</p>
          </section>
          <section>
            <h4>よくある誤解</h4>
            <ul>
              {misunderstandings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>具体例</h4>
            <ul>
              {examples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="wide-detail">
            <h4>関連用語</h4>
            <div className="related-row">
              {relatedTerms.map((related) => (
                <span key={related}>{related}</span>
              ))}
            </div>
          </section>
        </div>
      </details>
    </article>
  );
}
