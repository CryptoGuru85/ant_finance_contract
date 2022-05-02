// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  console.log("====================================")
  console.log("Deploying smart contract now...");
  console.log("====================================");
  // const name = "CronosNft";
  // const symbol = "Camels";
  // const baseURI = "https://gateway.pinata.cloud/ipfs/QmRYbBQvXzutXp1krFAWp5P9WtLQ6s5vLNrxbtBunb7ffU/";
  const baseURI = "ipfs://QmY4eSHDbsvD7MfgYU3miYSxnNXkXQTrZ4xjUCLD8B6vES/";  
  
  const CronosNft = await hre.ethers.getContractFactory("CronosNft");
  const cronosNft = await CronosNft.deploy(baseURI);

  await cronosNft.deployed();

  console.log("CronosNft deployed to:", cronosNft.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
