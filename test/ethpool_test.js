const ETHPoolContract = artifacts.require("ETHPool");
const truffleAssert = require('truffle-assertions');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

let accountsGlobal;

contract("ETHPoolContract deploy", accounts => {
  console.log("assert: ", assert)
  before("should set accountsGlobal", () => {
    accountsGlobal = accounts;
  });
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
  it("Should have 'depositFunds' method", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const depositFunds = await ethpool.depositFunds();
  })
})

describe("ETHPool depositRewards", () => {
  it("Should have 'depositRewards' method", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const depositRewards = await ethpool.depositRewards();
  })
})

describe("ETHPool withdrawFunds", () => {
  it("Should have 'withdrawFunds' method", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const withdrawFunds = await ethpool.withdrawFunds();
  })
})

describe("ETHPool is Ownable", () => {
  it("Should have owner", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const owner = await ethpool.owner();
  })
})

describe("ETHPool owner account", () => {
  it("Owner should match deployer account", async () => {
    const ethpool = await ETHPoolContract.deployed();
    const owner = await ethpool.owner();
    assert.equal(owner, accountsGlobal[0])
  })
})

describe('ETHPool depositRewards onlyOwner', () => {
  beforeEach(async () => {
    ethpool = await ETHPoolContract.deployed();
  });

  it("Non owners shouldn't be able to add rewards", async () => {
    try{
      const res = await ethpool.depositRewards({ from: accountsGlobal[1] });
      console.log(res)
    }catch(error){
      assert.isTrue(error.data.stack.includes("revert"))
    }
  })
  
  it('Owner should be able to add rewards', async () => {
    await ethpool.depositRewards({ from: accountsGlobal[0] }); 
  })
})