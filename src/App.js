
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./componets/Layout/Layout";
import Home from "./componets/Home/Home";
import Songs from "./componets/Songs/Songs";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="songs" element={<Songs />} />
                </Route>
            </Routes>

        </Router>
    );
}

export default App;
