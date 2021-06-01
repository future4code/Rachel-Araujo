import React from 'react';
import styled from 'styled-components'

export default class ListaPlaylist extends React.Component {

    render(){
        return(
            <div>
                <button onClick={this.props.irParaHome}>Home</button>
                <h1>PLAYLISTS</h1>
            
            </div>
        )
    }

}