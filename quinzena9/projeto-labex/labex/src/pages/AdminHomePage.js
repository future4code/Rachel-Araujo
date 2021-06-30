// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'




export const AdminHomePage = ()=>{
    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }

    const goToHomePage= () =>{
        history.goBack('/')
    }

    const goToCreateTripPage = () =>{
        history.push('/admin/trips/create')
    }

    return (
        <>
            <p>Área Administrativa</p>
            <button onClick={goBack}>Voltar</button>
            <button>Enviar</button>
        </>
    )

}