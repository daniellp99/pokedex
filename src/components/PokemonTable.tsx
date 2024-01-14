"use client";
import { ChevronLeftIcon, ChevronRightIcon, LoaderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { usePaginatedPokemonList } from "@/hooks/usePaginatedPokemonList";
import { usePokemon } from "@/hooks/usePokemon";
import { extractOffSetAndLimit } from "@/lib/utils";
import { usePaginationContext } from "./PaginationContext";
import PokemonStatBadges from "./PokemonStatBadges";
import PokemonAvatar from "./PokemonAvatar";
import useQueryParams from "@/hooks/useQueryParams";
import { useEffect } from "react";

function LoadingRow() {
  return (
    <TableRow>
      <TableCell className="p-0">
        <Skeleton className="h-[101px] md:h-[86px] w-full rounded-none" />
      </TableCell>
      <TableCell className="p-0">
        <Skeleton className="h-[101px] md:h-[86px] w-full rounded-none" />
      </TableCell>
      <TableCell className="p-0">
        <Skeleton className="h-[101px] md:h-[86px] w-full rounded-none" />
      </TableCell>
      <TableCell className="p-0">
        <Skeleton className="h-[101px] md:h-[86px] w-full rounded-none" />
      </TableCell>
      <TableCell className="p-0">
        <Skeleton className="h-[101px] md:h-[86px] w-full rounded-none" />
      </TableCell>
    </TableRow>
  );
}

function PokemonRow({ name }: { name: string }) {
  const { pokemon, isError, isLoading } = usePokemon(name);

  if (isLoading) return <LoadingRow />;

  // TODO make a fallback component in case of error
  if (isError || !pokemon) return null;

  return (
    <TableRow className="odd:bg-accent">
      <TableCell className="w-20 md:w-28 lg:w-40 p-0">
        <PokemonAvatar
          avatar={{ name: pokemon.name, sprites: pokemon.sprites }}
        />
      </TableCell>
      <TableCell className="w-20 md:w-28 p-2 md:p-4">
        <p className="font-medium capitalize truncate">{pokemon.name}</p>
      </TableCell>
      <TableCell className="w-20 md:w-28 p-2 md:p-4">
        <p className="capitalize truncate">
          {pokemon.abilities[0].ability.name.replace("-", " ")}
        </p>
      </TableCell>
      <TableCell className="w-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center size-full gap-[1px]">
          <PokemonStatBadges stats={pokemon.stats} />
        </div>
      </TableCell>
      <TableCell className="">
        <p className="capitalize">
          {pokemon.moves[0].move.name.replace("-", " ")}
        </p>
      </TableCell>
    </TableRow>
  );
}

export default function PokemonTable() {
  const { queryParams } = useQueryParams();
  const { offset, setOffset, limit, setLimit } = usePaginationContext();

  const q = queryParams.get("q") ?? "";

  const { list, isError, isLoading } = usePaginatedPokemonList(
    offset,
    limit,
    q
  );

  if (isLoading)
    return <LoaderIcon className="mt-12 animate-spin size-10 mx-auto" />;
  // TODO make a fallback component in case of error
  if (isError || !list) return null;

  const handlePageChange = (offsetNumber: number, limitNumber: number) => {
    setOffset(offsetNumber!);
    setLimit(limitNumber!);
  };

  return (
    <Table>
      {q === "" && (
        <TableCaption className="text-foreground">
          <Pagination>
            <PaginationContent>
              {list.previous && (
                <PaginationItem>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      const { offsetNumber, limitNumber } =
                        extractOffSetAndLimit(list.previous!);
                      handlePageChange(offsetNumber!, limitNumber!);
                    }}
                  >
                    <ChevronLeftIcon className="size-4" /> Prev
                  </Button>
                </PaginationItem>
              )}
              <PaginationItem>
                <Button
                  variant="ghost"
                  onClick={() =>
                    handlePageChange((offset / limit + 1) * limit, limit)
                  }
                >
                  {offset / limit + 1}
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  variant="ghost"
                  onClick={() =>
                    handlePageChange((offset / limit + 2) * limit, limit)
                  }
                >
                  {offset / limit + 2}
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  variant="ghost"
                  onClick={() =>
                    handlePageChange((offset / limit + 3) * limit, limit)
                  }
                >
                  {offset / limit + 3}
                </Button>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {list.next && (
                <PaginationItem>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      const { offsetNumber, limitNumber } =
                        extractOffSetAndLimit(list.next!);
                      handlePageChange(offsetNumber!, limitNumber!);
                    }}
                  >
                    Next <ChevronRightIcon className="size-4" />
                  </Button>
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </TableCaption>
      )}
      <TableHeader>
        <TableRow>
          <TableHead className="w-20 md:w-28 lg:w-40">Icon</TableHead>
          <TableHead className="w-20 md:w-28 lg:w-40">Name</TableHead>
          <TableHead className="w-20 md:w-28 lg:w-40">Ability</TableHead>
          <TableHead className="w-auto text-center">Stats</TableHead>
          <TableHead className="w-32 md:w-28 lg:w-40">Move</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.results.map((pokemon) => (
          <PokemonRow key={pokemon.name} name={pokemon.name} />
        ))}
      </TableBody>
    </Table>
  );
}
