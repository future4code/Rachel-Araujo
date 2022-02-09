//Para fazermos login como administrador
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { useForm} from '../hooks/useForm';
import axios from 'axios';
import {Typography, Button, TextField} from '@material-ui/core';

const Form = styled.form`
    display: grid;
    gap:16px;
    align-items:center;
    
`


export const LoginPage = ()=>{

    const {form, onChange} = useForm({
        email:'',
        password: '', 
 
    })

    const sendLogin = (event)=>{
        event.preventDefault()
        console.log(form)
         const body={
            email:form.email,
            password:form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rachel-araujo-munoz/login', body)
       .then((response)=>{
           console.log(response.data.token)
           window.localStorage.setItem('token', response.data.token)
        
        history.push('/admin/trips/list')

       })
       
    }

    const history = useHistory()

    const goToHomePage= () =>{
        history.push('/')
    }

    const goToAdminHomePage = () =>{
        history.push('/admin/trips/list')
    }


    return (
        <>
            <Typography variante='h1' align={'center'} gutterBottom>Login Administrativo</Typography>

            <Form onSubmit={sendLogin}>
                <TextField
                name='email'
                value={form.email}
                onChange={onChange}
                placeholder={'Email'}
                type={'email'}
                />

                <TextField
                name={'password'}
                value={form.password}
                onChange={onChange}
                placeholder={'Password'}
                type={'password'}
                />
                <Button variant= {'outlined'} color={'primary'} type={'submit'} >Enviar</Button>
            </Form> 
              
            <Button variant= {'outlined'} color={'primary'} onClick={goToHomePage}>Voltar</Button>
            
        </>
    )

}
