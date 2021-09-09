/**
 * @jest-environment jsdom
 */

import comment from '../src/comment';
import commentHTML from './_comment.html';

jest.mock('../src/comment.js');

beforeAll(async () => {
  document.body.innerHTML = commentHTML;
  comment.getCommenterData();
  await comment.sendComment('testID1', comment.commenterData);
  await comment.getComments('testID1');
});

describe('Test comment counter', () => {
  test('Counts number of comments that were previously created', () => {
    expect(comment.comments.length).toEqual(comment.commentCounter());
  });

  test('Checks that number of comments are never 0', async () => {
    document.body.innerHTML = commentHTML;
    comment.getCommenterData();
    await comment.sendComment('testID2', comment.commenterData);
    await comment.getComments('testID2');
    expect(comment.comments.length).toEqual(comment.commentCounter());
  });
});
