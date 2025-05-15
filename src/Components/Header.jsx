import "./Css/Header.css";
import { FaUser } from "react-icons/fa";


const Header = ({ setView }) => {
return (
    <header className="bg-white shadow-md p-4 flex items-center border-b justify-between w-full sticky top-0 z-50">
        <nav className="flex space-x-4">{/* Elementos de navegación */}</nav>

        <div id="Profile">
            <button
                onClick={() => setView("profile")}
                className="flex items-center gap-3 hover:transform-1.1 cursor-pointer"
            >
                <FaUser style={{ fontSize: "2rem" }} />
            </button>
        </div>
    </header>
);
}

export default Header;
