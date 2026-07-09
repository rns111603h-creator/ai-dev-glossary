type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <label className="field search-field">
      <span>検索</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="例: React、API、セキュリティ、stale closure"
        aria-label="用語を検索"
      />
    </label>
  );
}
