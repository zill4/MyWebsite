<script>
	import Link from './Link.svelte';
	import Route from './Route.svelte';

	
	let isOpen = false;  
	let navItems = [
		{ id: 1, name: 'Home', link: {path: '/', name: 'Home'} , status: 'active'},
	//	{ id: 2, name: 'About', link: {path: '/about', name: 'About'}, status: 'inactive'}
		{ id: 2, name: 'Resume', link: {path: '/resume', name: 'Resume'}, status: 'inactive'}
		// { id: 4, name: 'Projects', link: {path: '/projects', name: 'Projects'}, status: 'inactive'}
	];

	function handleNavClick(item){
		navItems.forEach(e => e.status = 'inactive');
		navItems[item.id - 1].status = 'active';
	}
	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
	

</script>

<style>
	.navbar{
		margin-bottom:0;
	}
	footer {
	background-color: #2d2d30;
	color: #f5f5f5;
	padding: 32px;
	}



	footer a:hover {
	color: black;
	text-decoration: none;
	}

	footer a {
		padding: 2rem;
	}
	.legal {
		font-size: 11px;
	}
</style>

<!-- Navigation goes here -->
 <nav class="navbar navbar-inverse">
 <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">CrispCode.io</a>
    </div>
	<ul class="nav navbar-nav">
		{#each navItems as item}
		<li on:click={handleNavClick(item)} class={item.status}><Link  page={item.link} /></li>
		<!-- <li class="active"><Link  page={{path: '/', name: 'Home'}} /></li>
      	<li><Link page={{path: '/about', name: 'About'}} /></li>
      	<li><Link page={{path: '/resume', name: 'Resume'}} /></li>
      	<li><Link page={{path: '/projects', name: 'Projects'}} /></li> -->
		  {/each}
	</ul>
	</div>
 </nav>
					 		
<!-- Main container goes here -->

<Route />

<!-- Footer  goes here -->
<footer class="text-center">
	<div class="social">
		<a href="https://github.com/zill4/"> <i class="fa fa-github" style="font-size:38px;color:grey"></i></a>
		<a href="https://www.twitch.tv/zill4/"><i class="fa fa-twitch" style="font-size:38px;color:grey"></i></a>
		<a href="https://twitter.com/justcr1sp"><i class="fa fa-twitter" style="font-size:38px;color:grey"></i></a>
		<a href="https://www.facebook.com/justin.l.troutman"><i class="fa fa-facebook" style="font-size:38px;color:grey"></i></a>
		<a href="https://www.linkedin.com/in/justcrisp/"><i class="fa fa-linkedin" style="font-size:38px;color:grey"></i></a>
		<a href="https://angel.co/u/justin-crisp"><i class="fa fa-angellist" style="font-size:38px;color:grey"></i></a>
		<a href="https://www.instagram.com/justinkrysp/"><i class="fa fa-instagram" style="font-size:38px;color:grey"></i></a>
	</div>
	<p class="legal">© 2020 CrispCode.io code is guaranteed crisp, clean, and precise. Headquarters are in San Jose, California. </p>
</footer>