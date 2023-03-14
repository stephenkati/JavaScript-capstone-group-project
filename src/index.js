import './style.css';
import {getPokemon, pokemonList} from './modules/getPokemon.js';

pokemonList.forEach((pokemon, index) => {
    getPokemon(pokemon, index)
})
