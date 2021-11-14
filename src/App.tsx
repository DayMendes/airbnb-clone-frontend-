import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./styles/global.css";

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
