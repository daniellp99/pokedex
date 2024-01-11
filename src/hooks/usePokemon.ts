import fetcher from "@/lib/fetcher";
import useSWR from "swr";

function usePokemon(name: string) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  return {
    pokemon: data,
    isLoading,
    isError: error,
  };
}
