import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Matches from "./Matches";
import match from '../img/match.png'
import nao from '../img/nao.png';
import matche from '../img/matche.png';
import Fundo from '../img/fundo.jpg';
   
const Foto = styled.img`
    width:300px;
    height:300px;
    margin-top: 10px;
    border:none;
    box-sizing: border-box;
    border-radius: 8px;

    
`

const ListaMatches = styled.button`
    width:300px;
    height:300px;
`
const Header = styled.header`
    display:flex;
    flex-direction:row;
  

    background-image: url(${Fundo});
    height:300px;

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
    font-size: 48px;
    margin-top:90px;
    margin-left:100px;
    color: #FFFFFF;

    @media(min-width: 320px) and (max-width:420px){
        display: flex;
        flex-direction: column;
        margin-top: 1px;
    }

`

const Menu = styled.ul`
    display:flex;
    justify-content: flex-start;

    @media(min-width: 320px) and (max-width:420px){
        display: flex;
        flex-direction: row;
        justify-content:center;
        margin-top: 50px;
        margin-right: 50px;

`
const ListaMenu = styled.li`
    display:flex;
    justify-content: flex-start;
    cursor: pointer;

    font-family: 'Baloo Tammudu 2', cursive;
    font-weight: normal;
    font-size: 24px;
    color: rgb(248, 248, 255);
    list-style-type: none;
    padding-left: 35px;

   
       
    }

`

const Botao = styled.button`

  margin-bottom:10px;
  border-radius: 30px;
  width: 60px;
  cursor: pointer;
  border:none;
  background-color:transparent;
  margin-left:500px;

  @media(min-width: 320px) and (max-width:420px){
    display: flex;
    flex-direction: row;
    margin-left:170px;

}
    
`
const BotaoPerfil = styled.div`

    display:flex;
    flex-direction:row;
    justify-content: space-evenly;

    cursor: pointer;
    border:none;
    background-color:transparent;
    

`
const BotaoFormato = styled.button`
    cursor: pointer;
    border:none;
    background-color:transparent;

`

const Icone = styled.img`

    width:50px;
    height:50px;
   
    
`
const IconeTela = styled.img`
    width:50px;
    height:50px;
    margin-bottom:10px;
    cursor: pointer;
 
`

const CardPerfil = styled.div`

    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 16px;
    background-color: rgb(248, 248, 255);
    &:hover{
        box-shadow: 5px 10px 18px gray;
        
    }
  
`

const Descricao = styled.p`
    
    width: 150px;
    padding: 8px;
    box-sizing: border-box;
    width: 400px;
    color: black;
    font: 16px arial, sans-serif; 
    text-align:center; 
    
`

const TituloPerfil=styled.p`
    text-align:center;  
    width: 250px;
    padding: 8px;
    box-sizing: border-box;
    color: black;
    font: bold 18px arial, sans-serif; 
    `



 
export default function Perfis(props) {
    
    const[dados, setDados] = useState({})

    const perfil = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rachel-araujo/person')
            .then((response) => {
                console.log(response.data.profile)
                setDados(response.data)
            })
        }

    useEffect(() => {
        {perfil()}
    },[])

    const deuMatch = () => {
        const url=('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rachel-araujo/choose-person')
        const body = {
            id: dados.profile.id, 
            choice: true
        }
        axios.post(url,body)

        .then((response) => {
            console.log(response.data)
            
        }) 
        {perfil()}
    }

    const naoDeuMatch = () => {
        const url=('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rachel-araujo/choose-person')
        const body = {
            id: dados.profile.id, 
            choice: false
        }
        axios.post(url,body)

        .then((response) => {
            console.log(response.data)
            
        }) 
        {perfil()}
    }

    return (
   
    <div>
         
        <Header>
        <Menu>
            <ListaMenu>Produtos</ListaMenu>
            <ListaMenu>Saiba mais</ListaMenu>
            <ListaMenu>Suporte</ListaMenu>
        </Menu>

        <H1>AstroMatch</H1>
        
            <Botao>
                <IconeTela src={matche} onClick={props.irParaMatches}/>
            </Botao>

        </Header>
       
        
        <CardPerfil>
            <Foto src= {dados.profile && dados.profile.photo}/>
    
            <TituloPerfil>{dados.profile && dados.profile.name}</TituloPerfil>

            <Descricao>{dados.profile && dados.profile.bio}</Descricao>
    
            <BotaoPerfil>
                <BotaoFormato>
                    <Icone src={match} onClick={(id)=>deuMatch(dados.profile.id)}/>
                </BotaoFormato>
                
                <BotaoFormato>
                    <Icone src={nao} onClick={(id)=>naoDeuMatch(dados.profile.id)}/>
                </BotaoFormato>  
            </BotaoPerfil>
      </CardPerfil>   

      <Footer>
          <p>Bate papo - Amizade - Encontro</p>
      </Footer>
        
  
    </div>
    
    );

    }
  
   