import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, IconButton } from '@mui/material';
import { Check, Close } from '@mui/icons-material';

export default function SimpleDialog(props) {
  const { title, text, onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {text}
      </DialogContent>
      <DialogActions>
        <IconButton color='error' onClick={()=>handleClose()}>
            <Close/>
        </IconButton>
        <IconButton color='success'>
            <Check/>
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}