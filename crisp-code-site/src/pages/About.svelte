<script>
import data from '../store/data.js';
import Experience from './resume/Experience.svelte';
import Achievements from './resume/Achievements.svelte';
import Volunteer from './resume/Volunteer.svelte';
import Education  from './resume/Education.svelte';
import Projects  from './resume/Projects.svelte';

let tab = [
  { id: 1, name: 'Experience',  status: 'active'},
  { id: 2, name: 'Achievements',  status: 'inactive'},
  { id: 3, name: 'Projects',  status: 'inactive'},
  { id: 4, name: 'Education',     status: 'inactive'}
  // { id: 5, name: 'Vounteer',      status: 'inactive'}
  ];

function handleTabClick (item){
  tab.forEach(e => e.status = 'inactive');
  tab[item.id - 1].status = 'active';
}

</script>
  <div>
    <h1>Resume</h1>
  </div>
 <div class="row">
	  <div class="col-3 col-s-3 menu">
    <div class="profile">
  			<img src="./images/headshot.jpg" class="img-rounded" alt="Justin Crisp 2020" width="10%" height="10%"> 
        <h1>{data.firstName} {data.middleName} {data.lastName}</h1>
        <p>{data.header}</p>
            <p>{data.location}</p>
        <br>
            <p>{data.objective}</p>
    </div>
	  </div>

<div class="col-8 col-s-12">
		<div class="aside">

 <!-- <h4><small>WORK IN PROGRESS</small></h4> -->
        <ul class="navtabs">
          <li  on:click={handleTabClick(tab[0])}  class={tab[0].status}><a href="#">{tab[0].name}</a></li>
          <li  on:click={handleTabClick(tab[1])}  class={tab[1].status}><a href="#">{tab[1].name}</a></li>
          <li  on:click={handleTabClick(tab[2])}  class={tab[2].status}><a href="#">{tab[2].name}</a></li>
          <li  on:click={handleTabClick(tab[3])}  class={tab[3].status}><a href="#">{tab[3].name}</a></li>
          <!-- <li  on:click={handleTabClick(tab[4])}  class={tab[4].status}><a href="#">{tab[4].name}</a></li> -->
        </ul>
    {#if tab[0].status == 'active'}
    <Experience />
    {:else if tab[1].status == 'active'}
    <Achievements />
    {:else if tab[2].status == 'active'}
    <Projects />
    {:else if tab[3].status == 'active'}
    <Education />
    <!-- {:else if tab[4].status == 'active'}
    <Volunteer /> -->
    {/if}
		</div>
	</div>
</div>
<div class="row">

</div>


<!-- <div class="container-fluid">
  <div class="row content">


    <div class="col-sm-9">
     
      <div class="row">
      </div>
    </div>
  </div>
</div> -->

<style>
.navtabs {
    list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color:  #33b5e5;

}
.navtabs li {
 float:left;
}

.navtabs li a {
  display: block;
  color: black;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

.navtabs li a:hover {
  background-color: white;
}
.container {
    padding: 4px;
    border: 2px solid black;
}

.profile img {
		padding-top: 50px;
		padding-right: 50px;
		padding-bottom: 50px;
		padding-left: 50px;
		border-radius: 50%;
    height: 10%;
    width: 10%;
}
.experience {
    text-align: left;
    padding: 2em;
    margin: 0 auto;
    font-family: Rational;
    
}

.experience h2 {
    font-size: 20px; 
}

.experience p {
    font-size: 16px; 
}
.container {
    border: 2px solid black;

}
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

/* .jumbotron {
		display: flex;
		justify-content: center;
		padding: 125px;
		background: #0099cc;
} */
</style>