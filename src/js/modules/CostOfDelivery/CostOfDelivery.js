import storage from '../LocalStorage/LocalStorage';

class CostOfDelivery {
  constructor() {
    this.storage = storage;
  }

  setItem(formData) {
    const list = this.storage.get();
    if (!list.costs) list.costs = [];
    list.costs.push(formData);
    this.storage.save(list);
  }

  getItem() {
    return this.storage.get();
  }

  addCostInCatalog(...args) {
    const itemCatalog = args.map((item) => `<td>${item}</td>`);
    const item = `<tr>${itemCatalog.join('')}</tr>`;
    document.querySelector('.table-costs tbody').innerHTML += item;
    return this;
  }
}
const costOfDelivery = new CostOfDelivery();

export default costOfDelivery;
