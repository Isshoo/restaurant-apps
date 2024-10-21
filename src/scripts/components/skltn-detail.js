class SkltnDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  emptyContent() {
    this.innerHTML = '';
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
         <article class="detail-card">
              <div class="detail-title">
               <h2 class="skltn">Melting Pot</h2>
              </div>
              <div class="detail-img skltn">
                <img fetchpriority="high" src="./images/sate-small.jpg" alt="" class="skltn"/>
              </div>

              <div class="detail-info">
               <div id="info-cat" class="infos">
                <h3 class="labels">Categories</h3>
                <p class="skltn">Modern,Italia</p>
               </div>
               <div id="info-address" class="infos">
                <h3 class="labels">Address</h3>
                <p class="skltn">Jln. Belimbing Timur no 27</p>
               </div>
               <div id="info-city" class="infos">
                <h3 class="labels">City</h3>
                <p class="skltn">Surabaya</p>
               </div>
               <div id="info-rating" class="infos">
                <h3 class="labels">Rating</h3>
                <p class="skltn">4.2</p>
               </div>
               <div id="info-desc" class="infos">
                <h3 class="labels">Description</h3>
                <p class="skltn">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
               </div>
              </div>
            </article>
        `;
  }
}

customElements.define('skltn-detail', SkltnDetail);
