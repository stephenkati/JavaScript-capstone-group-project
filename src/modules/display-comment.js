import {involvementAPIURL, appId} from './setup-involvementAPi.js'

const addComment = async () => {
    const response = await fetch(`${involvementAPIURL}${appId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item_id: '1',
            username: "peter",
            comment: "nice to meet you"
        }),
    });

    const data = await response.text()
    return data;
}

const populateComment = (data) => {

  const cardPopup = document.querySelector('.card-popup')
  const commentSection = document.createElement('div')
  commentSection.className = '.comments'
  commentSection.innerHTML = `<h2>Comments(0)</h2>`
  if (data) {
    data.forEach((element) => {
      commentSection.innerHTML += `
        <p>
          ${element.creation_date} ${element.username} : ${element.comment}
        </p>
        `
    });
  }
  
  commentSection.innerHTML += `<h2 class="popup-titles">add a comment</h2>
  <form id="comments-form" method="post">
      <input class="form-elm" type="text" name="username" id="user-name" placeholder="Your name" required>
      <label for="user-name"></label></br>
      <textarea class="form-elm" id="user-comment" name="usercomment" rows="4" cols="30" placeholder="Your insights" required></textarea>
      <label for="user-comment"></label></br>
      <button class="form-elm" id="submit-btn" type="submit">Comment</button>
  </form>
  `

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
  if(data.error) {
    populateComment([])
  }
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
