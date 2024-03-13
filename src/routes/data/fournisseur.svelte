<script lang="ts">
	import type { Fournisseur } from "$lib/server/db/schema"
	import { Stretch } from "svelte-loading-spinners"
  export let fournisseurs: Promise<Fournisseur[]>
</script>

<div>
  {#await fournisseurs}
    <div class="d-flex justify-content-center align-items-center">
      <Stretch size="60" color="#FF3E00" unit="px" duration="1s" />
    </div>
  {:then receivedFournisseur}
    {#if receivedFournisseur.length === 0}
      <h5>Aucune donnée retournée</h5>
    {:else}
      <div class="p-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
              <th scope="col">Adresse</th>
            </tr>
          </thead>
          <tbody>
            {#each receivedFournisseur as fournisseur (fournisseur.id)}
              <tr>
                <td>{fournisseur.id}</td>
                <td>{fournisseur.nom}</td>
                <td>{fournisseur.description}</td>
                <td>{fournisseur.description}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  {:catch err}
  <!-- Handle error -->
    <p>Error: { JSON.stringify(err) }</p>
  {/await}
</div>