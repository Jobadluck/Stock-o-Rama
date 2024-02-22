import { db } from '$lib/server/db'
import type { Article } from '$lib/server/db/schema'

export const load = async () => {
	const articles: Article[] = await db.selectFrom('article').selectAll().execute()
	return { articles, isLoading: false }
}