class RestoItem extends HTMLElement {
  constructor() {
    super();
  }

  _emptyContent() {
    this.innerHTML = "";
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this.innerHTML += `
         <article class="resto-card">
              <div class="resto-img">
                <img src="./images/heros/hero-image_4.jpg" alt="gambar resto" />
              </div>

              <div class="resto-info">
                <span>Malang</span>
                <h3>Bring Your Phone Cafe</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet.
                </p>
              </div>
              <div class="resto-rate">
                <i class="fa-solid fa-star"></i>
                <p>4.5</p>
              </div>
            </article>
        `;
  }
}

customElements.define("resto-item", RestoItem);
