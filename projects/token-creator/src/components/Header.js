import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Web3 from '../scripts/web3';

function Header() {
  const [account, setAccount] = React.useState('');
  const [balance, setBalance] = React.useState('');

  const connectWallet = async (e) => {
    window.ethereum.enable();
    const account = await Web3.signer.getAddress();
    if (account.length > 0) {
      setAccount(account);
      setBalance(await Web3.getAccountBalance(account));
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>Token Creator</Typography>
            {account ? (
              <Typography>
                {account} - {balance} ETH
              </Typography>
            ) : (
              <Button color="inherit" onClick={connectWallet}>
                Connect Wallet
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
