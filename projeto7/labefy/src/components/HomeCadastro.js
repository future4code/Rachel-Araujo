import axios from 'axios';
import React from 'react';
import styled from 'styled-components';




const IrParaLista = styled.button`

    color:grey;
    font-weight: bold;
    font-size:20px;
    padding: 5px;
    cursor:pointer;
    margin-top: 15px;
`
const Titulo = styled.h2 `
    color: #1fd660;
    font-weight: bold;
    margin-top: 80px;
    margin-bottom: 30px;

`
const Label = styled.label `
    color: grey;
    font-weight: bold; 
    font-size: 18px;
    font-family: Arial;
    margin-top: 90px;

`

const Input = styled.input `
    
    color: #1fd660; 
    font-size: 16px;
    font-family: Arial;
    border: 1px solid grey;
    padding: 3px;
    margin-left:5px;
    border-radius:10px;
   
`

const Enviar = styled.button `
    
    color: #1fd660; 
    font-size: 16px;
    font-family: Arial;
    border: 1px solid grey;
    padding: 3px;
    margin-left:5px;
    border-radius:10px;
   
`


export default class HomeCadastro extends React.Component {
    state = {
        inputPlaylist:""
    }

    handleInput = (e) => {
        this.setState({inputPlaylist: e.target.value})
    }
    fazerInput = () => {
        const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputPlaylist
        }

        axios.post(url,body,{
            headers: {
                Authorization: "rachel-araujo-munoz"
            }
        })
        .then((res) => {
            alert("Playlist cadastrada com sucesso!")
            this.setState({inputPlaylist:""})

        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                  
                <IrParaLista onClick={this.props.irParaLista}>Ir para Playlists</IrParaLista>

                <Titulo>Criar Playlist</Titulo>
                <Label>Nome Playlist: </Label>
                <Input
                value={this.state.inputPlaylist}
                onChange={this.handleInput}
                placeholder ="Nome da Playlist"
                />
                <Enviar onClick={this.fazerInput}>Enviar</Enviar>
                
            
            </div>
        )
    }

}