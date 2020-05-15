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
        <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/s960x960/70951415_2369022189841049_3140619029027225600_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=COs1gImcap0AX9wNmtb&_nc_ht=scontent-sjc3-1.xx&_nc_tp=7&oh=1c91a0a48643ad21b30096812e5f2aba&oe=5EE06A37" class="img-rounded" alt="Justin Crisp 2020" width="75%" height="75%"> 
        <h1>{data.firstName} {data.middleName} {data.lastName}</h1>

    </div>
            <h2>{data.header}</h2>
            <h3>{data.location}</h3>
        <br>
            <h4>{data.objective}</h4>
      <!-- <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#section1">Bio</a></li>
        <li><a href="#section2">Friends</a></li>
        <li><a href="#section3">Family</a></li>
        <li><a href="#section3">Photos</a></li>
      </ul> -->
      <br>
      <!-- <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog..">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div> -->
    </div>

    <div class="col-sm-9">
      <h4><small>WORK IN PROGRESS</small></h4>
        <ul class="nav nav-tabs">
          <li  on:click={handleTabClick(tab[0])}  class={tab[0].status}><a href="#">{tab[0].name}</a></li>
          <li  on:click={handleTabClick(tab[1])}  class={tab[1].status}><a href="#">{tab[1].name}</a></li>
          <li  on:click={handleTabClick(tab[2])}  class={tab[2].status}><a href="#">{tab[2].name}</a></li>
          <li  on:click={handleTabClick(tab[3])}  class={tab[3].status}><a href="#">{tab[3].name}</a></li>
          <li  on:click={handleTabClick(tab[3])}  class={tab[3].status}><a href="#">{tab[3].name}</a></li>
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
<!-- 
      <h4><small>RECENT POSTS</small></h4>
      <hr>
      <h2>Officially Blogging</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
      <h5><span class="label label-success">Lorem</span></h5><br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <hr>

      <h4>Leave a Comment:</h4>
      <form role="form">
        <div class="form-group">
          <textarea class="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
      <br><br>
      
      <p><span class="badge">2</span> Comments:</p><br> -->
      
      <div class="row">
        <!-- <div class="col-sm-2 text-center">
          <img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
          <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br>
        </div>
        <div class="col-sm-2 text-center">
          <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div> -->
        <!-- <div class="col-sm-10">
          <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
          <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br>
          <p><span class="badge">1</span> Comment:</p><br>
          <div class="row">
            <div class="col-sm-2 text-center">
              <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
            </div>
            <div class="col-xs-10">
              <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
              <p>Me too! WOW!</p>
              <br>
            </div>
          </div>
        </div> -->
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