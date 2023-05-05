import SongForm from "./SongForm";
import { useOutletContext, useParams} from "react-router-dom";
import { useGet } from "../_Hooks/Customs";

const EditSong = () => {
    const { id } = useParams();

    const { data, error } = useGet("http://localhost:3432/songs", id);

    const { mutate } = useOutletContext();      // useOutletcontext permette di reperire le propietà e/o funzioni passate al context dell'Outlet (vedi Songs.js)

    if (data) {
        return (
            <>
                <div className="m-2 p-2 border">

                    <h5>Modifica canzone</h5>
                    <SongForm data={data} mutate={mutate} />
                </div>

            </>
        );

    }


}

export default EditSong;