import { Outlet } from "react-router-dom";
import "./styles/global.css";

function App() {
    return (
        <>
            <nav>Navbar aqui</nav>
            <Outlet />
            <footer>Footer aqui</footer>
        </>
    );
}

export default App;
