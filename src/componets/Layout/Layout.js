import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";



const Layout = () => {
    return (
        <>
            <header>
                <Sidebar />
            </header>
            <main>
                <Outlet />
            </main>
        </>

    );


}
export default Layout;