"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  LoaderIcon,
  PieChartIcon,
  ShieldIcon,
  ShieldPlusIcon,
  SwordIcon,
  SwordsIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { usePaginatedPokemonList } from "@/hooks/usePaginatedPokemonList";
import { usePokemon } from "@/hooks/usePokemon";
import { extractOffSetAndLimit } from "@/lib/utils";
import { usePaginationContext } from "./PaginationContext";

function StatIcon(statName: string) {
  switch (statName) {
    case "hp":
      return <HeartIcon className="size-4" />;

    case "attack":
      return <SwordIcon className="size-4" />;

    case "defense":
      return <ShieldIcon className="size-4" />;

    case "special-attack":
      return <SwordsIcon className="size-4" />;

    case "special-defense":
      return <ShieldPlusIcon className="size-4" />;

    case "speed":
      return <ZapIcon className="size-4" />;

    default:
      return <PieChartIcon className="size-4" />;
  }
}

function LoadingRow() {
  return (
    <TableRow>
      <TableCell className="p-0">
        <Skeleton className="h-[99px] md:h-[76px] w-full rounded-none" />
      </TableCell>
      <TableCell className="p-0">
        <Skeleton className="h-[99px] md:h-[76px] w-full rounded-none" />
      </TableCell>
      <TableCell className="p-0">
        <Skeleton className="h-[99px] md:h-[76px] w-full rounded-none" />
      </TableCell>
      <TableCell className="p-0">
        <Skeleton className="h-[99px] md:h-[76px] w-full rounded-none" />
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
    <TableRow>
      <TableCell className="w-20 p-0">
        <Avatar className="size-20 group">
          <AvatarImage
            className="opacity-100 group-hover:opacity-0 transition group-hover:scale-110"
            asChild
            src={pokemon.sprites.front_default}
          >
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              fill
              sizes="(min-width: 80px) 50vw, 100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </AvatarImage>
          <AvatarImage
            className="opacity-0 group-hover:opacity-100 transition group-hover:scale-110"
            asChild
            src={pokemon.sprites.front_shiny}
          >
            <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              fill
              sizes="(min-width: 80px) 50vw, 100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </AvatarImage>

          <AvatarFallback>
            <p className="font-medium capitalize truncate">
              {pokemon.name.replace("-", " ")}
            </p>
          </AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="w-20 md:w-28 p-2 md:p-4">
        <p className="font-medium capitalize truncate">{pokemon.name}</p>
      </TableCell>
      <TableCell className="w-20 md:w-28 p-2 md:p-4">
        <p className="capitalize truncate">
          {pokemon.abilities[0].ability.name.replace("-", " ")}
        </p>
      </TableCell>
      <TableCell className="grid grid-cols-2 md:grid-cols-3 place-items-center w-auto gap-[1px]">
        {pokemon.stats.map((item) => (
          <TooltipProvider key={item.stat.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge className="cursor-default">
                  {StatIcon(item.stat.name)}
                  <p>={item.base_stat}</p>
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{item.stat.name.replace("-", " ")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
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
  const { offset, setOffset, limit, setLimit } = usePaginationContext();
  const { list, isError, isLoading } = usePaginatedPokemonList(offset, limit);

  if (isLoading)
    return (
      <LoaderIcon className="hidden sm:table mt-12 animate-spin size-10 mx-auto" />
    );
  // TODO make a fallback component in case of error
  if (isError || !list) return null;

  const handlePageChange = (offsetNumber: number, limitNumber: number) => {
    setOffset(offsetNumber!);
    setLimit(limitNumber!);
  };

  return (
    <Table className="hidden sm:table">
      <TableCaption className="text-foreground">
        <Pagination>
          <PaginationContent>
            {list.previous && (
              <PaginationItem>
                <Button
                  variant="ghost"
                  onClick={() => {
                    const { offsetNumber, limitNumber } = extractOffSetAndLimit(
                      list.previous!
                    );
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
                    const { offsetNumber, limitNumber } = extractOffSetAndLimit(
                      list.next!
                    );
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
