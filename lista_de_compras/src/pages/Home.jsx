import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../components/BuyList';

export default function Home() {

    /*const [tobuys, setTobuys] = useState([]);

    const tobuyHandler = (tobuy) => {
        console.log(tobuy)
        //setTodos([...tobuys, tobuy]);
    }*/

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form /*tobuyHandler={tobuyHandler}*/ />
        <List sx={{ marginTop: "1em" }}>
            {/*{todos.map( (todo) => ( 
                <div style={{ marginTop: "1em" }}>
                    <BuyList/> 
                </div>
            ))}       */}     
            <BuyList/>
        </List>                 
    </Container> 
  )
}
