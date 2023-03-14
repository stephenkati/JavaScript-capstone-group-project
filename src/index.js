import './style.css';
import {getPokemon, pokemonList} from './modules/getPokemon.js';
import { addLike, getLike } from './modules/likes.js'

const onLoad =(() => { 
    pokemonList.forEach((pokemon, index) => {
    getPokemon(pokemon, index)
    getLike(index)
    })
})
onLoad()

document.querySelector('#cardLayout').addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-heart')){
        const index = parseInt(e.target.id[e.target.id.length-1])
        addLike(index)
        onLoad()
    }
}) 
