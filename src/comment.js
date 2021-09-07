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
}

export default Comment;
