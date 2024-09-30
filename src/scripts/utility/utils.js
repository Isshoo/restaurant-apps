class Utils {
  static generateUniqueId() {
    const unikId1 = Math.floor(Math.random() * 10000000000)
      .toString(16)
      .padStart(4, '0')
      .slice(0, 4);
    const unikId2 = Math.floor(Math.random() * 10000000000)
      .toString(16)
      .padStart(4, '0')
      .slice(0, 4);
    const unikId3 = Math.floor(Math.random() * 10000000000)
      .toString(16)
      .padStart(4, '0')
      .slice(0, 4);
    return `notes-${unikId1}-${unikId2}-${unikId3}`;
  }

  static generateCreatedAt() {
    const date = new Date();

    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    return date.toLocaleDateString('id-ID', options);
  }

  static makeReview(id, name, review, date) {
    return {
      id,
      name,
      review,
      date,
    };
  }
}

export default Utils;
