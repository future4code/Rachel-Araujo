//Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import astronauta from '../img/astronauta.png';
import {Button} from '@material-ui/core';




const Astronauta = styled.img`
  
  top: 44.69%;
  bottom: 1.6%;
  Width:364px; 
  Height:369px;
  Top:307px;
  Left:569px;  
    
`

const Buttons = styled.div`
  display:grid;
  grid-auto-flow:column;
  gap:20px;
`

export const HomePage = ()=>{
    const history = useHistory()

    const goToListTripPage = () => {
        history.push('/trips/list')
    }

    const goToLogin = () => {
        history.push('/login')
    }
    return (
       <div>
           <Astronauta src={astronauta}/>
        <Buttons>
          <Button variant= {'outlined'} color={'primary'} onClick={goToListTripPage}>Ver Viagens</Button>
          <Button variant= {'outlined'} color={'primary'} onClick={goToLogin}>Área Administrativa</Button>
        </Buttons>   
        </div>
      );
    };
  
