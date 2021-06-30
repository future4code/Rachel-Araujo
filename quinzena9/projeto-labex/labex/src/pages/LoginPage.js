//Para fazermos login como administrador
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'




export const LoginPage = ()=>{

    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }

    return (
        <>
            <p>Login Administrativo</p>
            <button onClick={goBack}>Voltar</button>
            <button>Enviar</button>
        </>
    )

}
