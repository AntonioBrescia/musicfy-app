import SongForm from "./SongForm";
import { useOutletContext } from "react-router-dom";


const NewSong = () => {
    
    const { mutate } = useOutletContext();      // useOutletcontext permette di reperire le propietà e/o funzioni passate al context dell'Outlet (vedi Songs.js)

    
        return (
            <>
                <div className="m-2 p-2 border">

                    <h5>Nuova canzone</h5>
                    <SongForm mutate={mutate} />
                </div>

            </>
        );

    


}

export default NewSong;

