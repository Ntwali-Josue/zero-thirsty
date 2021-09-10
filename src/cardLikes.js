import heartFilled from './images/filled-heart.svg';
import addLikes from './addLike';

const fetchUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0SK6xo1aXMm23qjduC9O/likes';
const numOfLikes = document.querySelectorAll('.counter');
const drinkTitle = document.querySelectorAll('.card-title');
const likeButton = document.querySelectorAll('.like');

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
        let counter = response[i].likes;
        likeButton[i].addEventListener('click', () => {
          counter += 1;
          numOfLikes[i].textContent = counter;
          addLikes(itemID);
        });
        numOfLikes[i].textContent = counter;
        likeButton[i].src = heartFilled;
      }
    });
  }
};

export default cardLikes;