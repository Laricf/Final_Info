
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../../pages/Home';
import Modal from 'react-modal';
import Mobile from './Mobile'

Modal.setAppElement('#root')

function ModalPage({handleOpenModal, handleCloseModal}) {    

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
        right: 'auto'
        
      }
    }

  return (   
    <div>
        <div className='modal'>          
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
          <div className='estilo'>            
            <button onClick={handleCloseModal}>Close</button>                        
          </div>            
          </Modal>
        </div>                         
    </div>
  )
}


export default ModalPage
 



