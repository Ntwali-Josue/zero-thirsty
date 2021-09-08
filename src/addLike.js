const fetchUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3DpePqRJE0nWUgbeh7sC/likes';

const addLikes = async (drinkID) => {
  const postLikes = await fetch(fetchUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: drinkID,
    }),
  });
  const response = await postLikes.text();
  return response;
};

export default addLikes;