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
            <picture>
              <source media="(max-width: 600px)" class="lazyload" data-srcset="./images/lalapan-small.jpg">
              <img
                class="lazyload"
                data-src='./images/lalapan-large.jpg' 
                alt="Lalapan"
              >
              </picture>
            <h3>Lalapan</h3>
          </article>
          <article class="food-item">
            <picture>
              <source media="(max-width: 600px)" class="lazyload" data-srcset="./images/martabak-small.jpg">
              <img
                class="lazyload"
                data-src='./images/martabak-large.jpg' 
                alt="Martabak"
              >
              </picture>
            <h3>Martabak</h3>
          </article>
          <article class="food-item">
            <picture>
              <source media="(max-width: 600px)" class="lazyload" data-srcset="./images/mie-ceplok-small.jpg">
              <img
                class="lazyload"
                data-src='./images/mie-ceplok-large.jpg' 
                alt="Mie Ceplok"
              >
              </picture>
            <h3>Mie Ceplok</h3>
          </article>
          <article class="food-item">
            <picture>
              <source media="(max-width: 600px)" class="lazyload" data-srcset="./images/nasi-campur-small.jpg">
              <img
                class="lazyload"
                data-src='./images/nasi-campur-large.jpg' 
                alt="Nasi Campur"
              >
              </picture>
            <h3>Nasi Campur</h3>
          </article>
          <article class="food-item">
            <picture>
              <source media="(max-width: 600px)" class="lazyload" data-srcset="./images/sate-small.jpg">
              <img
                class="lazyload"
                data-src='./images/sate-large.jpg' 
                alt="Sate"
              >
              </picture>
            <h3>Sate</h3>
          </article>
        </div>
        </div>
        `;
  }
}

customElements.define('food-section', FoodSection);
