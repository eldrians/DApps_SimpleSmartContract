/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FirstContract {
    
    //state variable
    string public textRaw; // dibuat public agar bisa dipanggil di script
    address private owner; // variable tidak bisa dipanggil di script harus menggunakan get
    uint public angka;

    // digunakan untuk mendaftarkan address yang deploy smartcontract
    constructor(){
        owner = msg.sender; // msg sender digunakan untuk mendapatkan address yang membuat transaksi
    }

    // digunakan merubah variable textRaw
    // menggunakan calldata karena tidak merubah isi dari parameter
    // external adalah modifier yang hanya bisa dipanggil dari luar
    function setText(string calldata _text) external {
        textRaw = _text;
    }

    //
    function inc() external{
        require(msg.sender == owner, "Bukan Owner"); // agar modifier external (bisa dipanggil dari luar) tidak menyebabkan value bisa dirubah oleh sembarang orang
        // require digunakan agar function ini hanya bisa di akses oleh owner
        angka++;
    }

    // karena hanya read data dengan melihat data, function ini tidak akan membayar gas fee
    // gas fee hanya ditujukan untuk function yang merubah state variable
    function getOwner() public view returns(address) {
        return owner;
    }
}