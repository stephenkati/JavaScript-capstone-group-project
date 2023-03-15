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


test('length of items to be 6', () => { 

    countItems()

    expect(countItems()).toBe(6);

})