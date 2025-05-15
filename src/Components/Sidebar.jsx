// src/components/Sidebar.jsx
import {FaShoppingCart,FaTasks,FaCubes,FaTools,FaRegFilePdf} from "react-icons/fa";

import "./Css/Sidebar.css";
import towi from "../assets/towi.png";

const Sidebar = ({ setView }) => {
  return (
    <aside className="w-60 bg-white border-r h-screen p-4 ">
      <div className="text-2xl font-bold mb-6 flex items-center gap-2">
        <div className="bg-white-600 p-2 rounded">
          <a href="/">
            <img src={towi} alt="" style={{ objectFit: "contain", width: "100%", height: "auto" }} />
          </a>
        </div>

        <div id="Title">IntraTowi</div>
      </div>
      <nav className="flex flex-col gap-6 text-gray-700">
        <button
          onClick={() => setView("purchases")}
          className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
        >
          <FaShoppingCart /> <span>Registros Compras</span>
        </button>
        <button
          onClick={() => setView("FileManager")}
          className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
        >
          <FaRegFilePdf /> <span>Anexo PDF</span>
        </button>
        <button
          onClick={() => setView("projects")}
          className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
        >
          <FaTasks /> <span>Proyectos</span>
        </button>
        <button
          onClick={() => setView("inventory")}
          className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
        >
          <FaCubes /> <span>Inventario</span>
        </button>
        <button
          onClick={() => setView("machining")}
          className="flex items-center gap-3 hover:text-blue-600 cursor-pointer"
        >
          <FaTools /> <span>Maquinado</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
