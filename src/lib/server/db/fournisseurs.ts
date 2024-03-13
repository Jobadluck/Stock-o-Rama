import { db } from '.'
import type { Fournisseur } from './schema'

export function getFournisseurs(): Promise<Fournisseur[]> {
	return db.selectFrom('fournisseur').selectAll().execute()
}
