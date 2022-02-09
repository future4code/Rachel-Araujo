// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { useTrips} from '../hooks/useTrips';
import {Typography, Button,List, ListItem, ListItemText, ListItemLink, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from "axios";



const Container = styled.div`
  display:flex;
  grid-auto-flow:column;
  align-items:center;
`


export const AdminHomePage = ()=>{
    const params = useParams()
    const trips = useTrips()
     console.log(trips)



    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }

    const goToLoginPage= () =>{
        history.push('/login')
    }

    const goToCreateTripPage = () =>{
        history.push('/admin/trips/create')
    }

    const goToTripDetailsPage = () =>{
        history.push(`/tripDetails/${id}`)
    }

    return (
        <>  
         
            <Typography variante='h1' align={'center'} gutterBottom>Área Administrativa - Lista de Viagens</Typography>
         
            <Button variant= {'outlined'} color={'primary'} onClick={goToCreateTripPage}>Criar Viagem</Button>
        <Container> 
            <List component="nav">
                {trips.map((trip)=>{
                    return <Link to={`/tripDetails/${id}`}>
                    <ListItem button>
                        <ListItemText primary={trip.name} />
                    </ListItem>
                </Link>  

                })}
                
                {/* <Link to={'/tripDetails/:id'}>
                    <ListItem button>
                        <ListItemText primary="Spam" />
                    </ListItem>
                </Link>   */}
            </List>
        </Container> 
            <Button variant= {'outlined'} color={'primary'}>Detalhes Viagem</Button>
            <Button variant= {'outlined'} color={'primary'}>Logout</Button>

        
        </>
    )

}