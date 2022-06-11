/** @format */

import EmptyFoodNameError from './error/EmptyFoodNameError';
import InvalidFoodAmountError from './error/InvalidFoodAmountError';
import Nutritions from './Nutritions';

/** @format */
class Food {
  private currentValeus: Nutritions;

  constructor(
    private readonly name: string,
    private readonly unit: string,
    private readonly baseValues: Nutritions
  ) {
    this.newMethod(name);
    this.validateFoodAmount(baseValues.amount);
    this.currentValeus = { ...baseValues };
  }

  private validateFoodAmount(amount: number) {
    if (amount <= 0) {
      throw new InvalidFoodAmountError(amount);
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

  getCurrentValues(): Nutritions {
    return this.currentValeus;
  }

  changeAmout(amount: number) {
    this.validateFoodAmount(amount);
    this.currentValeus.amount = amount;
  }
}

export default Food;
