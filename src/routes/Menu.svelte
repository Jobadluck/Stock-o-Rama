<script>
  import { page } from '$app/stores'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  function emitMenu() {
    dispatch('menu')
  }

</script>

<nav class="hidden text-gray-500 uppercase text-bold sm:block">
  <a class="nav-link" on:click={emitMenu} class:active={$page.url.pathname === './'} aria-current="page" href="./">Dashboard</a>
  <a class="nav-link" on:click={emitMenu} class:active={$page.url.pathname === '/data'} aria-current="page" href="/data">Data</a>
  <a class="nav-link" on:click={emitMenu} class:active={$page.url.pathname === '/todo'} href="/todo">Todos</a>
</nav>