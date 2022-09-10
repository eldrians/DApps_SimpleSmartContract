# Simple Smart Contract

Aplikasi ini bernama FirstContract merupangan Web3 Aplikasi yang dibangun dengan Etherium sebagai perangkat lunak terdesetralisasi yang menerapkan sistem blockchain didalamnya, aplikasi ini dibangun menggunakan :
- Solidity, programming languages untuk membangun smart contract
- Hardhat, etherium development environment
- ReactJS, media front-end

FUNGSI APLIKASI
1. melakukan koneksi ke MetaMask

![metamask](https://user-images.githubusercontent.com/91566708/189485150-aa8f48aa-590a-409b-9d98-01009bb77277.png)

metamask merupakan crypto wallet untuk menyimpan asset digital seperti kripto dan juga melakukan menukar uang kripto, pada aplikasi ini MetaMask digunakan sebagai alat validasi perubahan data pada smart-contract yang sudah dibuat. aplikasi ini tidak melakukan transaksi koin kripto didalamnya, namun hanya memanfaatkan address dari account agar digunakan sebagai alat validasi perubahan data.
fungsi ini tidak memerlukan gas fee pada eksekusinya, karena fungsi ini hanya call state variable tanpa melakukan perubahan data apapun.

2. mengubah nama owner

![set#1](https://user-images.githubusercontent.com/91566708/189485435-3fe491d2-9383-48c6-b8bc-a034a7bd0053.png)

![set2](https://user-images.githubusercontent.com/91566708/189485483-144e836b-204d-4500-a776-b7572dea91c8.png)

Perubahan nama owner dilakukan dengan memanggil fungsi setText() pada smart-contract yang dibuat. fungsi tersebut dibentuk dengan modifier external sehingga bisa dipanggil dan di eksekusi oleh siapapun dan dari address manapun. oleh karena itu walaupun akun owner dan akun pengunjung berbeda perubahan nama papda nama owner bisa diganti oleh siapa saja. perubahan nama juga membutuhkan gas fee karena dalam fungsi tersebut merubah value dari state variable.

3. menambahkan angka

![inc1](https://user-images.githubusercontent.com/91566708/189485687-47510f20-148c-4be4-912b-32b0873c9311.png)

![inc2](https://user-images.githubusercontent.com/91566708/189485714-e8b542d4-bfea-44e2-bfac-092761ab5ce0.png)

increment angka dilakukan dengan memanggil fungsi inc() pada smart-contract. fungsi tersebut juga dibentuk dengan modifier external namun didalam fungsi tersebut ditambahkan dengan require, dimana require tersebut akan memvalidasi penambahan angka berdasarkan kesesuaian alamat antara owner dan juga pengunjung. jika owner dan pengunjung tidak cocok transaksi tidak akan berjalan dan menghasilkan error seperti gambar di bawah

![error](https://user-images.githubusercontent.com/91566708/189485902-41751511-c08c-4274-b0b0-01f702d58adc.png)

intinya fungsi ini akan menambahkan angka jika owner dan pengunjung memiliki address yang sama.  fungsi ini juga membutuhkan gas fee karena merubah state variable.

