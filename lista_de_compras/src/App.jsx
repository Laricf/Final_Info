
import React, { useState, useEffect } from 'react'
import './App.css'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
//import List from './components/List';
import axios from 'axios';

import BuyList from './components/BuyList';
import Form from './components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';



function App() {    

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
    axios.get("http://localhost:3001/produto/find")
  })

  const ClickDelete = () => {
    Axios.post("http://localhost:3001/produto/delete", {
      produto:values.produto,
    }).then((response) => {
      console.log(response)
    })        
  }

  useEffect (() => {
    axios.get("http://localhost:3001/produto/delete")
  })
  
  return ( 
    <div className="App">    
        <Container maxWidth="xs" style={{ marginTop: "1em" }}>
          <Form/>
          <List sx={{width: '100%', bgcolor: 'background.paper' }}>
            
          </List>  
          <BuyList/>       
        </Container>          
          <div className='register--container'>
            <h1>Mercado</h1>
            <input
            type="text"
            name='produto'
            placeholder='O que eu desejo?'
            className='register--input'
            onChange={handleChangeValues} /*value = {this.state.produto}*//>
            <button className='register--button' onClick={handleClickButtom}>Adicionar</button>
            <button className='delete'>Deletar</button>
          </div>                    
    </div>
  )
}

export default App

      


