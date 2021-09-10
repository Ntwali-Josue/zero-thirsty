class Drink {
  constructor(drinkID) {
    this.id = drinkID;
  }

  static getDrinkDetails = async (event) => {
    const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const drinkID = event.target.id.replace('comment', '');
    const fetchDrink = await fetch((drinkURL + drinkID), {
      method: 'GET',
    });
    const data = await fetchDrink.json();
    return data.drinks[0];
  }
}

export default Drink;
