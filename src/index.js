import './style.css';
import {getPokemon, pokemonList} from './modules/getPokemon.js';
import showPopup, {closePopup}from './modules/comment-popup';

pokemonList.forEach((pokemon, index) => {
    getPokemon(pokemon, index)
})


showPopup()
closePopup()