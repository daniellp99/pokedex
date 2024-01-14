import * as React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useMediaQuery } from "@/hooks/useMediaQuery";
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
  const isDesktop = useMediaQuery("(min-width: 640px)");
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
          {isDesktop ? (
            <>
              <PokemonAboutCard pokemon={pokemon} />
              <PokemonStatCard stats={pokemon.stats} />
              <PokemonDamageCard type={pokemon.types[0]} />
            </>
          ) : (
            <Tabs defaultValue="about" className="pt-2 h-[360px]">
              <TabsList className="w-full">
                <TabsTrigger value="basic-stats">Basic Stats</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="damage-relations">
                  Damage Relations
                </TabsTrigger>
              </TabsList>
              <TabsContent value="basic-stats" className="p-6">
                <PokemonStatCard stats={pokemon.stats} />
              </TabsContent>
              <TabsContent value="about">
                <PokemonAboutCard pokemon={pokemon} />
              </TabsContent>
              <TabsContent value="damage-relations">
                <PokemonDamageCard type={pokemon.types[0]} />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
