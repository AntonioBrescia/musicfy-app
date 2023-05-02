import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGet, usePut } from "../_Hooks/Customs";
import FetchSelect from "../FetchSelect/FetchSelect";


const SongForm = () => {

    const { id } = useParams();
    
    

    const [song, setSong] = useState({
        name:"",
        duration: 0,
        price: 0.0,
        publishDate: "",
        idArtist: 0,
        idType: 0
    })

    const {data, error} =  useGet("http://localhost:3432/songs", id);

    const submitData = usePut("http://localhost:3432/songs", id);

    useEffect(() => {
        if(data){
            setSong({
                name: data.name,
                duration: data.duration,
                price: data.price,
                publishDate: data.publishDate ? data.publishDate : "",
                idArtist: data.idArtist,
                idType: data.idType
    
            });
        }
    },[data] )

    const handleChange = (e) => {
        setSong((prevValues) => {
            return{
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //codice per il salvataggio
        submitData(song);
    }

    return (
        <>
            <div className="m-2 p-2 border">

                <h5>Modifica canzone</h5>
                <form className="row" onSubmit={handleSubmit}>
                    <div className="col-6">
                        <label className="form-label">Titolo</label>
                        <input className="form-control form-control-sm" name="name" value={song.name} onChange={handleChange}></input>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Artista</label>
                        <FetchSelect className="form-control form-control-sm" name="idArtist" value={song.idArtist} onChange={handleChange} url={"http://localhost:3432/artists"}/>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Data</label>
                        <input className="form-control form-control-sm" name="publishDate" value={song.publishDate} onChange={handleChange}/>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Genere</label>
                        <FetchSelect className="form-control form-control-sm" name="idType" value={song.idType} onChange={handleChange} url={"http://localhost:3432/types"}/>

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