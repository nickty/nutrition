/** @format */

module.exports = {
  global: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtentions: ['ts', 'js'],
  tranform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/src/**/*.spec.ts'],
  testEnvironment: 'node',
};
