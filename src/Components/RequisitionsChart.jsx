// src/components/RequisitionsChart.jsx
const data = [
  { label: "Pendientes", value: 12 },
  { label: "Aprobadas", value: 8 },
  { label: "Rechazadas", value: 5 },
  { label: "Canceladas", value: 2 },
];

const RequisitionsChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">Requisiciones</h2>
      {data.map((item, i) => (
        <div key={i} className="mb-2">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="h-2 rounded bg-gradient-to-r from-blue-700 to-blue-400"
              style={{ width: `${(item.value / 12) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequisitionsChart;
