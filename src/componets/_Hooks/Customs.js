import axios from "axios";
import  useSWR  from "swr";

const fetcher = (url) => axios.get(url).then(result => result.data);

// INIZIO - useGet -> Hook per il fetching dei dati
const useGet = (url, id= 0) => {
    
    let finalUrl = url;
    if(id > 0){
        finalUrl += ("/" + id);
    }

    const {data, error, mutate} = useSWR(finalUrl, fetcher);
    
    
    
    return{
        data: data,
        error: error,
        isLoading: !error && !data,
        mutate: mutate
    };

}

// FINE - useGet

// INIZIO - usePut -> Hook per la modifica dei dati
const usePut = (url, id) =>{
    const finalUrl = url + "/" + id;
    // usePut restituisce una funzione da eseguire in fase di submit 
    return(data, successFn) => {  // data -> l'oggetto con i dati da salvare ; succesFn -> la funzione da eseguire nel then 

        axios.put(finalUrl,data).then(result =>{
            if(result.data){
               successFn();      // Se il salvataggio va a buon fine i "then" verrà eseguita la funzione "successFn"
            }
        })
    }

}

// FINE - usePut

// INIZIO - usePost  -> Hook per la creazione dei dati 

const usePost =(url) => {
    return(data, successFn) => {
        axios.post(url, data).then(result => {
            if(result.data){
                successFn();
            }
        })
    }

}

// FINE - usePost

// INIZIO - useDelete -> Hook per la eliminazione dei dati
const useDelete = (url, id) => {
    const finalUrl = url + "/" + id;
    return(successFn) => {
        axios.delete(finalUrl).then(result =>{
            if(result.data){
                successFn();
            }
        })
    }
}

export {useGet, usePut, usePost, useDelete};