import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { useAllTypes, usePokemonType } from "@/hooks/usePokemonType";
import { PokemonType } from "@/lib/schemas/pokemon-detail";
import { cn } from "@/lib/utils";
import PokemonTypeBadge from "./PokemonTypeBadge";
import { Skeleton } from "./ui/skeleton";

function PokemonDamageCardItem({
  iterType,
  typeName,
}: {
  iterType: string;
  typeName: string;
}) {
  const { pokemonType, isError, isLoading } = usePokemonType(typeName);

  if (isLoading) return null;

  // TODO make a fallback component in case of error
  if (isError || !pokemonType) return null;

  return (
    <div className="flex flex-col items-center ">
      <p
        className={cn(
          "text-muted-foreground text-sm invisible",
          pokemonType.damage_relations.double_damage_from.find(
            (item) => item.name === iterType
          ) && "visible",
          pokemonType.damage_relations.half_damage_from.find(
            (item) => item.name === iterType
          ) && "visible"
        )}
      >
        {pokemonType.damage_relations.double_damage_from.find(
          (item) => item.name === iterType
        )
          ? 1
          : pokemonType.damage_relations.half_damage_from.find(
              (item) => item.name === iterType
            )
          ? 1 / 2
          : 0}
      </p>
      <PokemonTypeBadge key={iterType} name={iterType} />
    </div>
  );
}

export default function PokemonDamageCard({ type }: { type: PokemonType }) {
  const { allTypes, isError, isLoading } = useAllTypes();

  if (isLoading) return <Skeleton className="w-full h-full" />;

  // TODO make a fallback component in case of error
  if (isError || !allTypes) return null;

  return (
    <Card className="border-none">
      <CardTitle className="">
        <p className="font-medium text-muted-foreground text-center text-lg">
          Damage Relations
        </p>
      </CardTitle>
      <CardContent className="grid grid-cols-4 gap-2">
        {allTypes.results.map((item) => (
          <PokemonDamageCardItem
            key={item.name}
            iterType={item.name}
            typeName={type.type.name}
          />
        ))}
      </CardContent>
    </Card>
  );
}
