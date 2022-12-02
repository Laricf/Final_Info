import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../components/BuyList';
import '../App.css'

export default function Home_2() {
    

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
    <Container className="Caixa" /*maxWidth="xs"*/ style={{ margin: "auto", minWidth: "160px", maxWidth: "600px"}}>        
        <Form addTobuy={addTobuy}  />        
        <List className='caixa_produto' sx={{ marginTop: "10em"}} >
            {tobuys.map((tobuy) => ( 
                <div key={tobuy.id} style={{marginTop:"5em"}} >
                    <BuyList editTobuy={editTobuy} tobuy={tobuy} deleteTobuy={deleteTobuy}/>
                </div>
            ))}     
            {/*<BuyList/> */}
        </List>                 
    </Container> 
  )
}
