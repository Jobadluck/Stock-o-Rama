import { db } from '$lib/server/db'
import type { Article } from '$lib/server/db/schema'

export const load = () => {
	const articles: Promise<Article[]> = db.selectFrom('article').selectAll().execute()
	return { articles, isLoading: false }
}