import { useEffect, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { usePut, usePost } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";


const ArtistForm = ({ data = {} }) => {

    const [artist, setArtist] = useState({
        name: "",
        alias: "",
        birthDate: ""
    });

    const [alertShow, setAlertShow] = useState(false);   // Variabile di stato per gestire la visualizzazione dell'alert
    const [alertMessage, setAlertMessage] = useState("");

    const putData = usePut("http://localhost:3432/artists", data.id); // Restituisce la funzione per il salvataggio dei dati

    const postData = usePost("http://localhost:3432/artists"); // Restituisce la funzione per la creazione dei dati 

    const navigate = useNavigate();

    useEffect(() => {
        if (data.id > 0) {
            setArtist({
                name: data.name,
                alias: data.alias,
                birthDate: data.birthDate ? data.birthDate : ""
            })
        }
    }, [data])

    const handleChange = (e) => {
        setArtist((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Codice per il salvataggio
        if (data.id > 0) {
            // se l'id è maggiore di 0 siamo in "edit"
            putData(artist, submitSucces);   // data -> song; successFn -> submitSuccess (vedi Customs.js / usePut)   
        }
        else {
            // se l'id è undefined o 0 siamo in "new"/post
            postData(artist, submitSucces);
        }
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/artists", { replace: true });  // il replace è come se "interrompesse" la cronologia di navigazione
        //mutate();
    }


    const submitSucces = () => {
        setAlertMessage("Salvataggio completato!");
        setAlertShow(true);
    }


    return (
        <>
            <form className="row">
                <div className="col-12">
                    <FloatingLabel controlId="txtName" label="Nome" className="my-2">
                        <input id="txtName" className="form-control" name="name" value={artist.name} onChange={handleChange} placeholder="Nome"></input>
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <FloatingLabel controlId="txtAlias" label="Alias" className="my-2">
                        <input id="txtAlias" className="form-control" name="alias" value={artist.alias} onChange={handleChange} placeholder="Alias"></input>
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <FloatingLabel controlId="txtBirth" label="Compleanno" className="my-2">
                        <input id="txtBirth" className="form-control" type="date" name="BirthDate" value={artist.birthDate.substring(0, 10)} onChange={handleChange} placeholder="Compleanno"></input>
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-sm btn-outline-success" onClick={handleSubmit}>Salva</button>
                        <Link className="btn btn-sm btn-outline-danger" to="/artists">Annulla</Link>
                    </div>
                </div>
            </form>
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}/>
        </>
    );
}

export default ArtistForm;