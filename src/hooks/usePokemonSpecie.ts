import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import { PokemonSpecie } from "@/lib/schemas/pokemon-specie";

export function usePokemonSpecie(name: string) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`,
    fetcher<PokemonSpecie>
  );

  return {
    pokemonSpecie: data,
    isLoading,
    isError: error,
  };
}
