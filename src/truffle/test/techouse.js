const TecHouse = artifacts.require("TecHouse");

contract("TecHouse", function () {
  it("contract deployed successfully", async function () {
    const address = TecHouse.deployed()
    assert(address !== "")
  });
});
