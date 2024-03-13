<script lang="ts">
	import type { Article } from "$lib/server/db/schema"
	import { Stretch } from "svelte-loading-spinners"
  export let articles: Promise<Article[]>
</script>

<div>
  {#await articles}
    <div class="d-flex justify-content-center align-items-center">
      <Stretch size="60" color="#FF3E00" unit="px" duration="1s" />
    </div>
  {:then receivedArticles}
    {#if receivedArticles.length === 0}
      <h5>Aucune donnée retournée</h5>
    {:else}
      <div class="p-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Description</th>
              <th scope="col">Fournisseur</th>
            </tr>
          </thead>
          <tbody>
            {#each receivedArticles as article (article.id)}
              <tr>
                <td>{article.code}</td>
                <td>{article.description}</td>
                <td>{article.code_fournisseur}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  {:catch err}
  <!-- Handle error -->
    <h1>Error: { JSON.stringify(err) }</h1>
  {/await}
</div>