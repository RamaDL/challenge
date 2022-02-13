const ETHPoolContract = artifacts.require("ETHPool");
const truffleAssert = require('truffle-assertions');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

contract("ETHPoolContract deploy", accounts => {
  
  var ethPoolInstance;
  var owner = accounts[0];
  var notOwner = accounts[1];
  
  beforeEach("Should create contract instance.", async () => {
      ethPoolInstance = await ETHPoolContract.deployed({from:owner});
  });

  it("Should have ETH Pool name as initial state.", async () => {
    const expected = "ETH Pool";
    const actual = await ethPoolInstance.name();
    assert.equal(actual, expected, "contract name should match.");
  });

  it("Should have 'depositFunds' method.", async () => {
    return await ethPoolInstance.depositFunds();
  })

  it("Should have 'depositRewards' method.", async () => {
    return await ethPoolInstance.depositRewards();
  })

  it("Should have 'withdrawFunds' method.", async () => {
    return await ethPoolInstance.withdrawFunds();
  })

  it("Should have owner.", async () => {
    const owner = await ethPoolInstance.owner();
  })

  it("Should match owner with deployer account.", async () => {
    assert.equal(owner, await ethPoolInstance.owner())
  })

  it("Should restrict add rewards to non owners.", async () => {
      await truffleAssert.reverts(ethPoolInstance.depositRewards({ from: notOwner }));
  })
  
  it('Should allow owner to add rewards.', async () => {
    await truffleAssert.passes(ethPoolInstance.depositRewards({ from: owner })); 
  })

});