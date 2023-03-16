/**
 * @jest-environment jsdom
 */

import { countComment } from './commentCounter.js';

describe('countComment', () => {
  test('should return the numberof the comments', () => {
    const parentNode = document.createElement('div');
    parentNode.innerHTML = `
        <h2 id="comment-title"></h2>
        

        <h2 class="popup-titles">add a comment</h2>
        <form id="comments-form" method="post">
        </form>
        `;

    const result = countComment(parentNode);

    expect(result).toBe(0);
  });

  test('should return the numberof the comments', () => {
    const parentNode = document.createElement('div');
    parentNode.innerHTML = `
        <h2 id="comment-title"></h2>

        <p>2023-03-14 Mike : Hello micronaut!</p>
        <p>2023-03-15 Laure : Comment vous allez?</p>
        <p>2023-03-16 peter : Don't give up</p>

        <h2 class="popup-titles">add a comment</h2>
        <form id="comments-form" method="post">
        </form>
        `;

    const result = countComment(parentNode);

    expect(result).toBe(3);
  });
});