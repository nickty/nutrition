/** @format */

import EmptyFoodNameError from './error/EmptyFoodNameError';
import InvalidFoodAmountError from './error/InvalidFoodAmountError';
import Nutritions from './Nutritions';

/** @format */
class Food {
  constructor(
    private readonly name: string,
    private readonly unit: string,
    private readonly baseValues: Nutritions
  ) {
    this.newMethod(name);
    this.newMethod_1(baseValues);
  }

  private newMethod_1(baseValues: Nutritions) {
    if (baseValues.amount <= 0) {
      throw new InvalidFoodAmountError(baseValues.amount);
    }
  }

  private newMethod(name: string) {
    if (name.length === 0) {
      throw new EmptyFoodNameError();
    }
  }

  getName(): string {
    return this.name;
  }

  getUnit(): string {
    return this.unit;
  }

  getBaseValues(): Nutritions {
    return this.baseValues;
  }
}

export default Food;
