import Transport from './Transport';
import storage from '../LocalStorage/LocalStorage';

class Ship extends Transport {
  constructor(obj = '') {
    super();
    this.storage = storage;
    if (obj !== '') {
      const {
        id,
        model,
        name,
        producedYear,
        capacity,
        averageSpeed,
        countOfTeam,
      } = obj;
      this.id = id;
      this.model = model;
      this.name = name;
      this.producedYear = producedYear;
      this.capacity = capacity;
      this.averageSpeed = averageSpeed;
      this.countOfTeam = countOfTeam;
    }
  }

  showName() {
    return this.name;
  }

  showCountOfTeam() {
    return this.countOfTeam;
  }

  addShipToStorage(formData) {
    const list = this.storage.get();
    if (!list.ships) list.ships = [];
    list.ships.push(formData);
    this.storage.save(list);
    return this;
  }

  getShipList() {
    const listTransport = this.storage.get();
    return listTransport.ships || [];
  }

  addShipInCatalog(...args) {
    const itemCatalog = args.map((item) => `<td>${item}</td>`);
    const item = `<tr>${itemCatalog.join('')}</tr>`;
    document.querySelector('.table-transport tbody').innerHTML += item;
    return this;
  }
}

export default Ship;
