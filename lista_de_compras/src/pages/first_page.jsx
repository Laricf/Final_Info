
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