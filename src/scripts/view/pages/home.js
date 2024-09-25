import home from '../home';

const Home = {
  async render() {
    return `
      <main id="mainContent">
      <section id="home"><hero-section></hero-section></section>
      <section id="explore">
        <explore-section></explore-section>
      </section>
      <section id="food">
        <food-section></food-section>
      </section>
    </main>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    home(); // Menghubungkan Home.js ke Home.html
  },
};

export default Home;
