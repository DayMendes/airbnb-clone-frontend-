import { Outlet } from "react-router-dom";
import "./styles/global.css";

import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer>Footer aqui</footer>
        </>
    );
}

export default App;
