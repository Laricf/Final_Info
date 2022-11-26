import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../components/BuyList';

export default function Home() {

    const [todos, setTodos] = useState([1, 2])

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form/>
        <List sx={{ marginTop: "1em" }}>
            {todos.map( (todo) => ( 
                <div style={{ marginTop: "1em" }}>
                    <BuyList/> 
                </div>
            ))}            
        </List>                 
    </Container> 
  )
}
