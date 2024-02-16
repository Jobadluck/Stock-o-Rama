<script lang="ts">
    export let data
    const { callNbr } = { callNbr: data.callNbr }
</script>

<h1>Welcome to Stock-o-Rama</h1>
<p>Page d'accueil</p>
<span>Nombre d'appel de la fonction load coté serveur: {callNbr}</span>