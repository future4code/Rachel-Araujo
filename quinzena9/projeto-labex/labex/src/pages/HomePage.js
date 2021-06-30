//Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import astronauta from '../img/astronauta.png';


const Astronauta = styled.img`
  
  top: 44.69%;
  bottom: 1.6%;
  Width:364px; 
  Height:369px;
  Top:307px;
  Left:569px;  
    
`

export const HomePage = ()=>{
    const history = useHistory()

    const goToListTripPage = () => {
        history.push('/trips/list')
    }

    const goToAdminHomePage = () => {
        history.push('/admin/trips/list')
    }
    return (
       <div>
           <Astronauta src={astronauta}/>
        <button onClick={goToListTripPage}>Ver Viagens</button>
        <button onClick={goToAdminHomePage}>Área Administrativa</button>
        </div>
      );
    };
