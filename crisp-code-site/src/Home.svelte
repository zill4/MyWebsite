<script>
    
	export let name;
	let text = `<strong>Sample!</strong>`;
	import Navbar from './Navbar.svelte';
	import About from './About.svelte';
	import Poke from './Poke.svelte';
	// From Navbar event handler
	function handleMessage(event) {
		alert(event.detail.text);
	}
	let count = 0;
	// Reactive declaration
	$: doubled = count *2;

	function handleClick() {
		count += 1;
	}
	
	// Reactive statements
	$: if (count >= 10){
		alert(`count is too damn high!`);
		count = 0;
	}

	let numbers = [1, 2, 3, 4, 5];
	function addNumber(){
		numbers.push(numbers.length + 1);
		numbers = numbers;
		// OR
		// numbers = [...numbers, numbers.lenth + 1];
	}
	$: sum = numbers.reduce((t,n) => t + n, 0);

	const me = {
		name: 'Justin',
		age: 23,
		gender: 'M',
		bio: 'I like to program with Svelte, Unreal Engine, and Bixby.'
	};

</script>

<!-- <main> -->
	<h1>Bye {name}!</h1>
	<p>Do not visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte {@html text} apps.</p>
	<button on:click={handleClick}> 
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
	<p>{count} doubled is {doubled}</p>
	<p>{numbers.join(' + ')} = {sum}</p>
	<button on:click={addNumber}>
		Add a number
	</button>
	<!-- Sending props via specification -->
	<!-- <About name={me.name} age={me.age} gender={me.gender} bio={me.bio}/> -->
	<!-- Sending props all at once! -->
	<About {...me}/>
	<Poke/>
<!-- </main> -->
<Navbar navMessage={`Hey!!`} on:message={handleMessage}/>

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