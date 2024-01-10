import * as z from "zod";

export const searchInputSchema = z.object({
  input: z.string(),
});

export type TSearchInput = z.infer<typeof searchInputSchema>;
