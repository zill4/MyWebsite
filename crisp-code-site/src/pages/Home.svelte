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
		bio: 'I like to program with Svelte, Unreal Engine, and Bixby.'
	};

</script>

  <div class="jumbotron">
	<img src="./images/crispcode_logo.png" alt="crispcode.io"/>
	<p>Stay Hungry Stay Foolish</p>
	<!-- <button on:click={handleClick}> 
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button> -->
  </div>

  <div class="bio">
    <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/s960x960/83312683_2615618501848082_222548210093129728_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=OI9ub3NP7loAX_PT1O0&_nc_ht=scontent-sjc3-1.xx&_nc_tp=7&oh=60d4a8fc7f30095943b320ee587de484&oe=5EDA8751" class="img-rounded" alt="Justin Crisp 2020" width="25%" height="25%" > 
	 	<h1>Hi my name is Justin Crisp</h1>
  		<p>Thanks for visiting my website! I'm 23, love building cool projects, working with passionate people, and challenging the status quo.</p>
		<p>After moving to The Bay Area in 2015, I subsequently enrolled in De Anza College studying Computer Engineering for about 3 years.</p>
		<p>Once I completed the majority of my Computer Science classes, and started working part-time at RingCentral (A UCAAS company competing with Slack & Zoom), I decided to "drop out".</p>
		<p>I imediately enrolled at 42 Silicon Valley, a Computer Science school for those looking to focus on coding. The curicullum is in C, there are no teachers, and no classes.</p>
		<p>Around May 2019, I competed in, and won a hackathon sponsored by Samsung Bixby team. Since then I've been working in Developer Relations on the Bixby team.</p>
		<p>It's now 2020, almost 5 years since I arrived in the Bay Area. This year I look to challenge myself with new technologies, and drive to build great things, with amazing people, through coding.</p>
  </div>
		<Poke/>
	<!-- <p>{count} doubled is {doubled}</p>
	<p>{numbers.join(' + ')} = {sum}</p>
	<button on:click={addNumber}>
		Add a number
	</button> -->


	<br>
	<br>
	<br>
	<br>
	<br>
		<br>
	<br>
	<br>
	<br>
	<br>
<style>

	.jumbotron {
		text-align: center;
		padding: 5em;
		margin: 0 auto;
		font-family: Rational
		/* background-image: url('/vwave_background_2.gif');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;  */
	}

	.jumbotron p {
		color: black;
		font-family: 'Lucida Sans';
		font-size: 1em;
		font-weight: 100;
	}
	.bio h1 {
				padding-top: 50px;

	}
	.bio p{
		padding-right: 700px;
		word-spacing: 2px;
		border-spacing: 10mm;
	}
	.bio img {
		float: left;
		padding-top: 50px;
		padding-right: 50px;
		padding-bottom: 50px;
		padding-left: 50px;
		border-radius: 20%;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>