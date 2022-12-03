
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../../pages/Home';
import Modal from 'react-modal';
import FormII from '../FormII';
import Second from '../SecondMobile/Second'
import HomeY from './HomeY';
import BuyListY from './BuyListY';




Modal.setAppElement('#root')

function MobileYellow(handleOpenModal, handleCloseModal) {    

  const [modalIsOpen, setIsopen] = useState(false)
  
    function handleOpenModal() {
      setIsopen(true)         
    }

<<<<<<< HEAD:lista_de_compras/src/pages/mobile/Mobile.jsx
    function handleCloseModal() {
      setIsopen(false)       
    }
=======
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
>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8:lista_de_compras/src/components/MobileYellow/MobileYellow.jsx

    const customStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',        
      }
    }
  return ( 
    <div className="AppY">           
      <div className='headY' style={{ height: "50px"}}>        
        <img id='tracos' src="./imgs/tracos.png" alt="ícone de opções" />
        <h1 id='buyList' style={{ textAlign: "center", fontSize: "100%" }}>LISTA DE COMPRAS</h1> 
        <AccountCircleIcon style={{color: "#F5FF66"}}/>         
      </div>
      <HomeY/>
    </div>  
  )
}


export default MobileYellow
 



