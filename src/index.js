import './style.css';
import {getPokemon, pokemonList} from './modules/getPokemon.js';
import showPopup, {closePopup}from './modules/comment-popup.js';
import { addLike, getLike } from './modules/likes.js'
import callComment from './modules/display-comment.js';

pokemonList.forEach((pokemon, index) => {
    getPokemon(pokemon, index)
    addLike(index)
    getLike(index)
})


showPopup()
closePopup()

callComment()