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
      const foodList = document.createElement('p');
      foodList.textContent = food;
      return foodList;
    });
    foodsCon.innerHTML = '';
    foodsCon.append(...foodsList);

    const drinksCon = this.querySelector('#drinksList');
    const drinksList = this.resto.drinks.map((drink) => {
      const drinkList = document.createElement('p');
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
                <div id="food" class="menusOpt">
                <h3>Foods</h3>
                 <section id="foodsList" class="menuList"></section>
                </div>
                <div id="drink" class="menusOpt">
                <h3>Drinks</h3>
                 <section id="drinksList" class="menuList"></section>
                </div>
            </article>
        `;
    this.displayItem();
  }
}

customElements.define('resto-menus', RestoMenus);
