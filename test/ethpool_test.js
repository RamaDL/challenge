const ETHPoolContract = artifacts.require("ETHPool");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ETHPoolContract deploy", accounts => {
  it("should assert true", async () => {
    await ETHPoolContract.deployed();
    return assert.isTrue(true);
  });

});

describe("ETHPool inital state", () => {
  it("Should have ETH Pool name as initial state", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const expected = "ETH Pool";
    const actual = await ethpool.name();
    assert.equal(actual, expected, "ETH Pool");
  });
});

describe("ETHPool depositFunds", () => {
  it("Should have 'deposit' method", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const actual = await ethpool.depositFunds();
  })
})

describe("ETHPool depositRewards", () => {
  it("Should have 'deposit' method", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const actual = await ethpool.depositRewards();
  })
})