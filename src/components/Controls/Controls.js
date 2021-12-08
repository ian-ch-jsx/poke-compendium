export default function Controls({ query, setQuery, setLoading }) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="search by name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
