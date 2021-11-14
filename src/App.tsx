import { Outlet } from "react-router-dom";

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
