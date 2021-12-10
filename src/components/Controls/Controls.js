import './Controls.css';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="controls">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="type-label" htmlFor="uncontrolled-native">
          Type
        </InputLabel>
        <Select
          className="select"
          labelId="type-label"
          label="type"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="bug">Bug</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="dragon">Dragon</MenuItem>
          <MenuItem value="electric">Electric</MenuItem>
          <MenuItem value="fairy">Fairy</MenuItem>
          <MenuItem value="fighting">Fighting</MenuItem>
          <MenuItem value="fire">Fire</MenuItem>
          <MenuItem value="flying">Flying</MenuItem>
          <MenuItem value="ghost">Ghost</MenuItem>
          <MenuItem value="grass">Grass</MenuItem>
          <MenuItem value="ground">Ground</MenuItem>
          <MenuItem value="ice">Ice</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="poison">Poison</MenuItem>
          <MenuItem value="psychic">Psychic</MenuItem>
          <MenuItem value="rock">Rock</MenuItem>
          <MenuItem value="steel">Steel</MenuItem>
          <MenuItem value="water">Water</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, color: '.menu' }}>
        <InputLabel id="order-label" variant="standard" htmlFor="uncontrolled-native">
          order
        </InputLabel>
        <Select
          className="select"
          labelId="order-label"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc"> Descending</MenuItem>
        </Select>
      </FormControl>
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
