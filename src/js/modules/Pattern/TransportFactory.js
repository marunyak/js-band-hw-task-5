/* eslint-disable class-methods-use-this */
import Ship from '../Transport/Ship';
import Truck from '../Transport/Truck';

class TransportFactory {
  // eslint-disable-next-line consistent-return
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line consistent-return
  create(type, args = '') {
    if (type === 'Ship') {
      return new Ship(args);
    }

    if (type === 'Truck') {
      return new Truck(args);
    }
  }
}

export default TransportFactory;
