<script>
import data from '../../store/data.js';


</script>     
    
<div class="experience">
    <div class="row">
        {#each data.achievements as ach}
            <hr>
            <h2>{ach.title}</h2>
            <div class="row">
                <div  class="col-3 col-s-3 menu">
                    <img src={ach.img.link} width={ach.img.width} height={ach.img.height} alt={ach.img.title}>
                    <h5><span class="glyphicon glyphicon-time"></span>{ach.start}</h5>
                </div>
            <div class="col-8 col-s-12">
                <p>{ach.description}</p>
                    {#each ach.links as point}
                        <li><a href={point.link}>{point.title}</a></li>
                    {/each}
            </div>
        </div>
    <br><br>
    {/each}
</div>
</div>

<style>
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

li {
    float: left;
     padding: 10px;
}

</style>