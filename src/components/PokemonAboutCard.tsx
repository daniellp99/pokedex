import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { usePokemonSpecie } from "@/hooks/usePokemonSpecie";
import { Pokemon } from "@/lib/schemas/pokemon-detail";
import PokemonTypeBadge from "./PokemonTypeBadge";

export default function PokemonAboutCard({ pokemon }: { pokemon: Pokemon }) {
  const { pokemonSpecie, isError, isLoading } = usePokemonSpecie(
    pokemon.species.name
  );

  if (isLoading) return <Skeleton className="w-full h-full" />;

  // TODO make a fallback component in case of error
  if (isError || !pokemonSpecie) return null;

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>
          <p className="capitalize">
            <span className="text-sm text-muted-foreground align-text-top">{`[${pokemon.id}]`}</span>
            {pokemon.name.replace("-", " ")}{" "}
            {pokemon.types.map((item) => (
              <PokemonTypeBadge
                key={item.type.name}
                name={item.type.name}
                isTextVisible
              />
            ))}
          </p>
        </CardTitle>
        <CardDescription>
          {
            pokemonSpecie.flavor_text_entries.filter(
              (item) =>
                item.language.name === "en" && item.version.name === "red"
            )[0].flavor_text
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-2">
        <p>
          Species{" "}
          <span className="text-muted-foreground">
            {
              pokemonSpecie.genera.filter(
                (item) => item.language.name === "en"
              )[0].genus
            }
          </span>
        </p>
        <p>
          Height{" "}
          <span className="text-muted-foreground">{pokemon.height}m</span>
        </p>
        <p>
          Weight{" "}
          <span className="text-muted-foreground">{pokemon.weight}Kg</span>
        </p>
        <div className="flex gap-7">
          <p className="flex-none">Abilities</p>
          <ul className="list-disc flex-1">
            {pokemon.abilities.map((item) => (
              <li key={item.ability.name}>
                <p className="text-muted-foreground list-disc capitalize">
                  {item.ability.name.replace("-", " ")}
                  {item.is_hidden && " (Hidden)"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
