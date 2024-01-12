import { z } from "zod";

export const paginatedPokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(z.object({ name: z.string(), url: z.string() })),
});

export type paginatedPokemonList = z.infer<typeof paginatedPokemonListSchema>;
