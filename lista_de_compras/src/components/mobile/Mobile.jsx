
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../../pages/Home';


function Mobile() {    

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
      <div className='head' style={{ height: "50px"}}>
        <img id='tracos' src="./imgs/tracos.png" alt="ícone de opções" />
        <h1 id='buyList' style={{ textAlign: "center", fontSize: "100%" }}>LISTA DE COMPRAS</h1> 
        <AccountCircleIcon style={{color: "#F5FF66"}}/>         
      </div>
      <Home/>
      <div className='register--container' style={{ height: "46px" }}>            
        <input                 
        type="text"
        name='produto'
        placeholder='O QUE EU DESEJO?'
        className='register--input'
        style={{ height:"46px", width: "270px", fontSize: "20px", fontFamily: "DK Lemon Yellow Sun", transform: "rotate(0.05deg)", textAlign: "center"}}
        onChange={handleChangeValues} /*value = {this.state.produto}*//>
        <button className='register--button' onClick={handleClickButtom}><img src="./imgs/botao.png" alt="" /></button>
        <button className='delete'>Deletar</button>
      </div>                    
    </div>
  )
}


export default Mobile
 



