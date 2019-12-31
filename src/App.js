import React from 'react';
import './App.css';
import InputModal from './InputModal'
import { Button, Container } from '@material-ui/core';

function App () {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [show, setShow] = React.useState(false)
  //
  //
  // const showModal = e => {
  //   setShow(true)
  // };
  //
  // const closeModal = e=> {
  //   setShow(false)
  // }

  return (
    <Container>
      <Button  variant="contained" color="primary" onClick= {handleClickOpen
        // e => {
        //   showModal();
        // }
      }
      > show Modal </Button>
      <InputModal open={open}
                  handleClose = {handleClose} />
    </Container>
  )
}

export default App;
