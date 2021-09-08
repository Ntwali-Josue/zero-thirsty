import './style.css';
import logo from './images/logo.png';
import heart from './images/unfilled-heart.svg';
import Drink from './drink';
import Comment from './comment';

const logoImg = document.querySelector('.logo');
logoImg.src = logo;
const drinkImage = document.querySelectorAll('.card-img-top');
const drinkTitle = document.querySelectorAll('.card-title');
const likeButton = document.querySelectorAll('#like');
const commentButton = document.querySelectorAll('.btn-primary');
likeButton.forEach((img) => {
  img.src = heart;
});

const fetchUrl = 'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

const getDrinks = async () => {
  const fetchDrinks = await fetch(fetchUrl, {
    method: 'GET',
  });
  const data = await fetchDrinks.json();
  for (let i = 0; i < drinkImage.length; i += 1) {
    drinkImage[i].src = data.drinks[i].strDrinkThumb;
    drinkTitle[i].textContent = data.drinks[i].strDrink;
    commentButton[i].id = `drink${data.drinks[i].idDrink}`;
    commentButton[i].href = `#${data.drinks[i].strDrink}`;
  }

  return data;
};

document.getElementById('main').addEventListener('click', async (event) => {
  if (event.target.id.includes('drink')) {
    const apiDrink = await Drink.getDrinkDetails(event);
    const drink = new Drink(apiDrink.idDrink);
    Comment.loadContent(apiDrink);
    const comments = await Comment.getComments(drink.id);
    Comment.loadComments(comments);

    document.getElementById('send-comment').addEventListener('click', async () => {
      const commenter = Comment.getCommenterData();
      Comment.sendComment(drink.id, commenter);
    });

    document.getElementById('close').addEventListener('click', () => {
      const comentWindow = document.getElementById('comment-window');
      comentWindow.innerHTML = '';
      comentWindow.classList = 'comment-off';
      document.getElementById('main').classList = 'row item m-5';
    });
  }
});

getDrinks();
