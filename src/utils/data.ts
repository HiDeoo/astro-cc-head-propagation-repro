import { getEntry, render, type CollectionEntry } from "astro:content";

export async function getData(id: CollectionEntry<"docs">["id"]) {
  const entry = await getEntry("docs", id);
  if (!entry) throw new Error("Entry not found");
  const { Content } = await render(entry);
  return { Content, title: entry.data.title };
}

export function getCustomData(title: string) {
  return { title };
}
