import { getArticles } from '$lib/server/db/articles'
import { getFournisseurs } from '$lib/server/db/fournisseurs'
import type { Article, Fournisseur } from '$lib/server/db/schema'
import type { PageServerLoad } from '../$types'

export const load = (({}) => {
	let articles: Promise<Article[]> = getArticles()
	let fournisseurs: Promise<Fournisseur[]> = getFournisseurs()
	return { articles, fournisseurs }
}) satisfies PageServerLoad
