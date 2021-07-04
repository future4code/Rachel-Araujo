//Formulário para o administrador criar uma nova viagem
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'




export const CreateTripPage = ()=>{
    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }

    
    return (
        <>
            <p>Criar Viagem Adiministrativo</p>
            <button onClick={goBack}>Voltar</button>
            <button>Criar</button>
        </>
    )

}