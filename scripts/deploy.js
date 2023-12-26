
const hre = require("hardhat");

async function main() {


  // const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

  // await lock.waitForDeployment();
  const Add = await hre.ethers.getContractFactory("Add");
  const add = await Add.deploy();
  await add.waitForDeployment();
  console.log(`deployed to ${add.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
