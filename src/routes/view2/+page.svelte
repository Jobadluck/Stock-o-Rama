<script>
  import { fade } from 'svelte/transition'
</script>

<div out:fade={{ duration: 400 }} in:fade={{ delay: 400, duration: 400 }}>
  <h1>Welcome to view 2</h1>
</div>