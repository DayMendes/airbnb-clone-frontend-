import logo from "../logo-512.png";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo Airbnb" />
        </nav>
    );
}
