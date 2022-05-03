// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
require("dotenv").config();

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
  const { _WANT, _POOLID, _CHEF, _VAULT, _UNIROUTER, _KEEPER, _STRATEGIST, _BEEFYFEERECIPIENT, _OUTPUTTONATIVEROUTE, _OUTPUTTOLP0ROUTE, _OUTPUTTOLP1ROUTE } = process.env;

  const StrategyCommonChefLPBsc = await hre.ethers.getContractFactory("StrategyCommonChefLPBsc");
  const Strategy = await StrategyCommonChefLPBsc.deploy(_WANT, _POOLID, _CHEF, _VAULT, _UNIROUTER, _KEEPER, _STRATEGIST, _BEEFYFEERECIPIENT, _OUTPUTTONATIVEROUTE, _OUTPUTTOLP0ROUTE, _OUTPUTTOLP1ROUTE  );

  await Strategy.deployed();

  console.log("Strategy deployed to:", Strategy.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
