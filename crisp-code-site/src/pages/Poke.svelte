<script>
    let url = "https://pokeapi.co/api/v2/pokemon/6";
    let data = '';
    let promise = getPokemon();
    async function getPokemon(){
        let response = await fetch(url);
        console.log(response);
        data = await response.json();
        if (!response.ok)
            throw new Error(response.text);
        return data;
    }

    function handleClick(){
        url = "https://pokeapi.co/api/v2/pokemon/";
        let pokeNumber = Math.floor((Math.random() * 890) + 1);
        url = url.concat(pokeNumber.toString());
        promise = getPokemon(url);
        url = "https://pokeapi.co/api/v2/pokemon/";
    }

</script>
<div class="pokeball">

<p> I also love Pokemon... </p>
<button  type="button" class="btn btn-primary" on:click={handleClick}>
Who's that Pokemon!?
</button>

{#await promise}
<p>Hmmmmm....</p>
{:then pokemon}
<p>Its {pokemon.name}!</p>
<img src={pokemon.sprites.front_default} alt="Pokemon Sprite">
{:catch error}
<p style="color: pink">{error.message}</p>
{/await}
</div>

<style>
.pokeball {
     box-sizing: border-box;
  width: 50%;

  float: left;
}

</style>