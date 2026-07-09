type TagFilterProps = {
  tags: string[];
  selectedTag: string;
  onChange: (tag: string) => void;
};

export function TagFilter({ tags, selectedTag, onChange }: TagFilterProps) {
  return (
    <label className="field">
      <span>タグ</span>
      <select value={selectedTag} onChange={(event) => onChange(event.target.value)} aria-label="タグで絞り込む">
        <option value="">すべて</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </label>
  );
}
