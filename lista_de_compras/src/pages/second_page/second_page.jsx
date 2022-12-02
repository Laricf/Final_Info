import React, { useState, useEffect } from 'react'
import './second.css';
import '../../App.css'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Mobile from '../../components/mobile/Mobile'
import Form from '../../components/Form';
import { Container} from '@mui/system';
import { List } from '@mui/material';
import BuyList from '../../components/BuyList';
import Home_desk from "../../components/Home_2"

function second_page() {    

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
    <div className="App_2">
      <div className='mobile'><Mobile/></div>                  
      <div className='desktopPage'>
      <div className='cabeca_primeiro'>
          <div className = "insta">
            <p> <img src="./src/assets/insta.png" alt="Instagem" />  Instagram</p>
          </div>
          <div className='sugestao'>
            <p> <img src="./src/assets/sugest.png" alt="Sugestão" />  Sugestão</p>
          </div>
          <div className='comp'>
            <p> <img src="./src/assets/comp.png" alt="Compartilhar" />  Compatilhar</p>
          </div>
        </div>
        <div className='cabeca_segundo'>
          <div className='logo_direito'>
            <p id='suaLista'>SUA LISTA DE COMPRAS WEB  </p>
            <img id='listaVerde' src="./src/assets/lista.png" alt="Lista" />
          </div>
          <Home_desk/>
          <div className='logo_esquerdo'>
          <div className='opcoes'>
            <div className='lista'>
              <p> <img className="img_lista" src="./src/assets/flechas.png" alt="Flechas" /> Criar nova lista</p>
            </div>
            <div className='conta'>     
              <img src="./src/assets/Símbolo perfil.png" alt="perfil icone" style={{width: "35px", height: "30px"}}/>
              <p id='textConta'>Entrar ou criar conta</p>                       
              {/*<p><img src="./src/assets/Símbolo perfil.png" alt="Usuario"/> Entrar ou criar conta </p>*/}
            </div>
          </div>
          </div>
        </div>                         
      </div>
      <div className='lista_2' >
       <h1 className='texto_1'>SUA LISTA DE COMPRAS</h1>     
      </div>

    </div>
  )
}

export default second_page