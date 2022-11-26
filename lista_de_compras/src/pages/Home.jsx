import React from 'react'
import Form from '../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../components/BuyList';

export default function Home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form/>
        <List sx={{width: '100%', bgcolor: "background.paper", marginTop: "1em" }}>
            <BuyList/>  
        </List>                 
    </Container> 
  )
}
