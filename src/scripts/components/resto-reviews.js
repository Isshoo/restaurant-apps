class RestoReviews extends HTMLElement {
  constructor() {
    super();
    this.resto = {
      name: null,
      review: null,
      date: null,
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
             <p>${this.resto.name}</p>
             <p>${this.resto.review}</p>
             <p>${this.resto.date}</p>
            </article>
        `;
  }
}

customElements.define('resto-reviews', RestoReviews);
