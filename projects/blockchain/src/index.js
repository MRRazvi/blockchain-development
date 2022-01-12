import Blockchain from "./blockchain.js";

const bitcoin = new Blockchain();

bitcoin.setBlock(1, "0000", "0000");
bitcoin.setTransaction(100, "address1", "address2");

console.log(bitcoin);
