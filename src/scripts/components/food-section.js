class FoodSection extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <div class="food-con">
          <div class="food-title">
          <h2 class="section-title"><span>Best Seller Menu</span></h2>
        </div>
        <div class="food-content">
          <article class="food-item">
            <img src="./images/food/lalapan.jpg" alt="Lalapan" />
            <h3>Lalapan</h3>
          </article>
          <article class="food-item">
            <img src="./images/food/martabak.jpg" alt="Martabak" />
            <h3>Martabak</h3>
          </article>
          <article class="food-item">
            <img src="./images/food/mie-ceplok.jpg" alt="Mie Ceplok" />
            <h3>Mie Ceplok</h3>
          </article>
          <article class="food-item">
            <img src="./images/food/nasi-campur.jpg" alt="Nasi Campur" />
            <h3>Nasi Campur</h3>
          </article>
          <article class="food-item">
            <img src="./images/food/sate.jpg" alt="Sate" />
            <h3>Sate</h3>
          </article>
        </div>
        </div>
        `;
  }
}

customElements.define('food-section', FoodSection);
