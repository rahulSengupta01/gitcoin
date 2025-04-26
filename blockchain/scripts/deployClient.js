const { ethers } = require("hardhat");

async function main() {
  const RegisterAsClient = await ethers.getContractFactory("RegisterAsClient");
  const contract = await RegisterAsClient.deploy(); // Deploying

  await contract.waitForDeployment(); // Wait for it to be mined (for Hardhat Ethers v6+)

  console.log("RegisterAsClient deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
