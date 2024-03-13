<script lang="ts">
  import type {
  	Article as ArticleType,
  	Fournisseur as FournisseurType
  } from "$lib/server/db/schema"
  import { choice } from '$lib/store'
  import Article from './article.svelte'
  import Fournisseur from "./fournisseur.svelte"
  export let data
  let articles: Promise<ArticleType[]> = data?.articles
  let fournisseurs: Promise<FournisseurType[]> = data?.fournisseurs
</script>

{#if $choice === 'article'}
  <Article {articles} />
{:else if $choice === 'fournisseur'}
  <Fournisseur {fournisseurs} />
{/if}