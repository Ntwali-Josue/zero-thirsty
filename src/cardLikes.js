/* eslint-disable no-loop-func */
import heartFilled from './images/filled-heart.svg';

const fetchUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0SK6xo1aXMm23qjduC9O/likes';
const numOfLikes = document.querySelectorAll('.counter');
const drinkTitle = document.querySelectorAll('.card-title');
const likeButton = document.querySelectorAll('#like');

const cardLikes = async () => {
  const fetchLikes = await fetch(fetchUrl, {
    method: 'GET',
  });
  const response = await fetchLikes.json();

  numOfLikes.forEach((num) => {
    num.textContent = 0;
  });

  for (let i = 0; i < response.length; i += 1) {
    const itemID = response[i].item_id;
    drinkTitle.forEach((title) => {
      if (title.textContent === itemID) {
        // console.log(title.textContent);
        // console.log(numOfLikes[i].textContent);
        // console.log(response[i].likes);
        numOfLikes[i].textContent = response[i].likes;
        likeButton[i].src = heartFilled;
      }
      numOfLikes[i].textContent = response[i].likes;
    });
  }
};

export default cardLikes;