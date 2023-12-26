require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:'https://sepolia.infura.io/v3/d49b61ffcf4e4886ba3c7b969985764f',
      accounts:['0xee0b6c9a589e0370b4d22bd218060cd4f3da5456eaa3b40dea8ae7dbc4a915e5'],
    }
  }
};
