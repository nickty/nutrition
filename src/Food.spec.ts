/** @format */

import EmptyFoodNameError from './error/EmptyFoodNameError';
import InvalidFoodAmountError from './error/InvalidFoodAmountError';
import Food from './Food';

describe('Food', () => {
  test('create', () => {
    const baseValue = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };
    const food = new Food('rice', 'g', baseValue);

    expect(food).toBeDefined();
    expect(food.getName()).toEqual('rice');
    expect(food.getUnit()).toEqual('g');
    expect(food.getBaseValues().amount).toEqual(100);
    expect(food.getBaseValues().fat).toEqual(30);
    expect(food.getBaseValues().carbohydrate).toEqual(40);
    expect(food.getBaseValues().protein).toEqual(65);
    expect(food.getBaseValues().calories).toEqual(124);
    expect(food.getCurrentValues()).toEqual(food.getBaseValues());
  });

  test('create food with empty name', () => {
    const baseValue = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    expect(() => new Food('', 'g', baseValue)).toThrowError(EmptyFoodNameError);
  });

  test('Create food with zeo amount', () => {
    const baseValue = {
      amount: 0,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    expect(() => new Food('rice', 'g', baseValue)).toThrowError(
      InvalidFoodAmountError
    );
  });

  test('create food and change amoutn', () => {
    const baseValue = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    const food = new Food('price', 'g', baseValue);
    food.changeAmout(23);

    expect(food.getCurrentValues().amount).toEqual(23);
  });

  test('create food and change amount with ngative number', () => {
    const baseValue = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    const food = new Food('price', 'g', baseValue);

    expect(food.changeAmout(-23)).toThrowError(InvalidFoodAmountError);
  });
});
