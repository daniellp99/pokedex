import MainNav from "@/components/MainNav";
import { PaginationContextProvider } from "@/components/PaginationContext";
import PokemonTable from "@/components/PokemonTable";

export default function Home() {
  return (
    <main className="flex container min-h-screen flex-col items-center pt-2 divide-y-2">
      <MainNav />
      <PaginationContextProvider>
        <PokemonTable />
      </PaginationContextProvider>
    </main>
  );
}
