<script>
// inline event: <div on:mousemove="{e => m = {x: e.clientX, y: e.clientY }}">

	import { createEventDispatcher } from 'svelte';


	let navKeys = [
		{id: 1, name:'Home', class: 'active'},
		{id: 2, name:'News', class: 'not-active'},
		{id: 3, name:'Contact', class: 'not-active'}
	];
	const dispatch = createEventDispatcher();

	function welcomeMessage() {
		dispatch('message', {
			text: 'Welcome!!'
		});
	}

	export let navMessage = `Welcome!`;

	let user = {loggedIn: false};

	function toggle(){
		user.loggedIn = !user.loggedIn;
	}
	// Event based update for mouse movement.
	var m = {x:0, y:0};

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;

	}
</script>

<!-- <div class="navbar">
	{#each navKeys as key (key.id)}
		<a class={key.class} target="_blank" href="#{key.name}">
			{key.name}
		</a>	
	{/each}

	<a class ="right" href="#message" on:click={welcomeMessage}>{navMessage}</a>
	
	<div on:mousemove={handleMousemove}>
		<a class ="right" href="#mouseData"> Mouse: {m.x} x {m.y} </a>
	</div>
		{#if user.loggedIn}
			<button on:click={toggle}>
			Log out 
			</button>
		{:else}
			<button on:click={toggle}>
			Log in 
			</button>
		{/if}

</div>  -->



<style>
/* Bottom NavBar */

/* Place the navbar at the bottom of the page, and make it stick */
.navbar {
	background-color: #333;
	overflow: hidden;
	position: fixed;
	bottom: 0;
	width: 100%;
  }
  
  /* Style the links inside the navigation bar */
  .navbar a {
	float: left;
	display: block;
	color: #f2f2f2;
	text-align: center;
	padding: 30px 30px;
	text-decoration: none;
	font-size: 17px;
  }

    .navbar a.right {
	float: right;
	display: block;
	color: white;
	text-align: center;
	padding: 30px 30px;
	text-decoration: none;
	font-size: 17px;
  }

  
  
  /* Change the color of links on hover */
  .navbar a:hover {
	background-color: #ddd;
	color: black;
  }
  
  /* Add a color to the active/current link */
  .navbar a.active {
	background-color: #4CAF50;
	color: white;
  }
</style>