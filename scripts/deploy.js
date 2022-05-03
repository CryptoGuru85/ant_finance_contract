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
  const _WANT = 0x54f9fe531224fa43feb218b20aba84d22a8fdc0c

  const _POOLID = 4
  
  const _CHEF= 0x1083926054069aad75d7238e9b809b0ef9d94e5b
  
  const _VAULT= 0x4d574e560fc5c2dc8997c13e1a5eed1941df9914
  
  const _UNIROUTER= 0x10ed43c718714eb63d5aa57b78b54704e256024e
  
  const _KEEPER = 0x0d8e060ca2d847553ec14394ee6b304623e0d1d6
  
  const _STRATEGIST = 0x0d8e060ca2d847553ec14394ee6b304623e0d1d6
  
  const _BEEFYFEERECIPIENT = 0x0d8e060ca2d847553ec14394ee6b304623e0d1d6
  
  const _OUTPUTTONATIVEROUTE = ["0x531780face85306877d7e1f05d713d1b50a37f7a","0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"]
  
  const _OUTPUTTOLP0ROUTE = ["0x531780face85306877d7e1f05d713d1b50a37f7a","0x522348779dcb2911539e76a1042aa922f9c47ee3"]
  
  const _OUTPUTTOLP1ROUTE = ["0x531780face85306877d7e1f05d713d1b50a37f7a"]
  
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
