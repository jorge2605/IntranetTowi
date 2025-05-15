// App.jsx
import Sidebar from "./Components/Sidebar.jsx";
import PurchasesCard from "./Components/PurchasesCard.jsx";
import RequisitionsChart from "./Components/RequisitionsChart.jsx";
import ProjectProgress from "./Components/ProjectProgress.jsx";
import InventoryChart from "./Components/InventoryChart.jsx";
import MachiningProgress from "./Components/MachiningProgress.jsx";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PurchasesCard />
        <RequisitionsChart />
        <ProjectProgress />
        <InventoryChart />
        <div className="col-span-full">
          <MachiningProgress />
        </div>
        <div className="bg-red-500 text-white p-4 text-xl font-bold">
  Tailwind debería verse en rojo 🔥
</div>
      </main>


    </div>
  );
}

export default App;
