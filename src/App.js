import { useState } from 'react';
import { ethers } from 'ethers';
import FirstContract from "../src/artifacts/contracts/FirstContract.sol/FirstContract.json";
import './App.css';

function App() {

  // melakukan koneksi ke akun
  let contract;
  let provider;
  async function connect () {
    await window.ethereum.request( { method: 'eth_requestAccounts'});
    provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = await provider.getSigner().getAddress();
    document.getElementById('welcome').innerText += account;
    contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      FirstContract.abi,
      provider
    )
    await loadData();
  }

  // funcsi untuk merubah nama Owner
  async function setText() {
    // mengambil nama owner
    const textValue = document.getElementById('textRaw').value;
    // melakukan signer
    const fc = await contract.connect(await provider.getSigner());
    // merubah nama dengan memasukkan value dari nama owner yang sudah diambil
    await fc.setText(textValue);
    // restart dan menampilkan data baru
    await loadData();
  }

  // fungsi untuk menambahkan angka
  async function inc(){
    const fc = await contract.connect(await provider.getSigner()); // memanggil Metamask, untuk melakukan transaksi
    // menambahkan angka
    await fc.inc();
    await loadData();
  }

  async function loadData() {
    document.getElementById('owner').innerText = await contract.getOwner();
    document.getElementById('namaOwner').innerText = await contract.textRaw();
    document.getElementById('angka').innerText = await contract.angka();
  }

  return (
    <div className="App">
      <h1 id='welcome'>Hello,</h1>
      Owner Address = <div id='owner'></div>
      Nama Owner = <div id='namaOwner'></div>
      Angka = <div id='angka'></div>

      <input type='text' id='textRaw' placeholder='ganti nama owner'></input>
      <button onClick={setText}>Ganti Nama</button>
      <button onClick={inc}>Tambah Angka</button>

      <div id="wallet">
        <button onClick={connect}>
          connect wallet
        </button>
      </div>
    </div>
  );
}

export default App;
