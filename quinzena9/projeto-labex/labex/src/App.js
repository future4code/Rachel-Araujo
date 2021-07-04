import React, { useEffect, useState } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import { Router } from './route/Router.js';
import Typography from '@material-ui/core/Typography'


const Header = styled.header`
    background: #4682B4;
    width: 1440px;
    height: 200px;
`
const H1 = styled.h1`
   color: #DCDCDC;
  
   
   font-family: Roboto;
   font-style: normal;
   font-weight: bold;
   font-size: 36px;
   line-height: 42px;
   padding:20px;
   
   text-decoration-line: line-through;
`
const H2 = styled.h2`
  left: 30.28%;
  right: 32.92%;
  top: 16.59%;
  bottom: 77.29%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #FFFFFF;
`


export default function App() {
  return (
    <div className="App">
      <Header>
        <H1>LabeX Viagens</H1>
        <H2>Os melhores destinos estão aqui</H2>
      </Header>
      <Router />
      
    </div>
  );
}


