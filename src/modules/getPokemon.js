const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonList = ['pikachu', 'squirtle', 'dragonite', 'eevee', 'bulbasaur', 'arcanine']

const getPokemon = async (pokemon) => {
    const response = await fetch(`${pokeAPI}${pokemon}`)
    const data = await response.json()
    const cardLayout = document.querySelector('#cardLayout');
    cardLayout.innerHTML += `
        <div class="card">
            <img src=${data.sprites.front_default} alt=${data.name}>
            <p class="pokemonTitle" > ${data.name} </p>
            <p>2 likes</p>
            <button>Comment</button>
            <button>Reservations</button>
        </div>
    `
}

export {getPokemon, pokemonList}