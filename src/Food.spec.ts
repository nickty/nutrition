/** @format */

import Food from './Food';

describe('Food', () => {
  test('create', () => {
    const baseValue = {
      amount: 100,
    };
    const food = new Food('rice', 'g', baseValue);

    expect(food).toBeDefined();
    expect(food.getName()).toEqual('rice');
    expect(food.getUnit()).toEqual('g');
    expect(food.getBaseValues().amount).toEqual(100);
  });
});
