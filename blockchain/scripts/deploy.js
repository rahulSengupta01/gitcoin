const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory
    const RegisterAsFreelancer = await hre.ethers.getContractFactory("RegisterAsFreelancer");

    // Deploy the contract
    const registerAsFreelancer = await RegisterAsFreelancer.deploy();

    // Wait for deployment to finish (v6 style)
    await registerAsFreelancer.waitForDeployment();

    // Get the deployed address
    const deployedAddress = await registerAsFreelancer.getAddress();

    console.log("RegisterAsFreelancer contract deployed to:", deployedAddress);
}

main().catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
});
