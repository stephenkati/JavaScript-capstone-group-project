/**
 * @jest-environment jsdom
 */

import { countComment } from "./display-comment";

document.body.innerHTML = `
    <div id="popup-window">
        <div class="card-popup" id="card-0>
            <div class="comments" id="comment-0">
                <h2 id="comment-title"></h2>

                <h2 class="popup-titles">add a comment</h2>
                <form id="comments-form" method="post">
                </form>
            </div>
        </div>
    </div>
`


test('length of items to be 6', () => { 

    countComment()
    const list = document.querySelector('.comments')
    
    expect(countComment(list)).toBe(0);

})