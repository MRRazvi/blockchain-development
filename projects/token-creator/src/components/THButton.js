import React from 'react';
import { Button } from '@mui/material';

function THButton(props) {
  console.log(props);

  return (
    <>
      <Button variant={'contained'}>{props.children}</Button>
    </>
  );
}

export default THButton;
