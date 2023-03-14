const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'

const commentPopup = (data) => {

  const body = document.querySelector('body')
  const commentPopup = document.createElement('div')
  commentPopup.id = 'popup-window'
  
  commentPopup.innerHTML = `
  <div class="card-popup" id="card-${0}">
  <i id=close-btn class="fa-regular fa-x"></i>
    <img src=${data.sprites.front_default} alt=${data.name}>
    <p class="pokemonTitle" > ${data.name} </p>
    <div id="pokemonInfos">
      <p class="pokemonInfo" >Base experience : ${data.base_experience}</p>
      <p class="pokemonInfo" >Type : ${data.types[0].type.name}</p>
      <p class="pokemonInfo" >Height : ${data.height}</p>
      <p class="pokemonInfo" >Weight : ${data.weight}</p>
    </div>
  </div>
  `
  body.appendChild(commentPopup)
} 
