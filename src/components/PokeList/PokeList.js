import './PokeList.css';

export default function PokeList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevState) => --prevState);
    setLoading(true);
  };
  return (
    <div>
      <div className="container">
        {pokemon.map((poke) => (
          <>
            <div className="poke-card" key={poke.id}>
              <h3>{poke.pokemon}</h3>
              <img src={poke.url_image} className="image"></img>
              <p>
                type: {poke.type_1} | {poke.type_2}
              </p>
              <p>generation {poke.generation_id}</p>
              <a href={poke.pokedex} target="_blank" rel="noopener noreferrer">
                pokedex entry
              </a>
            </div>
          </>
        ))}
      </div>
      <div className="navigation">
        <p>PAGE {currentPage}</p>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}
