type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({ categories, selectedCategory, onChange }: CategoryFilterProps) {
  return (
    <label className="field">
      <span>カテゴリ</span>
      <select
        value={selectedCategory}
        onChange={(event) => onChange(event.target.value)}
        aria-label="カテゴリで絞り込む"
      >
        <option value="">すべて</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
}
