import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button, Paper, TextField } from '@mui/material';
import '../App.jsx';



export default function FormII({ addTobuy, deleteTobuy }) {

  const [values, setValues] = useState(); 
  const [id, setId]  = useState(0)

  const tobuyCreate = (values) => {
    const tobuyObj = {values: values, id: id};
    setId(id + 1);
    addTobuy(tobuyObj);
    document.getElementById("outlined-basic").value = null; 
    
    Axios.post("http://localhost:3001/produto/insert", {
      produto:values.produto,
    }).then((response)=>{
      console.log(response)
    })
    
  }
 
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,    
    }));
  }; 
  
  const handleClickButtom = () => {    
    Axios.post("http://localhost:3001/produto/insert", {
      produto:values.produto,
    }).then((response)=>{
      console.log(response)
    })
  }
 
  return (               
      <Paper style={{ padding: "0.5em", borderRadius: "10px", backgroundColor: "white", width: "77vw"}}>
        <div id='textfield' style={{ display:"flex", justifyContent: "center"}}>
            <TextField
            type="text"
            id="outlined-basic"
            name='produto'
            label="o que eu desejo?"
            variant="outlined"
            onChange={(e) => setValues(e.target.value)}
            fullWidth
            />
            <Button
            variant="text" /*</div>onClick={handleClickButtom}*/
            onClick={() => tobuyCreate(values)} ><img src="./imgs/botao.png" alt="botão de adicionar" /></Button>
            <Button variant="text"
            className='register--button'
            onClick={handleClickButtom}><img src="./imgs/botao.png" alt="" /></Button>
            {/*<button className='delete'>Deletar</button>*/}
        </div>
      </Paper>    
  )
}
