//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { useForm} from '../hooks/useForm';
import { useTrips} from '../hooks/useTrips';
import axios from 'axios';

// const Select = styled.select`
// width:200px;
// `

export const ApplicationFormPage = ()=>{
   
    const trips = useTrips()
    const { form, onChange, cleanFields } = useForm({
        name:'',
        age: '',
        applicationText:'',
        profession:'',
        country:'',
        trip:''
 
    }); 


   const sendForm = (event) =>{
       event.preventDefault()
       console.log(form)
       const body ={
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rachel-araujo-munoz/trips/${form.trip.id}/apply`, body)
       
       cleanFields();
   }

    const history = useHistory()

    const goBack = () =>{
        history.goBack()
    }

    

    return(
        <>
        <h1>Inscreva-se para uma viagem</h1>
        
        <form onSubmit={sendForm}>
            <select labelID='select-trips'>
                {trips.map((trip) =>{
                    return <option key ={trip.id} value={trip}>{trip.name}</option>
                })}
            </select>
            
            <input
                name='name'
                value={form.name}
                onChange={onChange}
                placeholder={'Nome'}
                required
                pattern={'^.{3,}'}
                title={'O nome deve ter no mínimo 3 letras'}
            />
            <input
                name='age'
                value={form.age}
                onChange={onChange}
                placeholder={'Idade'}
                required
                type={"number"}
                min={18}
            />
            <input
                name='applicationText'
                value={form.applicationText}
                onChange={onChange}
                placeholder={'Texto de Candidatura'}
                required
                type={'text'}
                min={30}
            />
            <input
                name='profession'
                value={form.profession}
                onChange={onChange}
                placeholder={'Profissão'}
                required
                type={'text'}               
                min={10}
            />
            <input
                name='country'
                value={form.country}
                onChange={onChange}
                placeholder={'Escolha um País'}
                required
            />
            {/* <select label id="paises">
                <option name='country' value={'brasil'}>Brasil</option>
                <option value={'eua'}>Estados Unidos</option>
                <option value={'argentina'}>Argentina</option>
            </select> */}

            
          
            <button type={'submit'}>Enviar</button>

        </form>
        

        <button onClick= {goBack()}>Voltar</button>
        </>
    )
}
