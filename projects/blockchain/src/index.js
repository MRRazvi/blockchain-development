import sha256 from "sha256";
import Blockchain from "./blockchain.js";

const bitcoin = new Blockchain();

bitcoin.setBlock(1, randHash(), randHash());
bitcoin.setTransaction(100, "address1", "address2");
bitcoin.setBlock(2, randHash(), randHash());

console.log(bitcoin);

function randHash() {
  return sha256(Math.random().toString());
}
