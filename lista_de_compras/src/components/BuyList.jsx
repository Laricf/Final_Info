import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditText from './EditText';
import { useState } from 'react';


export default function BuyList({ tobuy, deleteTobuy, editTobuy} ) {  

  const [openDialog, setOpenDialog] = useState(false); 

  const dialogHandler = () => {
    setOpenDialog(!openDialog); //a exclamação inverte
  }

  return (
  <div>
    <EditText editTobuy={editTobuy} open={openDialog} dialogHandler={dialogHandler} tobuy={tobuy} />
    <Paper style={{ borderRadius: "10px", padding: "0.5em 0em" }}>
    
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteTobuy(tobuy.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined}  dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={tobuy.values} onClick={() => setOpenDialog(true)}/>
        </ListItemButton>
      </ListItem>
    </Paper>
  </div>
  );
}