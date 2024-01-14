import useSWR from "swr";

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/config/site";
import fetcher from "@/lib/fetcher";
import { paginatedPokemonList } from "@/lib/schemas/paginated-pokemon-list";

export function usePaginatedPokemonList(
  offset = DEFAULT_OFFSET,
  limit = DEFAULT_LIMIT,
  q = ""
) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?offset=${q !== "" ? 0 : offset}&limit=${
      q !== "" ? 100000 : limit
    }${q !== "" ? `&q=${q}` : ""}`,
    fetcher<paginatedPokemonList>
  );

  let filterResult: { url: string; name: string }[] | undefined = [];
  if (q !== "" && data) {
    filterResult = data?.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(q.toLowerCase())
    );
    data.results = filterResult;
  }

  return {
    list: data,
    isLoading,
    isError: error,
  };
}
