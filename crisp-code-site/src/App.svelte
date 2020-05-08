<script>
	import Link from './Link.svelte';
	import Route from './Route.svelte';
	export let name;

	
	  let isOpen = false;

	  
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
	color: #777;
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
 <!-- <nav class="navbar navbar-inverse">
 <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">CrispCode.io</a>
    </div>
	<ul class="nav navbar-nav">
		<li class="active"><Link  page={{path: '/', name: 'Home'}} /></li>
      <li><Link page={{path: '/about', name: 'About'}} /></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
	</ul>
	</div>
 </nav> -->
					 		
<!-- Main container goes here -->
<Route />

<footer class="text-center">
	<div class="social">
		<a class="fa fa-github" style="font-size:38px;color:grey" href="https://github.com/zill4/"></a>
		<a class="fa fa-twitch" style="font-size:38px;color:grey" href="https://www.twitch.tv/zill4/"></a>
		<a class="fa fa-twitter" style="font-size:38px;color:grey" href="https://twitter.com/justcr1sp"></a>
		<a class="fa fa-facebook" style="font-size:38px;color:grey" href="https://www.facebook.com/justin.l.troutman"></a>
		<a class="fa fa-linkedin" style="font-size:38px;color:grey" href="https://www.linkedin.com/in/justcrisp/"></a>
		<a class="fa fa-angellist" style="font-size:38px;color:grey" href="https://angel.co/u/justin-crisp"></a>
		<a class="fa fa-instagram" style="font-size:38px;color:grey" href="https://www.instagram.com/justinkrysp/"></a>
	</div>
	<p class="legal">© 2020 CrispCode.io code is guaranteed crisp, clean, and precise. Headquarters are in San Jose, California. </p>
</footer>