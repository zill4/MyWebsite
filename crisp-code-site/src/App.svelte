<script>
	export let name;
	let text = `<strong>Sample!</strong>`;
	import Navbar from './Navbar.svelte';

	let count = 0;
	
	function handleClick() {
		count += 1;
	}
	
</script>

<main>
	<h1>Bye {name}!</h1>
	<p>Do not visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte {@html text} apps.</p>
	<button on:click={handleClick}> 
	Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
</main>
<Navbar/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>