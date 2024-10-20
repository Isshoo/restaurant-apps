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
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
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
