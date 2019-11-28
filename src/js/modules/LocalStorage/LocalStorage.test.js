import storage from './LocalStorage';

describe(`LocalStorage methods`, () => {
    it(`get method should return object`, () => {
      expect(storage.get()).toStrictEqual({});
    });

    // it(`isEmpty method should return true`, () => {
    //     expect(Form.isEmpty({})).toStrictEqual(true);
    // });

    // it(`isEmpty method should return false`, () => {
    //     expect(Form.isEmpty({1:'1'})).toStrictEqual(false);
    // });
  });
