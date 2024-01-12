import MainNav from "@/components/MainNav";
import { PaginationContextProvider } from "@/components/PaginationContext";
import PokemonList from "@/components/PokemonList";
import PokemonTable from "@/components/PokemonTable";

export default function Home() {
  return (
    <main className="flex container min-h-screen flex-col items-center pt-2">
      <MainNav />
      <section className="size-full">
        <PaginationContextProvider>
          <PokemonTable />
        </PaginationContextProvider>
        <PaginationContextProvider>
          <PokemonList />
        </PaginationContextProvider>
      </section>
    </main>
  );
}
