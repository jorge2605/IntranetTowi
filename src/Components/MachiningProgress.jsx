// src/components/MachiningProgress.jsx
const data = [80, 70, 50, 35];

const MachiningProgress = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">Progreso de Maquinados</h2>
      {data.map((value, i) => (
        <div key={i} className="mb-3">
          <div className="w-full bg-gray-200 h-3 rounded">
            <div
              className="h-3 rounded bg-gradient-to-r from-blue-700 to-blue-400"
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MachiningProgress;
