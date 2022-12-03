
import React, { useState, useEffect } from 'react'
import '../src/App.css'
import Axios from 'axios';
import axios from 'axios';
<<<<<<< HEAD
import Home from './pages/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Mobile from './components/mobile/Mobile'
import Cabecalho from './components/Cabecalho'
import Corpo from './components/Corpo'
import Second from './components/SecondMobile/Second'
import Second_desk from "../src/pages/second_page/second_page"
import {Link, Routes, Route} from "react-router-dom"
import First_desk from "./pages/first_page"
=======
import Second_desk from "../src/pages/second_page/second_page";
import {Link, Routes, Route} from "react-router-dom";
import First_desk from "./pages/first_page";
import Mobile_Yellow from "../src/components/MobileYellow/MobileYellow";


>>>>>>> f13ec403658c1c1fe340925d4f1549a3f0337db8


  function App() {    
s

    
  return ( 
    <div className="App">
      <Routes>
        <Route path='/' element={<First_desk/> }/>
        <Route path='/lista' element={<Second_desk/> }/>
        <Route path='/mobiyellow' element={<Mobile_Yellow/>}/>
      </Routes>
    </div>
      
      
  )
};


export default App
 