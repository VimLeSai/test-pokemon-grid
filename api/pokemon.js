export const fetchPokemonList = async (payload = {}) => {
  const { offset = 0, limit = 20, keyword = "" } = payload;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return await res.json();
};

export const fetchPokemonDetails = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await res.json();
};
