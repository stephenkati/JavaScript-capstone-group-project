import {involvementAPIURL, appId} from './setup-involvementAPi.js'

const addComment = async () => {
    const response = await fetch(`${involvementAPIURL}${appId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item_id: '1',
            username: "mike",
            comment: "hello micronaut"
        }),
    });

    const data = await response.text()
    return data;
}

const populateComment = (data) => {

  const cardPopup = document.querySelector('.card-popup')
  const commentSection = document.createElement('div')
  commentSection.className = '.comments'
  commentSection.innerHTML = `<h2>Comments(2)</h2>`
  data.forEach((element) => {
    commentSection.innerHTML += `
      <p>
        ${element.creation_date} ${element.username} : ${element.comment}
      </p>
      `
  });
  
  cardPopup.appendChild(commentSection)
} 


const getComment = async (index) => {
  const response = await fetch(`${involvementAPIURL}${appId}/comments?item_id=${index}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },

  });

  const data = await response.json();
  console.log(data)
  populateComment(data)

}

export default () => {
  document.querySelector('#cardLayout').addEventListener('click', (e) => {
    if(e.target.textContent === 'Comment') {
      getComment(e.target.parentElement.id)
    }
  })
}

export { addComment, getComment }
