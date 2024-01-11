export default async function fetcher<TSchema>(key: string): Promise<TSchema> {
  const res = await fetch(key);
  if (!res.ok) throw new Error("Failed");
  const data = await res.json();
  return data as TSchema;
}
