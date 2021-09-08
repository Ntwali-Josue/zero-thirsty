import commentSection from './comment.html';

class Comment {
  constructor() {
    this.comments = [];
    this.commenterData = {};
  }

  commentCounter = () => {
    const commentNumber = this.comments.length;
    document.getElementById('comment-counter').innerHTML = `Comments (${commentNumber})`;
    this.comments = [];
    return commentNumber;
  }

  loadContent = (drink) => {
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

  loadComments = () => {
    if (this.comments.length > 0) {
      const ul = document.getElementById('comments');
      ul.innerHTML = '';
      this.comments.forEach((comment) => {
        const li = document.createElement('li');
        li.innerHTML = `${comment.creation_date} - ${comment.username}: ${comment.comment}`;
        ul.appendChild(li);
      });
      this.commentCounter(this.comments);
    }
  }

  sendComment = async (drinkID, commenter) => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3DpePqRJE0nWUgbeh7sC/comments';
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: drinkID,
        username: commenter.username,
        comment: commenter.comment,
      }),
    });
  }

  getComments = async (drinkID) => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3DpePqRJE0nWUgbeh7sC/comments?item_id=';
    const fetchDrink = await fetch((url + drinkID), {
      method: 'GET',
    });
    const data = await fetchDrink.json();
    this.comments = data;
  }

  getCommenterData = () => {
    const username = document.getElementById('commenter-name');
    const comment = document.getElementById('comment-body');
    this.commenterData = { username: username.value, comment: comment.value };
    username.value = '';
    comment.value = '';
  }
}

const comment = new Comment();
export default comment;
