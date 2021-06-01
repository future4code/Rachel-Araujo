import React from 'react';
import styled from 'styled-components'

export default class HomeCadastro extends React.Component {

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Playlists</button>

                <label>NOME PLAYLIST</label>
                <input
                value={this.props.inputPlaylist}
                onChange={this.props.novaPlaylist}
                placeholder ="Nome da Playlist"
                />
            
            </div>
        )
    }

}