const { ethers } = require("hardhat");

async function main() {
  // Connect to the local Hardhat network
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Specify the contract address (replace with actual deployed address)
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";  // Replace with actual address

  // Use the contract's ABI to interact with it
  const RegisterAsFreelancer = await ethers.getContractFactory("RegisterAsFreelancer");
  const contract = await RegisterAsFreelancer.attach(contractAddress);

  // Call the `invoke` function (adjusted for data)
  const data = {
    A_WalletAddress: deployer.address,
    A_Role: "Freelancer",
    A_RegisterationDate: Date.now(),
    A_Rank: "Newbie"
  };

  try {
    const tx = await contract.invoke(data);
    await tx.wait();  // Wait for the transaction to be mined
    console.log("Freelancer registered successfully!");
  } catch (error) {
    console.error("Error during registration:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
