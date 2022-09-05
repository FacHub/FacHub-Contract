const { address, both, etherMantissa } = require('../Utils/Ethereum');
const { makeComptroller, makeCToken } = require('../Utils/Compound');

describe('Comptroller', () => {
  let comptroller, cToken;
  let root, accounts;

  beforeEach(async () => {
    [root, ...accounts] = saddle.accounts;
  });
