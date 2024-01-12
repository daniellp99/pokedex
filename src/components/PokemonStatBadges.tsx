import {
  HeartIcon,
  PieChartIcon,
  ShieldIcon,
  ShieldPlusIcon,
  SwordIcon,
  SwordsIcon,
  ZapIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { PokemonStats } from "@/lib/schemas/pokemon-detail";

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
export default function PokemonStatBadges({ stats }: { stats: PokemonStats }) {
  return stats.map((item) => (
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
  ));
}
