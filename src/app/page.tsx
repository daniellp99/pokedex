import MainNav from "@/components/MainNav";
import PokemonProvider from "@/components/PokemonProvider";

export default function Home() {
  return (
    <main className="flex container min-h-screen flex-col items-center pt-2">
      <MainNav />
      <section className="size-full">
        <PokemonProvider />
      </section>
    </main>
  );
}
