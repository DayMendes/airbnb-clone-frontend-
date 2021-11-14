import { Outlet } from "react-router-dom";

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
