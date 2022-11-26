import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Button, Paper, TextField } from '@mui/material';


export default function Form() {

  const [values, setValues] = useState();  

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
            <TextField id="outlined-basic" name='produto' label="Item" variant="outlined" onChange={handleChangeValues} fullWidth />
            <Button variant="text" onClick={handleClickButtom}>ADD</Button>
        </div>
    </Paper>   
  )
}
