import Image from "next/image";

import { Button } from "@/components/ui/button";

import { PokemonSprites } from "@/lib/schemas/pokemon-detail";
import { PokemonDrawer } from "./PokemonDrawer";

export default function PokemonAvatar({ avatar }: { avatar: PokemonSprites }) {
  return (
    <PokemonDrawer name={avatar.name}>
      <Button
        variant="ghost"
        className="group relative rounded-full size-32 sm:size-20"
      >
        <Image
          className="opacity-100 group-hover:opacity-0 transition group-hover:scale-110 object-contain w-full h-auto"
          src={avatar.sprites.front_default}
          alt={avatar.name}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
        />
        <Image
          className="opacity-0 group-hover:opacity-100 transition group-hover:scale-110 object-contain w-full h-auto"
          src={avatar.sprites.front_shiny}
          alt={avatar.name}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </Button>
    </PokemonDrawer>
  );
}
