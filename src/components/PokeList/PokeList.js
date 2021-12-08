import './PokeList.css';

export default function PokeList({ pokemon }) {
  return (
    <div className="container">
      {pokemon.map((poke) => (
        <>
          <div className="poke-card">
            <h3 key={poke.id}>{poke.pokemon}</h3>
            <img src={poke.url_image} className="image"></img>
            <p key={poke.id}>type: {poke.type_1}</p>
          </div>
        </>
      ))}
    </div>
  );
}
