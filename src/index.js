import logo from './images/logo.png';
import heart from './images/heart.svg';
import drink from './images/drink.PNG';

const logoImg = document.querySelector('.logo');
logoImg.src = logo;
const drinkImage = document.querySelectorAll('.card-img-top');
const drinkTitle = document.querySelectorAll('.card-title');
const likeButton = document.querySelectorAll('#like');

const fetchUrl = 'https://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

const getDrinks = async () => {
  const fetchDrinks = await fetch(fetchUrl, {
    method: 'GET',
  });
  const data = await fetchDrinks.json();
  for (let i = 0; i < drinkImage.length; i += 1) {
    drinkImage[i].src = data.drinks[i].strDrinkThumb;
    drinkTitle[i].textContent = data.drinks[i].strDrink;
  }

  return data;
};

getDrinks();

const Items = {
  drinkImg: drink,
  drinkTitle: 'Testing',
  drinkLike: heart,
  drinklikes: 21,
  drinkComment: '',
};

likeButton.forEach((img) => {
  img.src = Items.drinkLike;
});
