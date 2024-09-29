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
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <div class="explore-buttons">
                <button id="all-list" class="filter-btn active">All</button>
                <button id="by-rating" class="filter-btn">
                  <span>By Rating</span> <i class="fa-solid fa-star"></i>
                </button>
                <button id="by-city" class="filter-btn">
                  <span>By City</span> <i class="fa-solid fa-city"></i>
                </button>
              </div>
            </div>
            <div id="resto-list"></div>
          </div>
          `;
  }
}

customElements.define('favorite-section', FavoriteSection);
