import { POSTGRES_URL } from '$env/static/private';

import type { ArticleTable, FournisseurTable, MouvementTable } from '$lib/server/db/schema';
import { createKysely } from '@vercel/postgres-kysely';

interface Database {
  article: ArticleTable
  fournisseur: FournisseurTable
  mouvement: MouvementTable
}

export const db = createKysely<Database>({
  connectionString: POSTGRES_URL,
})