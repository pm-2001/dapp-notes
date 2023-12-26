require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { SEPOLIA_URL, ACCOUNTS_ID } = process.env;
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:`${SEPOLIA_URL}`,
      accounts:[`${ACCOUNTS_ID}`],
    }
  }
};
