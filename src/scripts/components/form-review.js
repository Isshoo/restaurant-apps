class FormReview extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
        <section id="formReview-con">
          <h2>Support <span>Us!</span></h2>
          <form id="reviewForm" autocomplete="on">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                autocomplete="on"
              />
            </div>
            <div class="desc-con">
              <label for="description">Reviews</label>
              <textarea
                id="description"
                name="description"
                placeholder="Give your reviews"
                autocomplete="on"
              ></textarea>
            </div>
            <button type="submit" id="reviewSubmit">Add Reviews</button>
          </form>
        </section>
          `;
  }
}

customElements.define('form-review', FormReview);
