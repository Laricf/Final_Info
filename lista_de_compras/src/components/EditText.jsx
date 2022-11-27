import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';


export default function EditText({open, dialogHandler, tobuy, editTobuy}) {
    
    const textHandler = () => {
        const [editedText, setEditedText] = useState(tobuy.values)
    }

  return (       
      <Dialog
        open={open}
        onClose={dialogHandler} //quando fechar
        aria-labelledby="alert-dialog-title"        
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {"Editando item"}
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth defaultValue={editedText}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button  autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>    
  ); 
}
