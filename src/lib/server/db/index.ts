import { POSTGRES_URL } from '$env/static/private'

import type { Article, Fournisseur, Mouvement } from '$lib/server/db/schema'
import { createKysely } from '@vercel/postgres-kysely'

interface Database {
	article: Article
	fournisseur: Fournisseur
	mouvement: Mouvement
}

export const db = createKysely<Database>({
	connectionString: POSTGRES_URL
})
