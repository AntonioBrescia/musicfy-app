import axios from "axios";
import useSWR from "swr";


const Songs = () => {

    const fetcher = (url) => {
        return axios.get(url).then((response) => response.data);

    }
    const { songs, error } = useSWR("http://localhost:3432/songs", fetcher)
    if (songs) {
        return (
            <div className="container">
                <h4>Elenco Brani</h4>

            </div>
        );
    }
}
export default Songs;