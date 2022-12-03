import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../components/BuyList';
import '../App.css'

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
    <Container  style={{ margin: "auto", minWidth: "160px", maxWidth: "600px"}}>        
        <div id='texto' style={{width: "40vw"}}>
            <Form addTobuy={addTobuy} />
        </div>                
    </Container> 
  )
}
