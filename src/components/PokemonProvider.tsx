"use client";
import { PaginationContextProvider } from "@/components/PaginationContext";
import PokemonList from "@/components/PokemonList";
import PokemonTable from "@/components/PokemonTable";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SWRConfig } from "swr";

export default function PokemonProvider() {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop)
    return (
      <SWRConfig
        value={{
          refreshInterval: 10 * 24 * 60 * 60 * 1000, //10 días
          revalidateOnFocus: false,
        }}
      >
        <PokemonTable />
      </SWRConfig>
    );
  return (
    <SWRConfig
      value={{
        refreshInterval: 10 * 24 * 60 * 60 * 1000, //10 días
        revalidateOnFocus: false,
      }}
    >
      <PokemonList />
    </SWRConfig>
  );
}
