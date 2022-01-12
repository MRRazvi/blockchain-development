import sha256 from "sha256";
import Blockchain from "./blockchain.js";

const bitcoin = new Blockchain();

const nonce = bitcoin.proofOfWork(
  sha256("prev"),
  JSON.stringify({
    hi: "bye111111112222211111111111111121111211111111111111111",
  })
);
console.log(nonce);
