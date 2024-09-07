<script>
  import { page } from '$app/stores'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  function emitMenu() {
    dispatch('menu')
  }

</script>

<nav class="hidden text-gray-500 uppercase text-bold sm:block">
  <a class="nav-link" on:click={emitMenu} class:active={$page.url.pathname === '/data'} aria-current="page" href="/data">Données</a>
  <a class="nav-link" on:click={emitMenu} class:active={$page.url.pathname === '/todo'} href="/todo">Todos</a>
  <!-- <a class="nav-link" class:active={$page.url.pathname === '/view3'} href="/view3">Pricing</a> -->
  <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
</nav>