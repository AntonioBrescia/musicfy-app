import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";

const SongForm = () => {

    const { id } = useParams();
    
    const fetcher = (url) => axios.get(url).then(result => result.data);

    const [song, setSong] = useState({
        name:"",
        duration: 0,
        price: 0.0,
        publishDate: null,
        idArtist: 0,
        idType: 0
    })

    const {data, error} =  useSWR("http://localhost:3432/songs/" + id, fetcher); 

    const handleChange = (e) => {
        setSong((prevValues) => {
            return{
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <div className="m-2 p-2 border">

                <h5>Modifica canzone</h5>
                <form className="row">
                    <div className="col-6">
                        <label className="form-label">Titolo</label>
                        <input className="form-control form-control-sm" name="name" value={song.name} onChange={handleChange}></input>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Artista</label>
                        <select className="form-control form-control-sm"></select>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Data</label>
                        <input className="form-control form-control-sm" name="publishDate" value={song.publishDate} onChange={handleChange}/>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Genere</label>
                        <select className="form-control form-control-sm"/>

                    </div>
                    <div className="col-2">
                        <label className="form-label">Durata</label>
                        <input className="form-control form-control-sm" name="duration" value={song.duration} onChange={handleChange}/>

                    </div>
                    <div className="col-2">
                        <label className="form-label">Prezzo</label>
                        <input className="form-control form-control-sm" name="price" value={song.price} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-around mt-3">
                            <button className="btn btn-success" type="submit">Salva</button>
                            <Link className="btn btn-outline-danger" to="/songs">Annulla</Link>
                        </div>

                    </div>


                </form>
            </div>




        </>


    );

}
export default SongForm;