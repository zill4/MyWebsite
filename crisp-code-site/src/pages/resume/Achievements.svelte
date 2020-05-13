<script>
import data from '../../store/data.js';


</script>     
    
<div class="experience">
    {#each data.achievements as ach}
    <hr>
    <h2>{ach.title}</h2>
    <img src={ach.img.link} width={ach.img.width} height={ach.img.height} alt={ach.img.title}>
    <h5><span class="glyphicon glyphicon-time"></span>{ach.start}</h5>
    <p>{ach.description}</p>
        {#each ach.links as point}
            <li><a href={point.link}>{point.title}</a></li>
        {/each}
    <br><br>
    {/each}
</div>
