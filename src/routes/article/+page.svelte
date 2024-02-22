<script lang="ts">
  import type { Article } from '$lib/server/db/schema.js'
  import { Stretch } from 'svelte-loading-spinners'
  export let data
  
	const articles: Promise<Article[]> = data.articles
</script>

<!-- <div out:fade={{ duration: 400 }} in:fade={{ delay: 400, duration: 400 }}> -->
<div>
  <h1>Welcome to articles view</h1>
  {#await articles}
    <div class="d-flex justify-content-center align-items-center">
      <Stretch size="60" color="#FF3E00" unit="px" duration="1s" />
    </div>
  {:then receivedArticles}
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
  {:catch}
  <!-- Handle error -->
  {/await}
</div>