const TecHouse = artifacts.require("TecHouse");

contract("TecHouse", function (/* accounts */) {
  it("should assert true", async function () {
    await TecHouse.deployed();
    return assert.isTrue(true);
  });
});
