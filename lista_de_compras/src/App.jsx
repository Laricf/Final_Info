
import React, { useState, useEffect } from 'react'
import '../src/App.css'
import Axios from 'axios';
import axios from 'axios';
import Second_desk from "../src/pages/second_page/second_page";
import {Link, Routes, Route} from "react-router-dom";
import First_desk from "./pages/first_page";
import Mobile_Yellow from "../src/components/MobileYellow/MobileYellow";





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
      <Routes>
        <Route path='/' element={<First_desk/> }/>
        <Route path='/lista' element={<Second_desk/> }/>
        <Route path='/mobiyellow' element={<Mobile_Yellow/>}/>
      </Routes>
    </div>
      
      
  )
};


export default App
 