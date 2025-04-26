require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Using account:", deployer.address);

  const contractAddress = process.env.REGISTER_CLIENT_ADDRESS;

  const RegisterAsClient = await ethers.getContractFactory("RegisterAsClient");
  const contract = RegisterAsClient.attach(contractAddress);

  const data = {
    A_WalletAddress: deployer.address,
    A_Role: "Client",
    A_RegisterationDate: Date.now(),
    A_Rank: "Newbie"
  };

  try {
    const tx = await contract.invoke(data);
    await tx.wait();
    console.log("Client registered successfully!");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
