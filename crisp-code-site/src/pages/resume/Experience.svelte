<script>
import data from '../../store/data.js';


</script>     
    
<div class="experience">
    {#each data.experience as exp}
    <hr>
    <h2>{exp.title}</h2>
    <h4>{exp.company}</h4>
    <img src={exp.img} alt={exp.company}>
    <h5><span class="glyphicon glyphicon-time"></span>  {exp.start} - {exp.end} </h5>
    <h5>{exp.location}</h5><br>
        {#each exp.bullets as point}
            <p>{point}</p>
        {/each}
    <br><br>
    {/each}
</div>