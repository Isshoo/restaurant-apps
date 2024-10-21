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
          <div class="review-item skltn">
          </div>
        `;
  }
}

customElements.define('skltn-reviews', SkltnReviews);
