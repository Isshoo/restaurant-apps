import CONFIG from '../globals/config';

class RestoDetail extends HTMLElement {
  constructor() {
    super();
    this.resto = {
      id: null,
      name: null,
      description: null,
      city: null,
      address: null,
      pictureId: null,
      categories: null,
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
         <article class="detail-card">
              <h2 class="detail-title">${this.resto.name}</h2>
              <div class="detail-img">
                <img src="${CONFIG.BASE_IMAGE_URL + this.resto.pictureId}" alt="gambar restaurant ${this.resto.name}" />
              </div>

              <div class="detail-info">
                <p>${this.resto.categories}</p>
                <p>${this.resto.address}</p>
                <p>${this.resto.city}</p>
                <p>${this.resto.rating} <i class="fa-solid fa-star"></i></p>
                 <p>
                ${this.resto.description}
                </p>
              </div>
            </article>
        `;
  }
}

customElements.define('resto-detail', RestoDetail);
