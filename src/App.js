
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./componets/Layout/Layout";
import Home from "./componets/Home/Home";
import Songs from "./componets/Songs/Songs";
import SongForm from "./componets/SongForm/SongForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="songs" element={<Songs />}>
                        <Route path="edit/:id" element= {<SongForm/>}/>
                    </Route>
                </Route>
            </Routes>

        </Router>
    );
}

export default App;
