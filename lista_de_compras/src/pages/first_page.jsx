
import React, { useState, useEffect } from 'react'
import '../App.css'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import Home from '../pages/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Mobile from '../components/mobile/Mobile'
import Cabecalho from '../components/Cabecalho'
import Corpo from '../components/Corpo'
import Second from '../components/SecondMobile/Second'
import {Link, Routes, Route} from "react-router-dom"




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
          <div className='mobile'><Mobile/></div>                  
        <div className='desktopPage'>
          <Cabecalho/>  
          <a href="/lista">Lista</a>               
          <Corpo/>
          <div id='second'><Second/></div>
        </div>
      </div>
      
      
  )
}


export default App