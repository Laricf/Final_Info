
import React, { useState, useEffect } from 'react'
import '../App.css'
<<<<<<< HEAD
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
=======
import Axios from 'axios';
import axios from 'axios';
import Mobile from '../components/mobile/Mobile'
import Cabecalho from './Cabecalho_first'
import Corpo from '../components/Corpo'
import Second from '../components/SecondMobile/Second'
import MobileYellow from "../components/MobileYellow/MobileYellow"
>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8




function App() {    

<<<<<<< HEAD
=======
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

>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8
  
  return (
      <div className="App">
          <div className='mobile'><Mobile/></div>                  
        <div className='desktopPage'>
<<<<<<< HEAD
          <Cabecalho/>  
<<<<<<< Updated upstream
          <a href="/lista">Lista</a>               
=======
          <a href="/lista">  </a>  
          <div>
            <img src="" alt="" />
          </div>
>>>>>>> Stashed changes
          <Corpo/>
          <div id='second'><Second/></div>
=======
          <Cabecalho/>            
          <Corpo/>
          <div id='second'><Second/></div>
          <div id="Yellow"><MobileYellow/></div>
>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8
        </div>
      </div>
      
      
  )
}


export default App