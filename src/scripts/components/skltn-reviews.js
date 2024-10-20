class SkltnReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  emptyContent() {
    this.innerHTML = '';
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
          <div class="review-item">
            <div class="review-name">
              <h3 class="skltn">John Doe</h3>
            </div>
            <div class="review-des">
              <p class="skltn">" tidak direkomendasi untuk pelajar! "</p>
            </div>
            <div class="review-date">
              <p class="skltn">12 desember 2024</p>
            </div>
          </div>
        `;
  }
}

customElements.define('skltn-reviews', SkltnReviews);
