import { addComment } from "./display-comment";
import { getComment } from "./display-comment";

const sendComment = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id === 'submit-btn') {
        document.querySelector('#comments-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const id = document.querySelector('.card-popup').id[5];
            const username = document.getElementById('user-name').value;
            const comment = document.getElementById('user-comment').value;
            if (username !== '') {
              addComment(id, username, comment)
              getComment(event.target.parentElement.parentElement.
                id[5])
            }
            document.getElementById('user-name').value =''
            document.getElementById('user-comment').value = ''
        })
    } 
})
}

export {sendComment}
