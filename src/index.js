import './style.css';
import {getPokemon, pokemonList} from './modules/getPokemon.js';
import { addLike, getLike } from './modules/likes.js'

pokemonList.forEach((pokemon, index) => {
    getPokemon(pokemon, index)
    addLike(index)
    getLike(index)
})
