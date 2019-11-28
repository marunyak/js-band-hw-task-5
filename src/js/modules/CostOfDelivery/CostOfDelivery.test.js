import CostOfDelivery from './CostOfDelivery';

describe(`CostOfDelivery methods`, () => {

    it(`getItem method should return empty array`, () => {
      expect(CostOfDelivery.getItem()).toStrictEqual({});
    });

    it(`addCostInCatalog method should return this`, () => {
      expect(CostOfDelivery.setItem('test')).toStrictEqual(this);
    });
  });
