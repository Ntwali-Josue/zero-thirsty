import commentSection from './comment.html';

class Comment {
  constructor(username, commentBody, itemID) {
    this.username = username;
    this.commentBody = commentBody;
    this.creationDate = this.getDate();
    this.itemID = itemID;
  }

  getDate = () => {
    const date = new Date();
    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
    return `${year}-${month}-${day}`;
  }

  static loadContent = (drink) => {
    const comentWindow = document.getElementById('comment-window');
    comentWindow.innerHTML = commentSection;
    comentWindow.classList = 'comment-window';
    document.getElementById('drink-img').src = drink.strDrinkThumb;
    document.getElementById('drink-name').innerHTML = drink.strDrink;
    document.getElementById('category').innerHTML = `<strong>Category: </strong>${drink.strCategory}`;
    document.getElementById('glass-type').innerHTML = `<strong>Glass Type: </strong>${drink.strGlass}`;
    document.getElementById('main-ingridient').innerHTML = `<strong>Main Ingridient: </strong>${drink.strIngredient1}`;
    document.getElementById('measure').innerHTML = `<strong>Measure: </strong>${drink.strMeasure1}`;
  }
}

export default Comment;
