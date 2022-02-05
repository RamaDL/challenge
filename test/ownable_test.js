const ownable_test = artifacts.require("ownable_test");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ownable_test", function (/* accounts */) {
  it("should assert true", async function () {
    await ownable_test.deployed();
    return assert.isTrue(true);
  });
});
