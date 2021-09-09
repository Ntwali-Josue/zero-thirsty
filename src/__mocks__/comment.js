import fetch from 'cross-fetch';

class Comment {
  commentCounter = () => {
    const commentNumber = this.comments.length;
    this.comments = [];
    return commentNumber;
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
  }
}

const comment = new Comment();
export default comment;
