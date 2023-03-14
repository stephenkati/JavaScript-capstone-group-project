import './style.css';
import {getPokemon, pokemonList} from './modules/getPokemon.js';

pokemonList.forEach((pokemon) => {
    getPokemon(pokemon)
})