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
