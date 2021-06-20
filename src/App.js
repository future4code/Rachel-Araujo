import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Perfis from './components/Perfis.js';
import Matches from './components/Matches.js';

export default function App(){
  
  const[paginaAtual, setPaginaAtual] = useState("inicio")

  const selecionaTela = () =>{
    switch (paginaAtual){
      case "inicio":
        return <Perfis irParaMatches={selecionaMatches}/>
      case "matches":
        return <Matches irParaInicio={selecionaInicio}/>
      default:
        return <div>Página não encontrada! tente Novamente!</div>
    }

  }


  const selecionaInicio = () =>{
    setPaginaAtual("inicio")
  }

  const selecionaMatches =() =>{
    setPaginaAtual("matches")

  }
  
  return (
    
    <div className="App">
    
      {selecionaTela()}
     
    </div>
    
  );

}


