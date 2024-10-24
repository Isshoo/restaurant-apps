class ExploreSection extends HTMLElement {
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
            <h2>Explore <span>Restaurant</span></h2>
          </div>
          <div class="explore-menu" id="explore-menu">
            <form id="searchForm">
              <input
                type="text"
                id="searchInput"
                placeholder="Cari Restaurant"
              />
              <button type="submit" id="searchSubmit" aria-label="search button">
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
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-itemm></skltn-itemm>
            <skltn-itemm></skltn-itemm>
            <skltn-itemm></skltn-itemm>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-itemm></skltn-itemm>
            <skltn-itemm></skltn-itemm>
            <skltn-itemm></skltn-itemm>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
            <skltn-item></skltn-item>
          </div>
        </div>
        `;
  }
}

customElements.define('explore-section', ExploreSection);
