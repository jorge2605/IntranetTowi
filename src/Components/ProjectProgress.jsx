// src/components/ProjectProgress.jsx
const ProjectProgress = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
      <h2 className="text-lg font-semibold text-gray-600 mb-2">Progreso de Proyectos</h2>
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#2563eb"
            strokeWidth="10"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset={283 - 0.75 * 283}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-blue-700 font-bold text-xl">
          75%
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
