<script lang="ts">
  import { choice } from '$lib/store'

  let tabChoice: string = 'article'
  // reactive update of choice store variable
  $: {
    choice.set(tabChoice)
  }
</script>

<div class="p-3 d-flex justify-content-center">
  <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked on:click="{() => { tabChoice = 'article' }}">
  <label class="btn btn-secondary" for="option1">Articles</label>

  <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" on:click="{() => { tabChoice = 'fournisseur' }}">
  <label class="btn btn-secondary" for="option2">Fournisseurs</label>

  <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" on:click="{() => { tabChoice = 'client' }}">
  <label class="btn btn-secondary" for="option3">Clients</label>
</div>

<h1>Liste des { tabChoice }s</h1>
<slot />