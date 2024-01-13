import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PokemonStat } from "@/lib/schemas/pokemon-detail";

export default function PokemonStatCard({ stats }: { stats: PokemonStat[] }) {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <Table>
      {isDesktop && (
        <TableHeader>
          <TableHead colSpan={3} className="p-0 text-center text-lg">
            Basic Stats
          </TableHead>
        </TableHeader>
      )}
      <TableBody>
        {stats.map((item) => (
          <TableRow key={item.stat.name}>
            <TableCell className="font-medium w-20 py-3 px-0">
              <p className="capitalize">
                {item.stat.name.split("-").length === 2
                  ? `${item.stat.name.split("-")[0].slice(0, 1)}. ${
                      item.stat.name.split("-")[1]
                    }`
                  : item.stat.name.replace("-", " ")}
              </p>
            </TableCell>
            <TableCell className="text-center w-10 py-3 px-0">
              {item.base_stat}
            </TableCell>
            <TableCell className="w-auto py-3 px-0">
              <Progress value={item.base_stat} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
