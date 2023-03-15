import { addComment } from "./display-comment";
import { getComment } from "./display-comment";

export default () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id === 'submit-btn') {
        document.querySelector('#comments-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const id = document.querySelector('.card-popup').id[5];
            const username = document.getElementById('user-name').value;
            const comment = document.getElementById('user-comment').value;
            if (username !== '') {
              addComment(id, username, comment)
              setTimeout( () =>{
                document.querySelector('.comments').remove()
                getComment(event.target.parentElement.id[8])},
                1000)
            }
        })
    }     
})
}
