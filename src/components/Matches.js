import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Perfis from "./Perfis";
import Fundo from '../img/fundo.jpg';
import matche from '../img/matche.png';
import excluir from '../img/excluir.png';

const Header = styled.header`
    display:flex;
    flex-direction:row;
    
  

    background-image: url(${Fundo});
    height:200px;

    @media(min-width: 320px) and (max-width:420px){
        display: flex;
        flex-direction: column;
        height:380px;
    }

`
const Footer = styled.footer`
    display:flex;
    flex-direction:row;
    justify-content:center;
  

    background-image: url(${Fundo});
    height:100px;

    font-family: 'Baloo Tammudu 2', cursive;
    font-weight: normal;
    font-size: 24px;
    color: rgb(248, 248, 255);
    list-style-type: none;
    padding-left: 35px;

`
const H1 = styled.h1`

    display:flex;
    justify-content: center;
    font-family: 'Baloo Tammudu 2', cursive;
    font-weight: bold;
    font-size: 38px;
    margin-top:60px;
    margin-left:400px;
    color: #FFFFFF;

    @media(min-width: 320px) and (max-width:420px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 40px;
        margin-left:100px;
        
    }

`
const Botao = styled.button`
    display:flex;
    justify-content:center;
    border-radius: 30px;
    width: 60px;
    cursor: pointer;
    border:none;
    background-color:transparent;
    margin-left:100px;
    margin-top:60px;

    @media(min-width: 320px) and (max-width:420px){
        display: flex;
        flex-direction: row;
        margin-left:170px;
        margin-top:20px;
    
    }
    
`
const IconeTela = styled.img`
    width:50px;
    height:50px;
    margin-bottom:10px;
    cursor: pointer;
 
`

const Foto = styled.img`
    width:300px;
    height:300px;
    margin-top: 20px;
    margin-botton: 20px;
    margin-left: 40px;
    
    border:none;
    box-sizing: border-box;
    border-radius: 8px;
    

`
const CardPerfil = styled.div`

    background-color: rgba(248, 248, 255, 0.8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row: 1;
    justify-content: center;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    
    margin-top: 40px;
    margin-left:140px;
    width: 80vw;
    height: 100%;

    @media(min-width: 320px) and (max-width:420px){
        display: flex;
        flex-direction: column;
        margin-top: 90px;
        margin-left: 20px;
    }
 
  
`
const TituloPerfil=styled.p`
    text-align:center;  
    width: 250px;
    padding: 8px;
    box-sizing: border-box;
    color: black;
    font: bold 18px arial, sans-serif; 
`


export default function Matches(props) {

    const [listaMatch, setListaMatch] = useState([]);


      useEffect(() => {
        matches()
    },[])

    const matches = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rachel-araujo/matches')
            .then((response) => {
                console.log(response.data.matches)
                setListaMatch(response.data.matches)
            })
    }

    const limparMatches = () => {
        const url=('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rachel-araujo/clear')
        
        axios.put(url)
            .then((response) => {
                matches()
                console.log(response.data)
                
            })
    }  
    
      console.log(listaMatch)   

    const imprimeMatch = listaMatch.map((match) =>{
            return(
            <div key={match.id}>
               <Foto src= {match.photo}/>
               <TituloPerfil>{match.name}</TituloPerfil> 
            </div>
            
            )
    })

        return (
         <div>

            <Header>

                <H1>Seus Matches:</H1>

                <Botao> 
                 <IconeTela src={matche} onClick={props.irParaInicio}/>
                </Botao>

                <Botao> 
                <IconeTela src={excluir} onClick={limparMatches}/>
                </Botao>

            </Header>
            
            <CardPerfil>
               {imprimeMatch}
            </CardPerfil>

        <Footer>
          <p>Bate papo - Amizade - Encontro</p>
        </Footer>
    
         </div>
      )
        
    
}

