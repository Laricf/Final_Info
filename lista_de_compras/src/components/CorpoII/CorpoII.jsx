
import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import Axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Home from '../../pages/Home';
import './App.css';

function CorpoII() {    

  return ( 
    <div>
      <div id='corpoII'>          
          <div className="produtosII">
              <p className='nome_produtoII'>Papel Higiênico</p>
              <p className='nome_produtoII'>Feijão</p>
              <p className='nome_produtoII'>Detergente</p>
              <p className='nome_produtoII'>Ovos</p>
              <p className='nome_produtoII'>Protetor Solar</p>
              <p className='nome_produtoII'>Maçã</p>
          </div>
          <div>
              <h2 id='talvez'>TALVEZ VOCÊ TAMBÉM PRECISE...</h2>
          </div>
          <div className='container'>
            <button class="arrow-left" aria-label='Previous image'>🢀</button>        
            <button class="arrow-right" aria-label='Next image'>🢂</button>
            <div className='gallery-wrapper'>
              <div className='footer' >
                  <p className='img_produto'> <img src="./src/assets/liqui.png" alt="LiquclassNameificador" class="itemI current-item"/> Liquidificador</p>
                  <p className='img_produto'> <img src="./src/assets/bate.png" alt="Batedeira" class="itemI current-item" /> Batedeira</p>
                  <p className='img_produto'> <img src="./src/assets/ferro.png" alt="Ferro de passar roupa" class="itemI current-item" /> Ferro de passar roupa</p>
                  <p className='img_produto'> <img src="./src/assets/panela.png" alt="Panelas" class="itemI current-item" /> Panelas</p>
                  <p className='img_produto'> <img src="./src/assets/prod_beleza.png" alt="Produtos de beleza" class="itemI current-item"/> Produtos de beleza</p>
                  <p className='img_produto'> <img src="./src/assets/plantas.png" alt="Plantas" class="itemI current-item"/> Plantas</p>
                  <p className='img_produto'> <img src="./src/assets/ferramenta.png" alt="Ferramentas" class="itemI current-item"/> Ferramentas</p>
              </div>
            </div> 
          </div>                 
      </div>      
       
    </div>
  )
}


export default CorpoII
 



