
import React, { useState, useEffect } from 'react'
import './App.css'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import Home from './pages/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
              <p>SUA LISTA DE COMPRAS WEB  </p>
              <img src="./src/assets/lista.png" alt="Lista" />
           </div>
           <Home/>
           <div className='logo_esquerdo'>
            <div className='lista'>
              <p> <img className="img_lista" src="./src/assets/flechas.png" alt="Flechas" /> Criar nova lista</p>
            </div> 
            <div className='conta'>
              <p><img src="./src/assets/Símbolo perfil.png" alt="Usuario"/> Entrar ou criar conta </p> 
            </div>
           </div> 
          </div>
          <div className='body'>
            <h1 className='organize'>ORGANIZE SUA LISTA AQUI</h1>
          </div>
          <div className="produtos">
            <p className='nome_produto'>Papel Higiênico</p>
            <p className='nome_produto'>Ovos</p>
            <p className='nome_produto'>Feijão</p>
            <p className='nome_produto'>Protetor Solar</p>
            <p className='nome_produto'>Detergente</p>
            <p className='nome_produto'>Maçã</p>
          </div>
          <div>
            <h2>TALVEZ VOCÊ TAMBÉM PRECISE...</h2>
          </div>
          <div className='footer' >
            <p className='img_produto'> <img src="./src/assets/liqui.png" alt="LiquclassNameificador" /> Liquidificador</p>
            <p className='img_produto'> <img src="./src/assets/bate.png" alt="Batedeira" /> Batedeira</p>
            <p className='img_produto'> <img src="./src/assets/ferro.png" alt="Ferro de passar roupa" /> Ferro de passar roupa</p>
            <p className='img_produto'> <img src="./src/assets/panela.png" alt="Panelas" /> Panelas</p>
            <p className='img_produto'> <img src="./src/assets/prod_beleza.png" alt="Produtos de beleza" /> Produtos de beleza</p>
            <p className='img_produto'> <img src="./src/assets/plantas.png" alt="Plantas" /> Plantas</p>
            <p className='img_produto'> <img src="./src/assets/ferramenta.png" alt="Ferramentas" /> Ferramentas</p>
          </div>                  
    </div>
  )
}


export default App
 



