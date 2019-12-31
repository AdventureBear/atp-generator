import React from 'react'
import Button from '@material-ui/core/Button';
import ModalForm from './ModalForm'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function InputModal ({open, handleClose}) {
  console.log("Show modal is " + open)
  const fullWidth = true
  const maxWidth ='md'

  return (
    <div>
    <Dialog
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Steel City Endurance - Training Plan Generator</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <ModalForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Generate
        </Button>
      </DialogActions>
    </Dialog>
    </div>

  )
}