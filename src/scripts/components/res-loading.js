class ResLoading extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <div class="loading-con">
         <h3>Loading...</h3>
    </div>
        `;
  }
}

customElements.define('res-loading', ResLoading);
