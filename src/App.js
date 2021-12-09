import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      timer = setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading, query]);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Controls query={query} setQuery={setQuery} setLoading={setLoading} />

      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
