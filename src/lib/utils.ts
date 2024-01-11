import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractOffSetAndLimit(url: string): {
  offsetNumber: number | null;
  limitNumber: number | null;
} {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);

  const offsetNumber = params.has("offset")
    ? Number(params.get("offset"))
    : null;
  const limitNumber = params.has("limit") ? Number(params.get("limit")) : null;

  return { offsetNumber, limitNumber };
}
