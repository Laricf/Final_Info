import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import Form from '../components/Form';
=======
import Form from '../pages/second_page/Form_second';
>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../components/BuyList';
import '../App.css'

<<<<<<< HEAD
export default function Home() {
=======
export default function Home_2() {
>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8
    

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
<<<<<<< HEAD
    <Container className="Caixa" /*maxWidth="xs"*/ style={{ margin: "auto", minWidth: "160px", maxWidth: "600px"}}> 
    <div id='texto' style={{width: "550px"}}>     
        <Form addTobuy={addTobuy}  />        
        <List className='caixa_produto' sx={{ marginTop: "30%"}} style={{  marginLeft: "-250px"}} >
            {tobuys.map((tobuy) => ( 
                <div key={tobuy.id} style={{marginTop:"5em"}} >
                    <BuyList editTobuy={editTobuy} tobuy={tobuy} deleteTobuy={deleteTobuy}/>
                </div>
            ))}     
            {/*<BuyList/> */}
        </List>   
    </div>                   
=======
    <Container /*maxWidth="xs"*/ style={{ margin: "auto", minWidth: "160px", maxWidth: "600px"}}>        
        <div id='texto' style={{width: "40vw"}}>
            <Form addTobuy={addTobuy}/>
            <List className='caixa_produto' sx={{ marginTop: "30%"}} style={{  marginLeft: "-290px"}}>
                {tobuys.map((tobuy) => (
                    <div key={tobuy.id} style={{marginTop:"5em"}} >
                        <BuyList editTobuy={editTobuy} tobuy={tobuy} deleteTobuy={deleteTobuy}  />
                    </div>
                ))}
                {/*<BuyList/> */}
            </List>
        </div>                
>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8
    </Container> 
  )
}
