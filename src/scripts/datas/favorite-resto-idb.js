import Swal from 'sweetalert2';
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    try {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal mendapatkan restoran!',
      });
      return console.log('Gagal mendapatkan restoran!');
    }
  },
  async getAllResto() {
    try {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal mendapatkan list restoran!',
      });
      return console.log('Gagal mendapatkan list restoran!');
    }
  },
  async putResto(resto) {
    try {
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Restaurant ditambahkan ke daftar favorit!',
      });
      return (await dbPromise).put(OBJECT_STORE_NAME, resto);
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menambahkan restoran ke daftar favorit!',
      });
      return console.log('Gagal menambahkan restoran ke daftar favorit!');
    }
  },
  async deleteResto(id) {
    try {
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Restaurant dihapus dari daftar favorit!',
      });
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menghapus restoran dari daftar favorit!',
      });
      return console.log('Gagal menghapus restoran dari daftar favorit!');
    }
  },
};

export default FavoriteRestoIdb;
