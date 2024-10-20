class SkltnMenus extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  emptyContent() {
    this.innerHTML = '';
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
         <article class="menus-container">
                <div id="food" class="menusOpt">
                <h3>Foods</h3>
                 <section id="foodsList" class="menuList">
                  <p class="skltn">makanan</p>
                  <p class="skltn">makanan</p>
                  <p class="skltn">makanan</p>
                  <p class="skltn">makanan</p>
                  <p class="skltn">makanan</p>
                  <p class="skltn">makanan</p>
                  <p class="skltn">makanan</p>
                 </section>
                </div>
                <div id="drink" class="menusOpt">
                <h3>Drinks</h3>
                 <section id="drinksList" class="menuList">
                  <p class="skltn">minuman</p>
                  <p class="skltn">minuman</p>
                  <p class="skltn">minuman</p>
                  <p class="skltn">minuman</p>
                  <p class="skltn">minuman</p>
                  <p class="skltn">minuman</p>
                  <p class="skltn">minuman</p>
                 </section>
                </div>
            </article>
        `;
  }
}

customElements.define('skltn-menus', SkltnMenus);
