<script>
	import Link from './Link.svelte';
	import Route from './Route.svelte';
	import { Grid, HeaderNav, HeaderNavItem, HeaderNavMenu, Header, Row, Column } from "carbon-components-svelte";

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
	.page-container {
		position: relative;
		min-height: 100vh;
	}

	.content-wrap {
		padding-bottom: 2.5rem;
	}
	
	.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 3.5rem;
	background-color: #2d2d30;
	color: #f5f5f5;
	}
	
	.footer .flex-container {
		display: flex;
		justify-content: center;
	}
	.flex-container > a {
		width: 100px;
		padding: 9px;
		text-align: center;
		font-size: 30px;
	}

</style>
<!-- Header Nav Bar -->
<Header platformName="CrispCode.io">
	<HeaderNav aria-label="CrispCodeNavbar">
		{#each navItems as item}
		<Link  page={item.link}/>
		{/each}
	</HeaderNav>
</Header>
<!-- Main container goes here -->
<div class="page-container">
	<div class="content-wrap">
		<!-- Page content -->
			<Route />
	</div>
		<!-- Footer -->
			<footer class="footer">
				<div class="flex-container">
					<a href="https://github.com/zill4/"> <i class="fa fa-github" style="font-size:38px;color:grey"></i></a>
					<a href="https://www.twitch.tv/zill4/"><i class="fa fa-twitch" style="font-size:38px;color:grey"></i></a>
					<a href="https://twitter.com/justcr1sp"><i class="fa fa-twitter" style="font-size:38px;color:grey"></i></a>
					<a href="https://www.facebook.com/justin.l.troutman"><i class="fa fa-facebook" style="font-size:38px;color:grey"></i></a>
					<a href="https://www.linkedin.com/in/justcrisp/"><i class="fa fa-linkedin" style="font-size:38px;color:grey"></i></a>
					<a href="https://angel.co/u/justin-crisp"><i class="fa fa-angellist" style="font-size:38px;color:grey"></i></a>
					<a href="https://www.instagram.com/justinkrysp/"><i class="fa fa-instagram" style="font-size:38px;color:grey"></i></a>
				</div>
			</footer>
</div>
	 	