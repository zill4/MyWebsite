<script>
export let name;
export let gender;
export let bio;
export let age;
	import Navbar from './Navbar.svelte';
    import Poke from './Poke.svelte';
</script>

<p>
    Hi my name is {name}, I'm {age}, and I identify as a {gender}ale. 
    Here is a little bit about me: {bio}.
</p>
	<Poke/>
<!-- <Navbar navMessage={`Hey!!`} on:message={handleMessage}/> -->

	<!-- Sending props via specification -->
	<!-- <About name={me.name} age={me.age} gender={me.gender} bio={me.bio}/> -->
	<!-- Sending props all at once! -->
	<!-- <About {...me}/> -->