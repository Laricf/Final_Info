
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../Home';


function Mobile() {    

  const [modalIsOpen, setIsopen] = useState(false)
  
    function handleOpenModal() {
      setIsopen(true)         
    }

    function handleCloseModal() {
      setIsopen(false)       
    }

    const customStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',        
      }
    }
  return ( 
    <div className="App">  
      <h1>Oi</h1>
      <div className='head' style={{ height: "50px"}}>
        <img id='tracos' src="./imgs/tracos.png" alt="ícone de opções" />
        <h1 style={{ textAlign: "center", fontSize: "100%" }}>LISTA DE COMPRAS</h1> 
        <AccountCircleIcon style={{color: "#F5FF66"}}/>         
      </div>
      <Home/>
      <div className='register--container' style={{ height: "46px"}}>            
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
 



