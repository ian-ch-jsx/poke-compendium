import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList/PokeList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader">LOADING</span>}
      {!loading && (
        <>
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
