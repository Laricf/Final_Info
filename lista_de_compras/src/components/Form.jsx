import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button, Paper, TextField } from '@mui/material';


export default function Form({ addTobuy, deleteTobuy }) {

  const [values, setValues] = useState(); 
  const [id, setId]  = useState(0)

  const tobuyCreate = (values) => {
    const tobuyObj = {values: values, id: id};
    setId(id + 1);
    addTobuy(tobuyObj);
    document.getElementById("outlined-basic").value = null
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

  useEffect (() => {
    Axios.get("http://localhost:3001/produto/find")
  })
 

  return (           
    <Paper style={{ padding: "1em", borderRadius: "10px" }}>
        <div style={{ display:"flex", justifyContent: "center"}}>
            <TextField 
            id="outlined-basic" 
            name='produto' 
            label="Item" 
            variant="outlined" 
            onChange={(e) => setValues(e.target.value)} 
            fullWidth 
            />
            <Button variant="text" /*onClick={handleClickButtom}*/ onClick={() => tobuyCreate(values)} >ADD</Button>
        </div>
    </Paper>   
  )
}
