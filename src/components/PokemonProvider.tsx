"use client";
import { PaginationContextProvider } from "@/components/PaginationContext";
import PokemonList from "@/components/PokemonList";
import PokemonTable from "@/components/PokemonTable";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function PokemonProvider() {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  if (isDesktop)
    return (
      <PaginationContextProvider>
        <PokemonTable />
      </PaginationContextProvider>
    );
  return (
    <PaginationContextProvider>
      <PokemonList />
    </PaginationContextProvider>
  );
}
