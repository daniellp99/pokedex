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
      return "bg-teal-700";
    case "fighting":
      return "bg-rose-500";
    case "flying":
      return "bg-cyan-300";
    case "poison":
      return "bg-purple-500";
    case "ground":
      return "bg-orange-300";
    case "rock":
      return "bg-stone-500";
    case "bug":
      return "bg-green-500";
    case "ghost":
      return "bg-gray-500";
    case "steel":
      return "bg-slate-400";
    case "fire":
      return "bg-red-500";
    case "water":
      return "bg-sky-500";
    case "grass":
      return "bg-lime-500";
    case "electric":
      return "bg-yellow-500";
    case "psychic":
      return "bg-pink-400";
    case "ice":
      return "bg-blue-100";
    case "dragon":
      return "bg-violet-600";
    case "dark":
      return "bg-neutral-600";
    case "fairy":
      return "bg-amber-700";
    case "unknown":
      return "bg-emerald-700";
    case "shadow":
      return "bg-indigo-500";

    default:
      return;
  }
}
export default function PokemonTypeBadge({
  name,
  isTextVisible,
}: {
  name: string;
  isTextVisible?: boolean;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "cursor-default w-fit p-1.5  mx-[2px] gap-1 rounded-sm",
        PokemonTypeColor(name),
        `hover:${PokemonTypeColor(name)}/80`
      )}
    >
      {PokemonTypeIcon(name)}
      {isTextVisible && <p className="capitalize text-sm">{name}</p>}
    </Badge>
  );
}
