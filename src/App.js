import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon, getType } from './services/pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon(query, order, selectedType);
      setPokemon(data.results);
      timer = setTimeout(() => {
        setLoading(false);
      }, 600);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading, query, order, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getType();
      setType(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Controls
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
        type={type}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <PokeList pokemon={pokemon} loading={loading} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}

export default App;
