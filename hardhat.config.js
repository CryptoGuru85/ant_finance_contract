require("dotenv").config();

require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const getHDWallet = () => {
  const { PRIVATE_KEY } = process.env;
  if (PRIVATE_KEY && PRIVATE_KEY !== "") {
    return [PRIVATE_KEY]
  }
  throw Error("Private Key Not Set! Please set up .env");
}


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    development: {
      url: "http://localhost:8545",
      accounts: getHDWallet(),
     },
    testnet: {
      url: "https://cronos-testnet-3.crypto.org:8545",
      accounts: getHDWallet(),
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/4c4bc80bdac94b5390950776ca678dc9",
      accounts: getHDWallet(),
    },
    mainnet: {
      url: "https://evm-cronos.crypto.org/",
      accounts: getHDWallet(),
    }
  },

  solidity: "0.8.4",
};
