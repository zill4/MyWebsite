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
  { id: 4, name: 'Education',     status: 'inactive'},
  { id: 5, name: 'Vounteer',      status: 'inactive'}
  ];

function handleTabClick (item){
  tab.forEach(e => e.status = 'inactive');
  tab[item.id - 1].status = 'active';
}

</script>


<div class="container-fluid">
  <div class="row content">
    <div class="col-sm-3 sidenav">
    <div class="profile">
        <img src="./images/headshot.jpg" class="img-rounded" alt="Justin Crisp 2020" width="75%" height="75%"> 
        <h1>{data.firstName} {data.middleName} {data.lastName}</h1>
    </div>
            <h2>{data.header}</h2>
            <h3>{data.location}</h3>
        <br>
            <h4>{data.objective}</h4>
      <br>
    </div>

    <div class="col-sm-9">
      <h4><small>WORK IN PROGRESS</small></h4>
        <ul class="nav nav-tabs">
          <li  on:click={handleTabClick(tab[0])}  class={tab[0].status}><a href="#">{tab[0].name}</a></li>
          <li  on:click={handleTabClick(tab[1])}  class={tab[1].status}><a href="#">{tab[1].name}</a></li>
          <li  on:click={handleTabClick(tab[2])}  class={tab[2].status}><a href="#">{tab[2].name}</a></li>
          <li  on:click={handleTabClick(tab[3])}  class={tab[3].status}><a href="#">{tab[3].name}</a></li>
          <li  on:click={handleTabClick(tab[4])}  class={tab[4].status}><a href="#">{tab[4].name}</a></li>
        </ul>
    {#if tab[0].status == 'active'}
    <Experience />
    {:else if tab[1].status == 'active'}
    <Achievements />
    {:else if tab[2].status == 'active'}
    <Projects />
    {:else if tab[3].status == 'active'}
    <Education />
    {:else if tab[4].status == 'active'}
    <Volunteer />
    {/if}
      <div class="row">
      </div>
    </div>
  </div>
</div>

<style>

.container {
    border: 2px solid black;
}

.profile img {
		padding-top: 50px;
		padding-right: 50px;
		padding-bottom: 50px;
		padding-left: 50px;
		border-radius: 50%;
    height: 25%;
    width: 25%;
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


</style>