// import { getPokemon } from '../../services/pokemon';
import './Controls.css';

export default function Controls({ query, setQuery, setLoading, order, setOrder, type, setType }) {
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
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="all">All</option>
        <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="ghost">Ghost</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="water">Water</option>
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc"> Descending</option>
      </select>
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
