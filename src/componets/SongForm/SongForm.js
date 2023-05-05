import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePut, usePost } from "../_Hooks/Customs";
import FetchSelect from "../FetchSelect/FetchSelect";
import Alert from "../Alert/Alert";


const SongForm = ({data = {},mutate}) => {

    const [song, setSong] = useState({
        name: "",
        duration: 0,
        price: 0.0,
        publishDate: "",
        idArtist: 0,
        idType: 0
    })



    const [alertShow, setAlertShow] = useState(false);    // VAriabile di stato per gestire l'alert 
    const [alertMessage, setAlertMessage] = useState("");



    const putData = usePut("http://localhost:3432/songs", data.id);   // usePut restituisce la funzione per il salvataggio dei  dati

    const postData = usePost("http://localhost:3432/songs");     // usePostDate

    const navigate = useNavigate();             // useNavigate genera la funzione per la navigazione tra le pagine in modo programmatico


    useEffect(() => {
        if (data) {
            setSong({
                name: data.name,
                duration: data.duration,
                price: data.price,
                publishDate: data.publishDate ? data.publishDate : "",
                idArtist: data.idArtist,
                idType: data.idType

            });
        }
    }, [])

    const handleChange = (e) => {
        setSong((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //codice per il salvataggio

        if (data.id > 0) {
            // se l'id è maggiore di 0 siamo in edit
            putData(song, submitSuccess);         // data -> song; successFn -> submitSucces (vedi Customs.js / usePut)
        } else {
            postData(song, submitSuccess);
        }


    }

    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato!");
        setAlertShow(true);
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/songs", { replace: true });
        mutate();
    }

    return (
        <>

            <form className="row" onSubmit={handleSubmit}>
                <div className="col-6">
                    <label className="form-label">Titolo</label>
                    <input className="form-control form-control-sm" name="name" value={song.name} onChange={handleChange}></input>
                </div>
                <div className="col-6">
                    <label className="form-label">Artista</label>
                    <FetchSelect className="form-control form-control-sm" name="idArtist" value={song.idArtist} onChange={handleChange} url={"http://localhost:3432/artists"} />
                </div>
                <div className="col-4">
                    <label className="form-label">Data</label>
                    <input className="form-control form-control-sm" type="date" name="publishDate" value={song.publishDate.substring(0, 10)} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label className="form-label">Genere</label>
                    <FetchSelect className="form-control form-control-sm" name="idType" value={song.idType} onChange={handleChange} url={"http://localhost:3432/types"} />

                </div>
                <div className="col-2">
                    <label className="form-label">Durata</label>
                    <input className="form-control form-control-sm" type="number" min={0} name="duration" value={song.duration} onChange={handleChange} />

                </div>
                <div className="col-2">
                    <label className="form-label">Prezzo</label>
                    <input className="form-control form-control-sm" type="number" min={0} step=".01" name="price" value={song.price} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-around mt-3">
                        <button className="btn btn-success" type="submit">Salva</button>
                        <Link className="btn btn-outline-danger" to="/songs">Annulla</Link>
                    </div>

                </div>


            </form>

            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
        </>


    );

}
export default SongForm;