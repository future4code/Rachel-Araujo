//Para vermos todas as viagens
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useRequestData} from '../hooks/useRequestData';
import {Typography, Button, TextField} from '@material-ui/core';






export const ListTripsPage = ()=>{

    const tripsData = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rachel-araujo-munoz/trips')

    // console.log('Lista de viagens: ', trips);


    const tripList = tripsData && tripsData.trips.map((list) =>{
        return <div key={list.id}>
                   <p>Nome: {list.name}</p>
                   <p>Descrição: {list.description}</p>
                   <p>Planeta: {list.planet}</p>
                   <p>Duração: {list.durationInDays}</p>
                   <p> Data: {list.date}</p>
                   
                </div>
        
    })


    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }

    const goToApplicationFormPage = () =>{
        history.push('/trips/application')
    }



    return (
        <>
            <Typography variante='h1' align={'center'} gutterBottom>{'Lista de viagens'}</Typography>
                <p>{tripList}</p>
             
             
            <Button variant= {'outlined'} color={'primary'} onClick={goBack}>Voltar</Button>
            <Button variant= {'outlined'} color={'primary'} onClick={goToApplicationFormPage}>Inscrever-se</Button>
        </>
    )
}