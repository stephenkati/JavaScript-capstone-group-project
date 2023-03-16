const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonList = ['pikachu', 'squirtle', 'dragonite', 'eevee', 'bulbasaur', 'arcanine'];

const getPokemon = async (pokemon, index) => {
  const response = await fetch(`${pokeAPI}${pokemon}`);
  const data = await response.json();
  const cardLayout = document.querySelector('#cardLayout');
  cardLayout.innerHTML += `
        <div class="card" id="${index}">
            <img src=${data.sprites.other.dream_world.front_default} alt=${data.name}>
            <div class="cardContent">
                <p class="pokemonTitle" > ${data.name} </p>
                <i class="fa-regular fa-heart" id='heartIcon-${index}'></i>
                <p id='likes-${index}' class="likes">0 likes</p>
            </div>
            <button class="commentBtn">Comment</button>
        </div>
    `;
};

export { getPokemon, pokemonList };