class FooterBar extends HTMLElement {
  constructor() {
    super();
  }

  _emptyContent() {
    this.innerHTML = "";
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
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
