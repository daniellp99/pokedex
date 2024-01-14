"use client";
import { FrownIcon, LoaderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { usePaginatedPokemonList } from "@/hooks/usePaginatedPokemonList";
import { usePokemon } from "@/hooks/usePokemon";
import { usePaginationContext } from "./PaginationContext";
import PokemonStatBadges from "./PokemonStatBadges";
import PokemonAvatar from "./PokemonAvatar";
import useQueryParams from "@/hooks/useQueryParams";

function PokemonCard({ name }: { name: string }) {
  const { pokemon, isError, isLoading } = usePokemon(name);

  if (isLoading) return <p>Loading</p>;

  // TODO make a fallback component in case of error
  if (isError || !pokemon) return null;
  return (
    <Card className="bg-accent">
      <CardHeader className="pt-2 pb-0">
        <CardTitle className="capitalize text-center">
          {pokemon.name.replace("-", " ")}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-3 place-items-center pb-0">
        <ul className="col-span-2">
          {pokemon.moves.length !== 0 && (
            <li>
              <p className="capitalize ">
                Ability: {pokemon.moves[0].move.name.replace("-", " ")}
              </p>
            </li>
          )}
          <li>
            <p className="capitalize">
              Move: {pokemon.abilities[0].ability.name.replace("-", " ")}
            </p>
          </li>
        </ul>
        <PokemonAvatar
          avatar={{ name: pokemon.name, sprites: pokemon.sprites }}
        />
      </CardContent>
      <CardFooter className="grid grid-cols-3 gap-1 w-fit pb-2">
        <PokemonStatBadges stats={pokemon.stats} />
      </CardFooter>
    </Card>
  );
}

function CardList({
  offset,
  limit,
  q,
}: {
  offset: number;
  limit: number;
  q: string;
}) {
  const { list, isError, isLoading } = usePaginatedPokemonList(
    offset,
    limit,
    q
  );

  if (isLoading)
    return (
      <li className="place-self-center">
        <LoaderIcon className="flex animate-spin size-10" />
      </li>
    );
  // TODO make a fallback component in case of error
  if (isError || !list) return null;

  return (
    <>
      {list.results.length !== 0 ? (
        list.results.map((pokemon) => (
          <li key={pokemon.name}>
            <PokemonCard name={pokemon.name} />
          </li>
        ))
      ) : (
        <li className="place-self-center pt-3">
          <p className="text-center text-muted-foreground text-2xl">
            No Pokemon found
          </p>
        </li>
      )}
    </>
  );
}

export default function PokemonList() {
  const { offset, setOffset, limit, setLimit } = usePaginationContext();
  const { queryParams } = useQueryParams();

  const q = queryParams.get("q") ?? "";

  if (q !== "") {
    return (
      <ul className="flex flex-col gap-2">
        <CardList offset={0} limit={100000} q={q} />
      </ul>
    );
  }
  const pages = [];
  for (let i = 0; i <= offset / limit; i++) {
    pages.push(
      <CardList
        offset={i * limit}
        limit={limit}
        q={q}
        key={`${i * limit}-${limit}`}
      />
    );
  }

  const handlePageChange = () => {
    setOffset(offset + limit);
    setLimit(limit);
  };

  return (
    <ul className="flex flex-col gap-2">
      {q === "" && pages}
      {q === "" && (
        <li className="place-self-center">
          <Button
            onClick={() => {
              handlePageChange();
            }}
          >
            Load More
          </Button>
        </li>
      )}
    </ul>
  );
}
