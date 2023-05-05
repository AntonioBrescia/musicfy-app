import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDelete, useGet } from "../_Hooks/Customs";
import { URL_ARTISTS, URL_SONGS, URL_TYPES } from "../_Utils/Constants";

const SongRow = ({ song, deleteSuccess}) => {
   

    const { data: type,  error: typeError} = useGet(URL_TYPES, song.idType)

    const {data: artist, error: artistError} = useGet(URL_ARTISTS, song.idArtist)

    const deleteData = useDelete("http://localhost:3432/songs", song.id);
    
    const performDelete = () => {
       deleteData(deleteSuccess);
    }


    return(
        <tr>
            <td className="align-middle">{song.id}
            <Link className="btn text-info" to={"edit/" + song.id}>
                <FontAwesomeIcon icon={faPencil} />
            </Link>
            <button className="btn text-danger"  onClick={performDelete}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
            </td>
            <td>
                <div>{song.name}</div>
                <div className="small">{artist ? artist.name : ""}</div>
            </td>
            <td className="align-middle">{type ? type.name : song.idType}</td>
            <td className="align-middle">{song.duration}</td>
        </tr>

    );

}
export default SongRow;