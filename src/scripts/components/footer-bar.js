class FooterBar extends HTMLElement {
  emptyContent() {
    this.innerHTML = "";
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
       <div class="footerbar">
        <p>
          Copyright &copy; 2024 Isshoo.
          - <em>Eat<span>Cuy</span></em>
        </p>
      </div>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
