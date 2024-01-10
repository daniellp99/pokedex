"server only";

import Pokedex from "pokedex-promise-v2";

const DEFAULT_LIMIT = 6;
const DEFAULT_OFFSET = 0;

const P = new Pokedex();

export async function getPaginatedPokemonList(
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET
) {
  try {
    const paginatedList = await P.getPokemonsList({
      limit: limit,
      offset: offset,
    });
    return paginatedList;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetail(name: string) {
  try {
    return await P.getPokemonByName(name);
  } catch (error) {
    throw error;
  }
}
