import { Table } from "react-bootstrap";
import SongRow from "./SongRow";
import { Link, Outlet } from "react-router-dom";
import { useGet, useDelete} from "../_Hooks/Customs";
import Alert from "../Alert/Alert";
import { useState } from "react";


const Songs = () => {

    const {data, error, isLoading, mutate } = useGet("http://localhost:3432/songs");

    const [alertShow, setAlertShow] = useState(false);
    const[alertMessage,setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }


    const deleteSuccess = () =>{
        setAlertMessage("Eliminazione completata!");
        setAlertShow(true);
    }

    if (data) {
        return (
            <div className="container">
                <Outlet context={{mutate}}/>   {/* L' attibuto context permette di passare propietà e/o funzioni al componente che verrà renderizzato  */}
                <h4>Elenco Brani</h4>
                <Link className="btn btn-sm btn-outline-success" to="new">Nuova Canzone</Link>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titolo</th>
                            <th>Genere</th>
                            <th>Durata</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(song => (
                            <SongRow key={song.id} song={song} deleteSuccess={deleteSuccess}/>
                        ))}
                    </tbody>
                </Table>
                <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
                               
            </div>
        );
    }
}
export default Songs;