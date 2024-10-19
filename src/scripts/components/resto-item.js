import CONFIG from '../globals/config';

class RestoItem extends HTMLElement {
  constructor() {
    super();
    this.resto = {
      id: null,
      name: null,
      description: null,
      pictureId: null,
      city: null,
      rating: null,
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
              <div class="resto-img">
                <img class="lazyload" data-src="${CONFIG.SMALL_IMAGE_URL + this.resto.pictureId}" alt="gambar restaurant ${this.resto.name}" />
              </div>

              <div class="resto-info">
                <span>${this.resto.city}</span>
                <h3><a href="/#/detail/${this.resto.id}">${this.resto.name}</a></h3>
                <p>
                ${this.resto.description}
                </p>
              </div>
              <div class="resto-rate">
                <i class="fa-solid fa-star"></i>
                <p>${this.resto.rating}</p>
              </div>
            </article>
        `;
  }
}

customElements.define('resto-item', RestoItem);
