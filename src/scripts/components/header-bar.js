class HeaderBar extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
        <div class="navbar-con">
        <div class="navbar">
          <div class="nav-title">
            <a href="" class="title">Eat<span>Cuy</span> </a>
          </div>
          <nav>
            <ul class="nav-list" id="nav-list">
              <li class="nav-item"><a href="#/home" class="nav-link">Home</a></li>
              <li class="nav-item">
                <a href="#/favorite" class="nav-link">Favorite</a>
              </li>
              <li class="nav-item">
                <a href="https://github.com/Isshoo" class="nav-link"
                  >About Us</a
                >
              </li>
            </ul>
          </nav>

          <div class="nav-extra">
            <div class="user-account">
              <a href="https://www.facebook.com/algi.ngenget/">
                <figure>
                  <picture>
                    <source media="(max-width: 600px)" class="lazyload" data-srcset="./images/hero-image1-small.jpg">
                    <img
                      class="lazyload"
                      data-src='./images/hero-image1-large.jpg' 
                      alt="Profile Picture"
                    >
                  </picture>
                </figure>
                <figcaption>Isshoo</figcaption>
              </a>
            </div>
            <!-- toggle button -->
            <button class="nav-toggle" id="nav-toggle">
              <i>&#9776;</i>
            </button>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define('header-bar', HeaderBar);
