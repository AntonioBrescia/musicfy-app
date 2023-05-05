import { Link } from "react-router-dom";
import { useDelete, useGet } from "../_Hooks/Customs";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";



const ArtistItem = ({ artist, deleteSuccess }) => {

    const [showDelete, setShowDelete] = useState(false);

    const { data: songs, error } = useGet("http://localhost:3432/artists/" + artist.id + "/songs")


    const deleteData = useDelete("http://localhost:3432/artists", artist.id )

    const performDelete = () => {
        deleteData(deleteSuccess);
     };

    return (
        <article className="col-12">
            <div className="m-2 p-2 border">
                <div className="row">
                    <div className="col-12">
                        {artist.name}
                    </div>
                    <div className="col-6">
                        {artist.alias ? artist.alias : " No Alias"}
                    </div>
                    <div className="col-6">
                        {artist.birthDate ? artist.birthDate.substring(0, 10) : "Data non definita"}
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-around">
                            <Link className="btn btn-outline-info" to={"edit/" + artist.id}>
                                Modifica
                            </Link>
                            <button className="btn btn-outline-danger" onClick={()=>{setShowDelete(true)}}>
                                Elimina
                            </button>
                        </div>
                    </div>
                    <div className="col-12">
                        <Alert className="mt-2" show={showDelete} variant="danger">
                            <Alert.Heading>Eliminare {artist.name} ? </Alert.Heading>
                            {songs && songs.length > 0 ? 
                            (
                                <p>
                                Verranno eliminate anche: {songs.length} canzoni/e . Vuoi Procedere ?
                            </p>

                            )
                            : "" }
                            
                            
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-success btn-sm me-2" onClick={performDelete}>
                                    Conferma
                                </button>
                                <button  className="btn btn-outline-danger btn-sm me-2" onClick={() => setShowDelete(false)}>
                                    Annulla
                                </button>
                            </div>
                        </Alert>

                    </div>

                </div>
            </div>

        </article>

    );
}

export default ArtistItem;