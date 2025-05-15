// App.jsx
import { useState } from "react";
import Sidebar from "./Components/Sidebar.jsx";
import PurchasesCard from "./Components/PurchasesCard.jsx";
import FileManager from "./Components/FileManager.jsx";
import ProjectProgress from "./Components/ProjectProgress.jsx";
import InventoryChart from "./Components/InventoryChart.jsx";
import MachiningProgress from "./Components/MachiningProgress.jsx";

function App() {
  const [view, setView] = useState("purchases");

  const renderView = () => {
    switch (view) {
      case "purchases":
        return <PurchasesCard />;
      case "FileManager":
        return <FileManager />;
      case "projects":
        return <ProjectProgress />;
      case "inventory":
        return <InventoryChart />;
      case "machining":
        return <MachiningProgress />;
      default:
        return <PurchasesCard />;
    }
  };
  return (
    <div className="flex">
      <Sidebar setView={setView} />
      <main className="flex-1 p-6 bg-gray-100 grid grid-cols-1 gap-4">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
