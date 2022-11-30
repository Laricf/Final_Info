import React from 'react'
import '../App.css'

export default function teste() {
  return (
    <div>
        <div className='head' style={{ height: "50px"}}>
              <img id='tracos' src="./imgs/tracos.png" alt="ícone de opções" />
              <h1 style={{ textAlign: "center", fontSize: "100%" }}>LISTA DE COMPRAS</h1> 
              <AccountCircleIcon style={{color: "#F5FF66"}}/>         
        </div>
    </div>
  )
}

