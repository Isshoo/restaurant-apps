class FavoriteSection extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
           <div class="explore-con">
            <div class="explore-title">
              <h2>See Your Favorite <span>Restaurants</span></h2>
            </div>
            <div class="explore-menu" id="explore-menu">
              <form id="searchForm">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Cari Restaurant"
                />
                <button type="submit" id="searchSubmit">
                  <i>&#128269;</i>
                </button>
              </form>
              <div class="explore-buttons">
                <button id="all-list" class="filter-btn active">All</button>
                <button id="by-rating" class="filter-btn">
                  <span>By Rating</span> <i>&#9733;</i>
                </button>
                <button id="by-city" class="filter-btn">
                  <span>By City</span> <i>&#128204;</i>
                </button>
              </div>
            </div>
            <div id="resto-list">
              <span class="skltn">Tidak ada restoran yang disimpan sebagai favorit.</span>
            </div>
          </div>
          `;
  }
}

customElements.define('favorite-section', FavoriteSection);
