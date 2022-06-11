/** @format */

import Nutritions from './Nutritions';

/** @format */
class Food {
  constructor(
    private readonly name: string,
    private readonly unit: string,
    private readonly baseValues: Nutritions
  ) {}

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
