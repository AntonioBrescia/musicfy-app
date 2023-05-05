import { Link } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";
import ArtistItem from "./ArtistItem";
import Alert from "../Alert/Alert";
import { useState } from "react";

const Artists = () => {


    const { data, error, mutate } = useGet("http://localhost:3432/artists");

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
            <>
                <div className="container">
                    <h5>Artisti</h5>
                    <Link to="new" className=" btn btn-sm btn-outline-success">Nuovo Artista</Link>
                    <div className="row">
                        {data.map(artist => (
                            <ArtistItem key={artist.id} artist={artist} deleteSuccess={deleteSuccess} />

                        ))}
                    </div>
                </div>
                <Alert show={alertShow} onHide={alertDismiss} message= {alertMessage} />
            </>
        );
    }
}
export default Artists;