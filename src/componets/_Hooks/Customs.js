import axios from "axios";
import  useSWR  from "swr";

const fetcher = (url) => axios.get(url).then(result => result.data);

// INIZIO - useGet -> Hook per il fetching dei dati
const useGet = (url, id= 0) => {
    
    let finalUrl = url;
    if(id > 0){
        finalUrl += ("/" + id);
    }

    const {data, error} = useSWR(finalUrl, fetcher);
    
    
    
    return{
        data: data,
        error: error,
        isLoading: !error && !data
    };

}

// FINE - useGet

// INIZIO - usePut -> Hook per la modifica dei dati
const usePut = (url, id) =>{
    const finalUrl = url + "/" + id;
    // usePut restituisce una funzione da eseguire in fase di submit 
    return(data) => {

        axios.put(finalUrl,data).then(result =>{
            if(result.data){
                console.log(result.data);
            }
        })
    }

}

// FINE - usePut

export {useGet, usePut};