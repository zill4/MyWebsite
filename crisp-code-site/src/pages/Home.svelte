<script>
	import Contact from './Contact.svelte';
	let text = `<strong>Sample!</strong>`;
	// import About from './About.svelte';
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
		bio: 'I like to program with Svelte, Unity, and Bixby.'
	};

</script>

  <div class="jumbotron">
	<img src="./images/crispcode_logo.png" alt="crispcode.io"/>
	<!-- <button on:click={handleClick}> 
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button> -->
  </div>

 <div class="row">

	<div class="col-3 col-s-3 menu">
			<img src="./images/headshot.jpg" class="img-rounded" alt="Justin Crisp 2020" width="25%" height="25%"/> 
	</div>
	<div class="col-6 col-s-9">
			<h1 class="intro">Hi my name is Justin Crisp</h1>
			<p class="par">
			Thanks for visiting my website! I love building cool projects, working with passionate people, and challenging the status quo.
			After moving to The Bay Area in 2015, I subsequently enrolled in De Anza College studying Computer Engineering for about 3 years.
			Once I completed the majority of my Computer Science classes, and started working part-time at RingCentral (A UCAAS company competing with Slack & Zoom), I decided to "drop out".
			I imediately enrolled at 42 Silicon Valley, a Computer Science school for those looking to focus on coding. The curicullum is in C, there are no teachers, and no classes.
			Around May 2019, I competed in, and won a hackathon sponsored by Samsung Bixby team.
			This year I look to challenge myself with new technologies, and drive to build great things, with amazing people, through coding.
			</p>
	</div>
	<div class="col-3 col-s-12">
		<div class="aside">
			<Poke/>

		</div>
	</div>
  </div>
	<!-- <p>{count} doubled is {doubled}</p>
	<p>{numbers.join(' + ')} = {sum}</p>
	<button on:click={addNumber}>
		Add a number
	</button> -->
<style>
.intro {
	padding: 10px;
}
.par {
	letter-spacing: 0.1em;
	line-height: 2.7em;
}
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}


.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu img {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	padding-top: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	padding-left: 20px;
	border-radius: 50%;
	height: 75%;
	width: 75%;
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {

  padding: 15px;
  color: black;
  text-align: center;
  font-size: 14px;

}



/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}

.jumbotron {
		display: flex;
		justify-content: center;
		padding: 125px;
		background: #0099cc;
}
</style>