import { pokemonList } from './getPokemon.js';

let pokemonNumber = '';

const countItems = () => {
    pokemonNumber = pokemonList.length;
    const itemCounter = document.querySelector('#pokeCounter');
    itemCounter.innerHTML = `Pokemons (${pokemonNumber})`
    console.log(pokemonList.length)
}

export { countItems }
