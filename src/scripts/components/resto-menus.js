class RestoMenus extends HTMLElement {
  constructor() {
    super();
    this.resto = {
      foods: null,
      drinks: null,
    };
  }

  set restow(value) {
    this.resto = value;

    // Render ulang
    this.render();
  }

  get restow() {
    return this.resto;
  }

  emptyContent() {
    this.innerHTML = '';
  }

  displayItem() {
    const foodsCon = this.querySelector('#foodsList');
    const foodsList = this.resto.foods.map((food) => {
      const foodList = document.createElement('li');
      foodList.textContent = food;
      return foodList;
    });
    foodsCon.innerHTML = '';
    foodsCon.append(...foodsList);

    const drinksCon = this.querySelector('#drinksList');
    const drinksList = this.resto.drinks.map((drink) => {
      const drinkList = document.createElement('li');
      drinkList.textContent = drink;
      return drinkList;
    });

    drinksCon.innerHTML = '';
    drinksCon.append(...drinksList);
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
         <article class="menus-container">
                <div>
                <h3>Foods</h3>
                 <ul id="foodsList"></ul>
                </div>
                <div>
                <h3>Drinks</h3>
                 <ul id="drinksList"></ul>
                </div>
            </article>
        `;
    this.displayItem();
  }
}

customElements.define('resto-menus', RestoMenus);
