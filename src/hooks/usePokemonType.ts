import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import { PokemonTypeExtended } from "@/lib/schemas/pokemon-type";

export function usePokemonType(name = "") {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/type/${name}`,
    fetcher<PokemonTypeExtended>
  );

  return {
    pokemonType: data,
    isLoading,
    isError: error,
  };
}
