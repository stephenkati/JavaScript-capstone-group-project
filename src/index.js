import './style.css';
import {getPokemon, pokemonList} from './modules/getPokemon.js';
import showPopup, {closePopup}from './modules/comment-popup.js';
import { addLike, getLike } from './modules/likes.js'
import callComment from './modules/display-comment.js';
import { countItems } from './modules/itemCounter.js';

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


showPopup()
closePopup()

callComment()

countItems()