class HeroSection extends HTMLElement {
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
       <div class="home-container">
          <div class="home-content">
            <h1>Find <span>Your Mom's</span> favorite restaurant!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              eleifend est. Sed in gravida purus. Donec ac tristique metus.
              Donec commodo, nisi sed mollis fermentum, justo ligula fringilla
            </p>
            <a href="#explore"
              >Find Now <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
        </div>
      `;
  }
}

customElements.define("hero-section", HeroSection);
