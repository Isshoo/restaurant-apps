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

  render() {
    this.emptyContent();
    this.innerHTML += `
         <article class="resto-card">
                <p>
                ${this.resto.foods}
                </p>
                <p>
                ${this.resto.drinks}
                </p>
            </article>
        `;
  }
}

customElements.define('resto-menus', RestoMenus);
