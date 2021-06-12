import React from 'react';
import styled from 'styled-components'
import axios from "axios"


const CardPlaylist = styled.div`
    border: 1px solid grey;
    padding: 10px;
    margin:10px;
    color: grey;
    font-size:18px;
    width: 300px;
    display:flex;
    justify-content:space-between;
`
const IrParaHome = styled.button`
    display:flex;
    justify-content:center;
    color:grey;
    font-weight: bold;
    font-size:20px;
    padding: 5px;
    cursor:pointer;
    
`

const Titulo = styled.h2 `
    color: #1fd660;
    font-weight: bold;
    margin-top: 80px;

`

const Excluir = styled.button `
    
    color: #1fd660; 
    font-size: 16px;
    font-family: Arial;
    
    padding: 3px;
    margin-left:5px;
    
   
`

    

export default class ListaPlaylist extends React.Component {
    state = {
        imprimePlaylist:[]
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "rachel-araujo-munoz"
            }
        })
        .then((res) => {
        //console.log(res)
            this.setState({imprimePlaylist: res.data.result. list})
        })
        .catch((err) => {
            alert("Essa Playlist já foi cadastrada!")
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "rachel-araujo-munoz"
            }
        })
        .then((res) => {
            //console.log(res)
            alert("Playlist deletada!")
            this.pegarPlaylist()
        })

        .catch((err) => {
            //console.log(err.response.data)
            alert('Erro ao deletar Playlist! Tente novamente!')

        })
    }

    

    render(){
       
        const listaPlaylist = this.state.imprimePlaylist.map((play) =>{
            return (
            <CardPlaylist key={play.id}>
                {play.name}
                <Excluir onClick={() => this.deletarPlaylist(play.id)}>X</Excluir>
                </CardPlaylist>
            )
        })

        return(
            <div>
                <IrParaHome onClick={this.props.irParaHome}>Ir para Home</IrParaHome>
                <Titulo>Playlists</Titulo>
                {listaPlaylist}
            
            </div>
        )
    }

}