import TransportFactory from '../Pattern/TransportFactory';
import costOfDelivery from '../CostOfDelivery/CostOfDelivery';
import Form from '../Form/Form';


class Catalog {
  constructor(item) {
    this.item = item;
  }

  static render() {
    const tableTransport = document.querySelector('.table-transport tbody');
    const tableCosts = document.querySelector('.table-costs tbody');
    const factoryTransport = new TransportFactory();
    const createTruck = factoryTransport.create('Truck');
    const trucks = createTruck.getTruckListAsynAwait();
    const createShip = factoryTransport.create('Ship');
    const ships = createShip.getShipList();
    let listCosts = costOfDelivery.getItem();

    listCosts = listCosts.costs || [];
    tableTransport.innerHTML = '';
    tableCosts.innerHTML = '';

    trucks.then((result) => {
      if (result !== '') {
        setTimeout(() => {
          result.forEach((item, index) => {
            if (index === 0) {
              tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Trucks</td></tr>';
            }
            if (item === 'Internal error') {
              tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Internal error</td></tr>';
            } else {
              const truck = new TransportFactory().create('Truck', item);
              truck.addTruckInCatalog(truck.showId(),
                truck.showModel(),
                truck.showLicensePlate(),
                truck.showProducedYear(),
                truck.showCapacityInPounds(),
                truck.showAvarageSpeed(),
                truck.showTypeOfGas());
            }
          });
        }, 1000);
      }
    })
      .catch(() => {
        tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Trucks</td></tr><tr><td class="table-center" colspan="7">No Items</td></tr>';
      });

    if (ships.length > 0) {
      tableTransport.innerHTML += '<tr><td class="table-center" colspan="7">Ships</td></tr>';
      ships.forEach((item) => {
        const ship = new TransportFactory().create('Ship', item);
        ship.addShipInCatalog(ship.showId(),
          ship.showModel(),
          ship.showName(),
          ship.showProducedYear(),
          ship.showCapacityInPounds(),
          ship.showAvarageSpeed(),
          ship.showCountOfTeam());
      });
    }

    if (listCosts.length > 0) {
      listCosts.forEach(({ model, cargo, dist }) => {
        costOfDelivery.addCostInCatalog(model, cargo, dist);
      });
    }
  }

  saveInCatalog() {
    const element = this.item
      .parentElement
      .parentElement
      .parentElement;
    const ship = 'create-transport-ship';
    const truck = 'create-transport-truck';
    const cost = 'create-cost-delivery';

    if (element.classList.contains(ship)) {
      const newShip = new TransportFactory().create('Ship');
      const formData = Form.getDataFromForm(`.${ship}`);
      if (Form.isEmpty(formData) || Form.isValueSet(formData)) return;
      newShip.addShipToStorage(formData);
    } else if (element.classList.contains(truck)) {
      const newTruck = new TransportFactory().create('Truck');
      const formData = Form.getDataFromForm(`.${truck}`);
      if (Form.isEmpty(formData) || Form.isValueSet(formData)) return;
      newTruck.addTruckToStorage(formData);
    } else if (element.classList.contains(cost)) {
      const formData = Form.getDataFromForm(`.${cost}`);
      if (Form.isEmpty(formData) || Form.isValueSet(formData)) return;
      costOfDelivery.setItem(formData);
    }
    Catalog.render();
  }
}
export default Catalog;
