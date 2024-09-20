class Utils {
  static generateUniqueId() {
    const unikId1 = Math.floor(Math.random() * 10000000000)
      .toString(16)
      .padStart(4, "0")
      .slice(0, 4);
    const unikId2 = Math.floor(Math.random() * 10000000000)
      .toString(16)
      .padStart(4, "0")
      .slice(0, 4);
    const unikId3 = Math.floor(Math.random() * 10000000000)
      .toString(16)
      .padStart(4, "0")
      .slice(0, 4);
    return `notes-${unikId1}-${unikId2}-${unikId3}`;
  }

  static generateCreatedAt() {
    const date = new Date();
    return date.toISOString();
  }

  static makeNewObject(id, title, body, createdAt, archived) {
    return {
      id,
      title,
      body,
      createdAt,
      archived,
    };
  }

  static emptyElement(element) {
    element.innerHTML = "";
  }
  static showElement(element) {
    element.style.display = "block";
    element.hidden = false;
  }
  static hideElement(element) {
    element.style.display = "none";
    element.hidden = true;
  }

  static delay(response = null) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(response);
      }, 1000)
    );
  }
}

export default Utils;
