import {
  AnvilIcon,
  BrickWallIcon,
  BugIcon,
  CircleIcon,
  DropletIcon,
  FeatherIcon,
  FlameIcon,
  GhostIcon,
  GrabIcon,
  HelpCircleIcon,
  MoonIcon,
  MoonStarIcon,
  MountainIcon,
  ScanEyeIcon,
  ShellIcon,
  SkullIcon,
  SnowflakeIcon,
  SproutIcon,
  TypeIcon,
  Wand2Icon,
  ZapIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { PokemonType } from "@/lib/schemas/pokemon-detail";
import { cn } from "@/lib/utils";

function PokemonTypeIcon(typeName: string) {
  switch (typeName) {
    case "normal":
      return <CircleIcon className="size-4" />;
    case "fighting":
      return <GrabIcon className="size-4" />;
    case "flying":
      return <FeatherIcon className="size-4" />;
    case "poison":
      return <SkullIcon className="size-4" />;
    case "ground":
      return <MountainIcon className="size-4" />;
    case "rock":
      return <BrickWallIcon className="size-4" />;
    case "bug":
      return <BugIcon className="size-4" />;
    case "ghost":
      return <GhostIcon className="size-4" />;
    case "steel":
      return <AnvilIcon className="size-4" />;
    case "fire":
      return <FlameIcon className="size-4" />;
    case "water":
      return <DropletIcon className="size-4" />;
    case "grass":
      return <SproutIcon className="size-4" />;
    case "electric":
      return <ZapIcon className="size-4" />;
    case "psychic":
      return <ShellIcon className="size-4" />;
    case "ice":
      return <SnowflakeIcon className="size-4" />;
    case "dragon":
      return <ScanEyeIcon className="size-4" />;
    case "dark":
      return <MoonStarIcon className="size-4" />;
    case "fairy":
      return <Wand2Icon className="size-4" />;
    case "unknown":
      return <HelpCircleIcon className="size-4" />;
    case "shadow":
      return <MoonIcon className="size-4" />;

    default:
      return <TypeIcon className="size-4" />;
  }
}
export function PokemonTypeColor(typeName: string) {
  switch (typeName) {
    case "normal":
      return "bg-primary-500 hover:bg-primary-500/80";
    case "fighting":
      return "bg-rose-500 hover:bg-rose-500/80";
    case "flying":
      return "bg-cyan-300 hover:bg-cyan-300/80";
    case "poison":
      return "bg-purple-500 hover:bg-purple-500/80";
    case "ground":
      return "bg-orange-300 hover:bg-orange-300/80";
    case "rock":
      return "bg-stone-500 hover:bg-stone-500/80";
    case "bug":
      return "bg-green-500 hover:bg-green-500/80";
    case "ghost":
      return "bg-gray-500 hover:bg-gray-500/80";
    case "steel":
      return "bg-slate-400 hover:bg-slate-400/80";
    case "fire":
      return "bg-red-500 hover:bg-red-500/80";
    case "water":
      return "bg-sky-500 hover:bg-sky-500/80";
    case "grass":
      return "bg-lime-500 hover:bg-lime-500/80";
    case "electric":
      return "bg-yellow-500 hover:bg-yellow-500/80";
    case "psychic":
      return "bg-pink-400 hover:bg-pink-400/80";
    case "ice":
      return "bg-blue-100 hover:bg-blue-100/80";
    case "dragon":
      return "bg-violet-600 hover:bg-violet-600/80";
    case "dark":
      return "bg-neutral-600 hover:bg-neutral-600/80";
    case "fairy":
      return "bg-amber-700 hover:bg-amber-700/80";
    case "unknown":
      return "bg-white hover:bg-white/80";
    case "shadow":
      return "bg-black/80 hover:bg-black/80";

    default:
      return;
  }
}
export default function PokemonTypeBadge({
  item,
  isTextVisible,
}: {
  item: PokemonType;
  isTextVisible?: boolean;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "cursor-default w-fit p-1.5  mx-[2px] gap-1 rounded-sm",
        PokemonTypeColor(item.type.name)
      )}
    >
      {PokemonTypeIcon(item.type.name)}
      {isTextVisible && <p className="capitalize text-sm">{item.type.name}</p>}
    </Badge>
  );
}
