class Loading {
  static delay(response = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 400);
    });
  }

  static async restoList() {
    const restoContainer = document.querySelector('#resto-list');
    const loadingElement = document.createElement('res-loading');

    restoContainer.innerHTML = '';

    restoContainer.append(loadingElement);

    await this.delay();
  }

  static async restoDetail() {
    const detailContainer = document.querySelector('#resto');
    const loadingElement = document.createElement('res-loading');

    detailContainer.innerHTML = '';

    detailContainer.append(loadingElement);

    await this.delay();
  }

  static async restoMenu() {
    const menuContainer = document.querySelector('#menus');
    const loadingElement = document.createElement('res-loading');

    menuContainer.innerHTML = '';

    menuContainer.append(loadingElement);
    await this.delay();
  }

  static async restoReview() {
    const reviewContainer = document.querySelector('#reviews');
    const loadingElement = document.createElement('res-loading');

    reviewContainer.innerHTML = '';
    reviewContainer.append(loadingElement);

    await this.delay();
  }
}

export default Loading;
