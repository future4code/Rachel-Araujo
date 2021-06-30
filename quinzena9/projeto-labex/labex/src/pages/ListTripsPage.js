//Para vermos todas as viagens
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';




export const ListTripsPage = ()=>{
    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }


    const goToApplicationFormPage = () =>{
        history.push('/trips/application')
    }

    return (
        <>
            <p>Lista de viagens</p>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
        </>
    )


}