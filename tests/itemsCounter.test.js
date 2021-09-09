/**
 * @jest-environment jsdom
 */
import items from './_items.html';

document.body.innerHTML = items;
const getDrinks = document.querySelectorAll('.drink');
const counter = document.querySelector('.cocktails');
counter.innerHTML = getDrinks.length;

describe('All items counter', () => {
  test('should be defined', () => {
    expect(getDrinks).not.toBeNull();
    expect(counter).not.toBeNull();
  });
  test('should display total number of items', () => {
    const itemCounter = getDrinks.length.toString();
    expect(counter.innerHTML).toEqual(itemCounter);
  });
});
