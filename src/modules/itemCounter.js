const countItems = () => {
  setTimeout(() => {
    const pokemonNumber = document.querySelectorAll('.card').length;
    const itemCounter = document.querySelector('#pokeCounter');
    itemCounter.innerHTML = `Pokemons (${pokemonNumber})`;
    return pokemonNumber;
  }, 3000);
};

export default countItems;
