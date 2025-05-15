// App.jsx
import { useState } from "react";
import EditProfile from "./Components/EditProfile.jsx";
import Profile from "./Components/Profile.jsx";
import Header from "./Components/Header.jsx";
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
      case "profile":
       return <Profile setView={setView} />; //Este es para cuando agregamos un boton dentro de una vista
      case "editProfile":
        return <EditProfile  setView={setView} />;
      default:
        return <PurchasesCard />;
    }
  };
return (
    <div className="flex flex-col min-h-screen">
      <Header setView={setView}/>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar setView={setView} />
        <main className="flex-1 p-6 bg-gray-100 grid grid-cols-1 gap-4 overflow-auto">
          {renderView()}
        </main>
      </div>

    </div>
);  
}

export default App;
