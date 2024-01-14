import * as React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { usePokemon } from "@/hooks/usePokemon";
import PokemonAboutCard from "./PokemonAboutCard";
import PokemonDamageCard from "./PokemonDamageCard";
import PokemonStatCard from "./PokemonStatCard";

export function PokemonDrawer({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const [open, setOpen] = React.useState(false);
  const { pokemon, isError, isLoading } = usePokemon(name);

  if (isLoading) return <p>Loading</p>;

  // TODO make a fallback component in case of error
  if (isError || !pokemon) return null;

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerOverlay
        style={
          {
            "--image-url": `url(${pokemon.sprites.other.home.front_default})`,
          } as React.CSSProperties
        }
        className="bg-[image:var(--image-url)] bg-auto bg-no-repeat bg-top bg-black/40"
      />
      <DrawerContent>
        {/* <DrawerHeader className="">
         
        </DrawerHeader> */}
        <div className="grid grid-cols-3 gap-1">
          <PokemonAboutCard pokemon={pokemon} />
          <PokemonStatCard stats={pokemon.stats} />
          <PokemonDamageCard type={pokemon.types[0]} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
