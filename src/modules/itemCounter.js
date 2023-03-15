import { pokemonList } from './getPokemon.js';


const countItems = () => {
    let pokemonNumber = pokemonList.length;
    const itemCounter = document.querySelector('#pokeCounter');
    itemCounter.innerHTML = `Pokemons (${pokemonNumber})`;
    return pokemonNumber;
}

export { countItems }
