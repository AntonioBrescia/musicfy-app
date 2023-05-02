import axios from "axios";
import useSWR from "swr";
import { Table } from "react-bootstrap";
import SongRow from "./SongRow";
import { Outlet } from "react-router-dom";


const Songs = () => {

    const fetcher = (url) => {
        return axios.get(url).then((response) => response.data);

    }
    const { data, error } = useSWR("http://localhost:3432/songs", fetcher)
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