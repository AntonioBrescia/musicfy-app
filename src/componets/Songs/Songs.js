import { Table } from "react-bootstrap";
import SongRow from "./SongRow";
import { Outlet } from "react-router-dom";
import { useGet } from "../_Hooks/Customs";


const Songs = () => {

    const {data, error, isLoading } = useGet("http://localhost:3432/songs");

    if (data) {
        return (
            <div className="container">
                <Outlet />
                <h4>Elenco Brani</h4>
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
                            <SongRow key={song.id} song={song} />
                        ))}
                    </tbody>
                </Table>

            </div>
        );
    }
}
export default Songs;