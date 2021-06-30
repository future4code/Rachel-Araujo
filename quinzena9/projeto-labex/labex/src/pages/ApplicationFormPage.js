//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'




export const ApplicationFormPage = ()=>{
    const history = useHistory()

    const goBack = () =>{
        history.goBack()
    }



    return(
        <>
        <p>Formulário</p>
        <button onClick= {goBack}>Voltar</button>
        <button>Enviar</button>
        </>
    )



}
