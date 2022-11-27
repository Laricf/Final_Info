import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../components/BuyList';

export default function Home() {

    const [tobuys, setTobuys] = useState([]);

    const addTobuy = (tobuy) => {
        console.log(tobuy);
        setTobuys([...tobuys, tobuy]);
    };

    const deleteTobuy = (id) => {        
        var filtered = tobuys.filter((tobuy) => tobuy.id !== id);
        console.log(filtered);
        setTobuys(filtered);
        if (filtered.length == 0) {
            console.log("Tem nada aqui");
        };
    };

    const editTobuy = (id, editedText) => {      
        var tobuysArray = [...tobuys];

        tobuysArray.splice(id, 1, { values: editedText, id:id });
        setTobuys(tobuysArray);
    };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form addTobuy={addTobuy} />
        <List sx={{ marginTop: "1em" }}>
            {tobuys.map((tobuy) => ( 
                <div key={tobuy.id} style={{ marginTop: "1em" }}>
                    <BuyList editTobuy={editTobuy} tobuy={tobuy} deleteTobuy={deleteTobuy}/>
                </div>
            ))}     
            {/*<BuyList/> */}
        </List>                 
    </Container> 
  )
}
