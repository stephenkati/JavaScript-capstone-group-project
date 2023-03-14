const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'

const commentPopup = (data) => {

  const body = document.querySelector('body')
  const commentPopup = document.createElement('div')
  commentPopup.id = 'popup-window'
  
  commentPopup.innerHTML = `
  <div class="card-popup" id="card-${0}">
  <i id=close-btn class="fa-regular fa-x"></i>
    <img src=${data.sprites.front_default} alt=${data.name}>
    <h2 class="pokemonTitle" > ${data.name} </h2>
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

const getData = async (target) => {
  const pokemon = target.children[0].alt
  const response = await fetch(`${pokeAPI}${pokemon}`)
  const data = await response.json()
  commentPopup(data)
}

export default () => {
  document.querySelector('#cardLayout').addEventListener('click', (e) => {
    if (e.target.textContent === 'Comment') {
      getData(e.target.parentElement)
    }
  })
}

const closePopup = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id ==='close-btn') {
      e.target.parentElement.parentElement.remove();
    }
  })
} 

export {closePopup}