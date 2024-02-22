import type { Generated } from 'kysely'

/**
 * Schema for article table
 */
export interface Article {
	id: number
	code: string
	description: string
	code_fournisseur: number
}

export interface Mouvement {
	id: Generated<number>
	code_article: number
	date: Date
	date_fin: Date
	quantite: number
	type: string
}

/**
 * Schema for fournisseur table
 */
export interface Fournisseur {
	id: Generated<number>
	nom: string
	description: string
	adresse: string
}
