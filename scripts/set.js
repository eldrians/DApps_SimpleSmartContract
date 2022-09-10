
// script ini dibuat untuk memanggil function yang sudah dibuat pada smart-contract "FirstContract"
const hre = require("hardhat");
const {xadd} = require("../xadd.js");

async function main() {

  const FirstContractFactory = await hre.ethers.getContractFactory("FirstContract");
  const fc = await FirstContractFactory.attach(xadd); // inisialisasi alamat dari contract yang sudah dibuat

  const textRaw = await fc.setText("Ella Ismalina");
  console.log(`text = ${textRaw}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
