import axios from "axios";
import { useEffect, useState } from "react";



export const useRequestData = (url) =>{
    const [data, setData] = useState();

    const getData = () => {
    axios.get(url)
    .then((response)=>{
        setData(response.data)
    });  
    };

    useEffect(() => {
    getData();
},[]);

    return data;
};