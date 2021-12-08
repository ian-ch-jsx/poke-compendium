export async function getPokemon(query) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}&perPage=48&sort=id&direction=asc`
  );
  const data = await resp.json();
  return data;
}
