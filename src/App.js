
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./componets/Layout/Layout";
import Home from "./componets/Home/Home";
import Songs from "./componets/Songs/Songs";
import EditSong from "./componets/SongForm/EditSong";
import NewSong from "./componets/SongForm/NewSong";
import Artists from "./componets/Artists/Artists";
import NewArtist from "./componets/ArtistForm/NewArtist";
import EditArtist from "./componets/ArtistForm/EditArtist";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="songs" element={<Songs />}>
                        <Route path="edit/:id" element={<EditSong />} />
                        <Route path="new" element={<NewSong />} />
                    </Route>
                    <Route path="artists" element={<Artists />} />
                    <Route path="artists/new" element={<NewArtist />} />
                    <Route path="artists/edit/:id" element={<EditArtist/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
