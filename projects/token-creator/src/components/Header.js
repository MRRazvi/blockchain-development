import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Web3 from '../scripts/web3';

function Header() {
  const connectWallet = async (e) => {
    const block = await Web3.getBlock(13953227);
    block.transactions.map(async function (tx) {
      const txReceipt = await Web3.getTransaction(tx);
      const { hash, from, to, value, confirmations } = txReceipt;
      // console.log(hash, from, to, Web3.convertToEther(value), confirmations);
      console.log(
        `${from} (${await Web3.getAccountBalance(from)}) -> ${to} (${await Web3.getAccountBalance(
          to,
        )})`,
      );
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>Token Creator</Typography>
            <Button color="inherit" onClick={connectWallet}>
              Connect Wallet
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
