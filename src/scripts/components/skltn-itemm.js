class SkltnItemm extends HTMLElement {
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
                 But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
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

customElements.define('skltn-itemm', SkltnItemm);
