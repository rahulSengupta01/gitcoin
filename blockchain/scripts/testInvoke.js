const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const contractAddress = process.env.FREELANCER_CONTRACT_ADDRESS;
  const RegisterAsFreelancer = await ethers.getContractFactory("RegisterAsFreelancer");
  const contract = await RegisterAsFreelancer.attach(contractAddress);

  const walletAddress = deployer.address;
  const role = "Freelancer";
  const registerDate = Date.now(); // milliseconds
  const rank = "Newbie";

  const structTuple = {
    A_WalletAddress: walletAddress,
    A_Role: role,
    A_RegisterationDate: Math.floor(registerDate / 1000), // seconds since epoch (optional but better)
    A_Rank: rank,
  };

  try {
    const tx = await contract.invoke(structTuple);
    await tx.wait();
    console.log("✅ Freelancer registered successfully!");
  } catch (error) {
    console.error("❌ Error during registration:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
