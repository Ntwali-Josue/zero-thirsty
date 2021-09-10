import './style.css';
import logo from './images/logo.png';
import heart from './images/unfilled-heart.svg';
import Drink from './drink';
import comment from './comment';
import cardLikes from './cardLikes';

const logoImg = document.querySelector('.logo');
logoImg.src = logo;
const drinkImage = document.querySelectorAll('.card-img-top');
const drinkTitle = document.querySelectorAll('.card-title');
const likeButton = document.querySelectorAll('.like');
const commentButton = document.querySelectorAll('.btn-primary');
const cardsContainer = document.querySelectorAll('.drink');
const totalCocktails = document.querySelector('.cocktails');

totalCocktails.innerHTML += `(${cardsContainer.length})`;

likeButton.forEach((img) => {
  img.src = heart;
});

const fetchUrl = 'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

const drinkId = [];

const getDrinks = async () => {
  const fetchDrinks = await fetch(fetchUrl, {
    method: 'GET',
  });
  const data = await fetchDrinks.json();
  for (let i = 0; i < drinkImage.length; i += 1) {
    drinkImage[i].src = data.drinks[i].strDrinkThumb;
    drinkTitle[i].textContent = data.drinks[i].strDrink;
    drinkId[i] = data.drinks[i].strDrink;
    likeButton[i].id = `like${data.drinks[i].idDrink}`;
    commentButton[i].id = `comment${data.drinks[i].idDrink}`;
    commentButton[i].href = `#${data.drinks[i].strDrink}`;
  }
  return data;
};

document.getElementById('main').addEventListener('click', async (event) => {
  if (event.target.id.includes('comment')) {
    const apiDrink = await Drink.getDrinkDetails(event);
    const drink = new Drink(apiDrink.idDrink);
    comment.loadContent(apiDrink);
    await comment.getComments(drink.id);
    comment.loadComments();

    document.getElementById('send-comment').addEventListener('click', async () => {
      comment.getCommenterData();
      await comment.sendComment(drink.id, comment.commenterData);
      await comment.getComments(drink.id);
      comment.loadComments();
    });

    document.getElementById('close').addEventListener('click', () => {
      const comentWindow = document.getElementById('comment-window');
      comentWindow.innerHTML = '';
      comentWindow.classList = 'comment-off';
      document.getElementById('main').classList = 'row item container-lg m-auto';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  cardLikes();
  getDrinks();
});
