import Transport from './Transport';
import storage from '../LocalStorage/LocalStorage';

class Truck extends Transport {
  constructor(obj = '') {
    super();
    this.storage = storage;
    if (obj !== '') {
      const {
        id,
        model,
        licensePlate,
        producedYear,
        capacity,
        averageSpeed,
        typeOfGas,
      } = obj;
      this.id = id;
      this.model = model;
      this.licensePlate = licensePlate;
      this.producedYear = producedYear;
      this.capacity = capacity;
      this.averageSpeed = averageSpeed;
      this.typeOfGas = typeOfGas;
    }
  }

  showLicensePlate() {
    return this.licensePlate;
  }

  showTypeOfGas() {
    return this.typeOfGas;
  }

  addTruckInCatalog(...args) {
    const itemCatalog = args.map((item) => `<td>${item}</td>`);
    const item = `<tr>${itemCatalog.join('')}</tr>`;
    document.querySelector('.table-transport tbody').innerHTML += item;
    return this;
  }

  addTruckToStorage(formData) {
    const list = this.storage.get();
    if (!list.trucks) list.trucks = [];
    list.trucks.push(formData);
    this.storage.save(list);
    return this;
  }

  getTruckIdsCallback(callback) {
    setTimeout(() => {
      let listTransport = this.storage.get();
      if (listTransport.trucks) {
        listTransport = listTransport.trucks.map((item) => item.id);
      } else listTransport = [];
      callback(listTransport);
    }, 1000);
    return this;
  }

  getTruckIds() {
    return new Promise(((resolve) => {
      this.getTruckIdsCallback((result) => resolve(result));
    }));
  }

  getTruckByIdCallback(id, callback) {
    // eslint-disable-next-line consistent-return
    setTimeout(() => {
      const isError = Math.ceil(Math.random() * 1000) < 100;
      if (isError) {
        return callback(undefined, 'Internal error');
      }
      const listTransport = this.storage.get();
      const {
        // eslint-disable-next-line no-unused-vars
        idd,
        model,
        licensePlate,
        producedYear,
        capacity,
        averageSpeed,
        typeOfGas,
      } = listTransport.trucks.find((item) => id === item.id);

      callback({
        id,
        model: `${model} truck ${id}`,
        licensePlate,
        producedYear,
        capacity,
        averageSpeed,
        typeOfGas,
      });
    });
    return this;
  }

  getTruckById(id) {
    return new Promise((resolve, reject) => {
      this.getTruckByIdCallback(id, (result, error = '') => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }

  getTruckListCallback(callback) {
    const list = this.getTruckIds();
    const arr = [];
    list.then((result) => {
      result.forEach((item) => {
        const firstAttempt = this.getTruckById(item);
        firstAttempt.then((result1) => arr.push(result1))
          .catch(() => {
            const secondAttempt = this.getTruckById(item);
            secondAttempt.then((result2) => arr.push(result2))
              .catch((error2) => arr.push(error2));
          });
      });
      callback(arr);
    })
      .catch(() => callback(arr, 'Internal error'));
  }

  getTruckListPromise() {
    return new Promise(((resolve, reject) => {
      this.getTruckListCallback((result, error = '') => {
        if (error) reject(result);
        resolve(result);
      });
    }));
  }

  async getTruckListAsynAwait() {
    const result = await this.getTruckListPromise();
    return result;
  }
}

export default Truck;
