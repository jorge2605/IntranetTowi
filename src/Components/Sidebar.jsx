// src/components/Sidebar.jsx
import { FaShoppingCart, FaTasks, FaCubes, FaTools } from "react-icons/fa";
import { MdRequestPage } from "react-icons/md";
import "./Css/Sidebar.css";
import towi from "../assets/towi.png";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white border-r h-screen p-4">
      <div className="text-2xl font-bold mb-6 flex items-center gap-2">
        <div className="bg-white-600 p-2 rounded">
          <a href="/">
            <img src={towi} alt="" />
          </a>
        </div>
        IntraTowi
      </div>
      <nav className="flex flex-col gap-6 text-gray-700">
        <a href="">
          <div className="flex items-center gap-3">
            <FaShoppingCart /> <span>Registros Compras</span>
          </div>
        </a>
        <a href="">
          <div className="flex items-center gap-3">
            <MdRequestPage /> <span>Anexo PDF</span>
          </div>
        </a>
        <a href="">
          <div className="flex items-center gap-3">
            <FaTasks /> <span>Proyectos</span>
          </div>
        </a>
        <a href="">
          <div className="flex items-center gap-3">
            <FaCubes /> <span>Inventario</span>
          </div>
        </a>
        <a href="">
          <div className="flex items-center gap-3">
            <FaTools /> <span>Maquinado</span>
          </div>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
