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
          <div class="review-item">
            <div class="review-name">
              <h3>${this.resto.name}</h3>
            </div>
            <div class="review-des">
              <p>" ${this.resto.review} "</p>
            </div>
            <div class="review-date">
              <p>${this.resto.date}</p>
            </div>
          </div>
        `;
  }
}

customElements.define('resto-reviews', RestoReviews);
