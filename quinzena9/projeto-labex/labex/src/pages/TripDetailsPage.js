// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import {Typography, Button,List, ListItem, ListItemText, ListItemLink, TextField} from '@material-ui/core';
import { useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TripInfoItem from './TripInfoItem'


;const Container = styled.div`
    display: grid;
    grid-auto-flow:column;
    gap: 40px;
`


 export const TripDetailsPage = ()=>{
    const params = useParams()
    const history = useHistory()

    const goBack= () =>{
        history.goBack()
    }


    return (
        <div>
            <Typography variante='h1' align={'center'} gutterBottom>Detalhes das viagens Adm</Typography>

                <Card>
                    <Typography variante='h1' align={'center'} gutterBottom>Informações sobre as viagens</Typography>
                    <CardContent>
                        <Typography color="textSecondary" variante={'h5'} gutterBottom>
                        Detalhes da viagem
                        </Typography>
                       
                        <TripInfoItem infoTitle={'Nome'} info={}/>
                        <TripInfoItem infoTitle={'Planeta'} info={}/>
                        <TripInfoItem infoTitle={'Data'} info={}/>
                        <TripInfoItem infoTitle={'Descrição'} info={}/>
                        <TripInfoItem infoTitle={'Duração em dia'} info={}/>
                    </CardContent>

                </Card>

                <Card>
                    <Typography variante='h1' align={'center'} gutterBottom>Candidatos</Typography>
                    <CardContent>
                        <Typography color="textSecondary" variant={'h5'} gutterBottom>
                        Candidatos
                        </Typography>
                        <Typography variant="h5" component="h2">
                        
                        </Typography>
                        <Typography  color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                </Card>
            



{/* 
            <Container>
                
                

            </Container>
             */}
        </div>
    )
}


