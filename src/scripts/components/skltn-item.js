class SkltnItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  emptyContent() {
    this.innerHTML = '';
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
         <article class="resto-card">
              <div class="resto-img">
                <div class="skltn"></div>
              </div>

              <div class="resto-info">
                <span class="skltn">Gorontalo</span>
                <h3><a class="skltn">nama resto</a></h3>
                <p class="skltn">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                </p>
              </div>
              <div class="resto-rate skltn">
                <i class="skltn">&#9734;</i>
                <p class="skltn">4.5</p>
              </div>
            </article>
        `;
  }
}

customElements.define('skltn-item', SkltnItem);
