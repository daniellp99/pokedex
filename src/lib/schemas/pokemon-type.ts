import { z } from "zod";

export const PokemonTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  damage_relations: z.object({
    no_damage_to: z.array(z.object({ name: z.string(), url: z.string() })),
    half_damage_to: z.array(z.object({ name: z.string(), url: z.string() })),
    double_damage_to: z.array(z.object({ name: z.string(), url: z.string() })),
    no_damage_from: z.array(z.object({ name: z.string(), url: z.string() })),
    half_damage_from: z.array(z.object({ name: z.string(), url: z.string() })),
    double_damage_from: z.array(
      z.object({ name: z.string(), url: z.string() })
    ),
  }),
  past_damage_relations: z.array(
    z.object({
      generation: z.object({ name: z.string(), url: z.string() }),
      damage_relations: z.object({
        no_damage_to: z.array(z.object({ name: z.string(), url: z.string() })),
        half_damage_to: z.array(
          z.object({ name: z.string(), url: z.string() })
        ),
        double_damage_to: z.array(
          z.object({ name: z.string(), url: z.string() })
        ),
        no_damage_from: z.array(
          z.object({ name: z.string(), url: z.string() })
        ),
        half_damage_from: z.array(
          z.object({ name: z.string(), url: z.string() })
        ),
        double_damage_from: z.array(
          z.object({ name: z.string(), url: z.string() })
        ),
      }),
    })
  ),
  game_indices: z.array(
    z.object({
      game_index: z.number(),
      generation: z.object({ name: z.string(), url: z.string() }),
    })
  ),
  generation: z.object({ name: z.string(), url: z.string() }),
  move_damage_class: z.object({ name: z.string(), url: z.string() }),
  names: z.array(
    z.object({
      name: z.string(),
      language: z.object({ name: z.string(), url: z.string() }),
    })
  ),
  pokemon: z.array(
    z.object({
      slot: z.number(),
      pokemon: z.object({ name: z.string(), url: z.string() }),
    })
  ),
  moves: z.array(z.object({ name: z.string(), url: z.string() })),
});

export type PokemonTypeExtended = z.infer<typeof PokemonTypeSchema>;
