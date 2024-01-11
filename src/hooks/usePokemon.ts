import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import { Pokemon } from "@/lib/schemas/pokemon-detail";

export function usePokemon(name: string) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher<Pokemon>
  );

  return {
    pokemon: data,
    isLoading,
    isError: error,
  };
}
