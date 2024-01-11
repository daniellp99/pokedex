import useSWR from "swr";

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/config/site";
import fetcher from "@/lib/fetcher";
import { paginatedPokemonList } from "@/lib/schemas/paginated-pokemon-list";

export function usePaginatedPokemonList(
  offset = DEFAULT_OFFSET,
  limit = DEFAULT_LIMIT
) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    fetcher<paginatedPokemonList>
  );

  return {
    list: data,
    isLoading,
    isError: error,
  };
}
