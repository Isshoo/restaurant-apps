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
          <h2>Support Us!</h2>
          <form id="reviewForm">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div>
              <label for="description">Reviews</label>
              <textarea
                id="description"
                name="description"
                placeholder="Give your reviews"
              ></textarea>
            </div>
            <button type="submit" id="reviewSubmit">Add Reviews</button>
          </form>
        </section>
          `;
  }
}

customElements.define('form-review', FormReview);
