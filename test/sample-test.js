const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CronosNft", function () {
  it("Should return the new CronosNft once it's changed", async function () {
    const CronosNft = await ethers.getContractFactory("CronosNft");
    const cronosNft = await CronosNft.deploy("Hello, world!");
    await cronosNft.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
