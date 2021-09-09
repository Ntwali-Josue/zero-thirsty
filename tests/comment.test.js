/**
 * @jest-environment jsdom
 */

import comment from '../src/comment.js';
import commentHTML from './_comment.html';

jest.mock('../src/comment.js');

beforeAll( async () => {
  document.body.innerHTML = commentHTML;
  comment.getCommenterData();
  await comment.sendComment('testID1', comment.commenterData);
});

describe('', () => {
  test('', () => {
    expect(comment.comments).toEqual([]);
  });
});
