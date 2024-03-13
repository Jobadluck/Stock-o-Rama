import { db } from '.'
import type { Article } from './schema'

export function getArticles(): Promise<Article[]> {
	return db.selectFrom('article').selectAll().execute()
}
