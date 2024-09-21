class RestoItem extends HTMLElement {
  _resto = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
    rating: null,
  };

  constructor() {
    super();
  }

  set restow(value) {
    this._resto = value;

    // Render ulang
    this.render();
  }

  get restow() {
    return this._resto;
  }

  _emptyContent() {
    this.innerHTML = "";
  }

  render() {
    this._emptyContent();
    this.innerHTML += `
         <article class="resto-card">
              <div class="resto-img">
                <img src="${this._resto.pictureId}" alt="gambar restaurant ${this._resto.name}" />
              </div>

              <div class="resto-info">
                <span>${this._resto.city}</span>
                <h3>${this._resto.name}</h3>
                <p>
                ${this._resto.description}
                </p>
              </div>
              <div class="resto-rate">
                <i class="fa-solid fa-star"></i>
                <p>${this._resto.rating}</p>
              </div>
            </article>
        `;
  }
}

customElements.define("resto-item", RestoItem);
