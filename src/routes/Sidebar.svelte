<script>
	import Menu from './Menu.svelte'
	export let open = false

	function handleSidebar() {
		open = false
	}
</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<Menu on:menu={handleSidebar}/>
	
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>