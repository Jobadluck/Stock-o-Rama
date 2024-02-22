<script lang="ts">
  import type { Article } from '$lib/server/db/schema.js'
  import { fade } from 'svelte/transition'
	export let data
  
	const articles: Article[] = data.articles
</script>

<div out:fade={{ duration: 400 }} in:fade={{ delay: 400, duration: 400 }}>
  <h1>Welcome to articles view</h1>
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
        {#each articles as article (article.id)}
          <tr>
            <td>{article.code}</td>
            <td>{article.description}</td>
            <td>{article.code_fournisseur}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>