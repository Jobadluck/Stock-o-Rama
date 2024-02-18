import { db } from '$lib/server/db';

export const load = async () => {
  const article = await db
    .selectFrom('article')
    .selectAll()
    .execute()
  return { article: JSON.stringify(article) }
}