import './PokeList.css';

export default function PokeList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <div>
      <div className="container">
        {pokemon.map((poke) => (
          <>
            <div className="poke-card">
              <h3 key={poke.id}>{poke.pokemon}</h3>
              <img src={poke.url_image} className="image"></img>
              <p key={poke.id}>
                type: {poke.type_1} | {poke.type_2}
              </p>
              <p key={poke.id}>generation {poke.generation_id}</p>
              <a key={poke.id} href={poke.pokedex} target="_blank" rel="noopener noreferrer">
                pokedex entry
              </a>
            </div>
          </>
        ))}
      </div>
      <div className="navigation">
        Page {currentPage}
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}
