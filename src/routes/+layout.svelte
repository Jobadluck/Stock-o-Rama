<script>
	import { page } from '$app/stores'
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<a
					class="nav-link" class:active={$page.url.pathname === '/data'} aria-current="page" href="/data">Données</a>
				<a class="nav-link" class:active={$page.url.pathname === '/todo'} href="/todo">Todos</a
				>
				<!-- 
				<a class="nav-link" class:active={$page.url.pathname === '/view3'} href="/view3">Pricing</a> -->
				<!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
			</div>
		</div>
	</div>
</nav>

<slot />