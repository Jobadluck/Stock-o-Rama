<script>
	import Navbar from './Navbar.svelte'
	import Sidebar from './Sidebar.svelte'

	let open = false
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>
<slot/>

<style>
	:global(body) {
		padding: 0;
	}
</style>