import commentSection from './comment.html';

class Comment {
  static loadContent = (drink) => {
    const comentWindow = document.getElementById('comment-window');
    document.getElementById('main').classList += ' blur';
    comentWindow.innerHTML = commentSection;
    comentWindow.classList = 'comment-window';
    document.getElementById('drink-img').src = drink.strDrinkThumb;
    document.getElementById('drink-name').innerHTML = drink.strDrink;
    document.getElementById('category').innerHTML = `<strong>Category: </strong>${drink.strCategory}`;
    document.getElementById('glass-type').innerHTML = `<strong>Glass Type: </strong>${drink.strGlass}`;
    document.getElementById('main-ingridient').innerHTML = `<strong>Main Ingridient: </strong>${drink.strIngredient1}`;
    document.getElementById('measure').innerHTML = `<strong>Measure: </strong>${drink.strMeasure1}`;
  }

  static involveAPI = async () => {
    const comment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3DpePqRJE0nWUgbeh7sC/comments';
    const fetchDrink = await fetch(comment, {
      method: 'GET',
    });
    const data = await fetchDrink.json();
    console.log(data);
  }
}

export default Comment;
