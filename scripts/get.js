
// script ini dibuat untuk memanggil function yang sudah dibuat pada smart-contract "FirstContract"


const hre = require("hardhat");
const {xadd} = require("../xadd.js");

async function main() {
  
  const FirstContractFactory = await hre.ethers.getContractFactory("FirstContract");
  const fc = await FirstContractFactory.attach(xadd); // inisialisasi alamat dari contract yang sudah dibuat

  const nama_owner = await fc.getOwner();
  const textRaw = await fc.textRaw();
  // menampilkan nama pemilik dengan urutan pemanggilan berdasarkan smart-contract
  // yang sudah dibuat, yaitu:
  // 1. masuk kedalam doc FirstContract.sol
  // 2. menjalankan constructor yang mengambil alamat owner
  // 3. state variable owner terisi dengan alamat owner
  // 4. menjalankan function getOwner yang dipanggil diatas yang valuenya ditampung di nama_owner
  // 5. menampilkan nama_owner

  console.log(nama_owner);
  console.log(`text = ${textRaw}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
