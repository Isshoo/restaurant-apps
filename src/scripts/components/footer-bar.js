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
          Copyright &copy; 2024 <a href="https://github.com/Isshoo">Isshoo</a>.
          - <em>Eat<span>Cuy</span></em>
        </p>
      </div>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
