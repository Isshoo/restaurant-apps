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
              <div class="detail-title">
               <h2>${this.resto.name}</h2>
              </div>
              <div class="detail-img">
                <img class="lazyload" data-src="${CONFIG.MEDIUM_IMAGE_URL + this.resto.pictureId}" alt="gambar restaurant ${this.resto.name}" />
              </div>

              <div class="detail-info">
               <div id="info-cat" class="infos">
                <h3 class="labels">Categories</h3>
                <p>${this.resto.categories}</p>
               </div>
               <div id="info-address" class="infos">
                <h3 class="labels">Address</h3>
                <p>${this.resto.address}</p>
               </div>
               <div id="info-city" class="infos">
                <h3 class="labels">City</h3>
                <p>${this.resto.city}</p>
               </div>
               <div id="info-rating" class="infos">
                <h3 class="labels">Rating</h3>
                <p>${this.resto.rating}</p>
               </div>
               <div id="info-desc" class="infos">
                <h3 class="labels">Description</h3>
                <p>${this.resto.description}</p>
               </div>
              </div>
            </article>
        `;
  }
}

customElements.define('resto-detail', RestoDetail);
