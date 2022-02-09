import axios from "axios";
import { useEffect, useState } from "react";

export const useParams = () =>{
    const [params, setParams] = useState([])

    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rachel-araujo-munoz/trip/${id}`)
        .then((response)=>{
            setTrips(response.data.trips)

        })
    }, [])  
    return params
}