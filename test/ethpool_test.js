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

describe("Initial ETHPool contract state", () => {
  it("Should have 'name' specified at the constructor ", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const expected = "ETH Pool";
    const actual = await ethpool.name();
    assert.equal(actual, expected, "ETH Pool");
  });
});