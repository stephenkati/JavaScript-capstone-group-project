/**
 * @jest-environment jsdom
 */

import { countItems } from './itemCounter.js';

document.body.innerHTML = `
    <div class="container">
    <header class="header">
        <div class="logo"> <img src="./images/pokemonlogo.png" alt="Pokemon Gotta catch 'em all! "> </div>
        <ul>
            <li class="nav-item"> <a href="" id="pokeCounter"></a> </li>
            <li class="nav-item"> <a href=""> Moves </a> </li>
            <li class="nav-item"> <a href=""> Abilities </a> </li>
        </ul>
    </header>

    <div class="cardLayout" id="cardLayout">

    </div>

    </div>
`
    describe('test cases for item counter', () => {

        test('length of items to be 0', () => { 
            countItems()

            let pokemonNumber = document.querySelectorAll('.card').length;

            expect(pokemonNumber).toBe(0);
        })

        test('length of items to be 4', () => { 
            countItems()

            const cardLayout = document.querySelector('#cardLayout');
            cardLayout.innerHTML = `
                <div class="card" id="index-1">
                    <div class="cardContent">
                        <p class="pokemonTitle" > data.name </p>
                        <i class="fa-regular fa-heart" id='heartIcon-index'></i>
                        <p id='likes-index' class="likes">0 likes</p>
                    </div>
                    <button class="commentBtn">Comment</button>
                </div>
                <div class="card" id="index-2">
                    <div class="cardContent">
                        <p class="pokemonTitle" > data.name </p>
                        <i class="fa-regular fa-heart" id='heartIcon-index'></i>
                        <p id='likes-index' class="likes">0 likes</p>
                    </div>
                    <button class="commentBtn">Comment</button>
                </div>
                <div class="card" id="index-3">
                    <div class="cardContent">
                        <p class="pokemonTitle" > data.name </p>
                        <i class="fa-regular fa-heart" id='heartIcon-index'></i>
                        <p id='likes-index' class="likes">0 likes</p>
                    </div>
                    <button class="commentBtn">Comment</button>
                </div>
                <div class="card" id="index-4">
                    <div class="cardContent">
                        <p class="pokemonTitle" > data.name </p>
                        <i class="fa-regular fa-heart" id='heartIcon-index'></i>
                        <p id='likes-index' class="likes">0 likes</p>
                    </div>
                    <button class="commentBtn">Comment</button>
                </div>
            `

            let pokemonNumber = document.querySelectorAll('.card').length;

            expect(pokemonNumber).toBe(4);
        })
    })
