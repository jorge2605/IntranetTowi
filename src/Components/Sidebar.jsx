// src/components/Sidebar.jsx
import { FaShoppingCart, FaTasks, FaCubes, FaTools } from 'react-icons/fa';
import { MdRequestPage } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white border-r h-screen p-4">
      <div className="text-2xl font-bold mb-6 flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded">
          <span className="text-white text-lg">↗</span>
        </div>
        towi
      </div>
      <nav className="flex flex-col gap-6 text-gray-700">
        <div className="flex items-center gap-3">
          <FaShoppingCart /> <span>Purchases</span>
        </div>
        <div className="flex items-center gap-3">
          <MdRequestPage /> <span>Requisiciones</span>
        </div>
        <div className="flex items-center gap-3">
          <FaTasks /> <span>Proyectos</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCubes /> <span>Inventario</span>
        </div>
        <div className="flex items-center gap-3">
          <FaTools /> <span>Maquinado</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
