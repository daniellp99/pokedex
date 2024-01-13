import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import { PokemonTypeExtended } from "@/lib/schemas/pokemon-type";
import { paginatedPokemonList } from "@/lib/schemas/paginated-pokemon-list";

export function usePokemonType(name: string) {
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
export function useAllTypes() {
  const { data, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/type/",
    fetcher<paginatedPokemonList>
  );

  return {
    allTypes: data,
    isLoading,
    isError: error,
  };
}
