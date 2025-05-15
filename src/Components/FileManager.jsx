import { useState } from "react";
import { FaTrash ,FaEye} from "react-icons/fa"; // 👈 Importar ícono

const FileManager = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este archivo?");
    if (confirmed) {
      setFiles((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-0rem)] bg-white p-8 rounded-2xl shadow-lg overflow-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestor de Archivos</h2>

      {/* Subida de archivos */}
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-2">Subir archivos:</label>
        <input
          type="file"
          accept=".pdf,.docx,.xlsx"
          multiple
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0 file:text-sm file:font-semibold
            file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      </div>

      {/* Lista de archivos */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Archivos cargados</h3>

        {files.length === 0 ? (
          <p className="text-sm text-gray-400">No hay archivos cargados.</p>
        ) : (
          <ul className="space-y-3">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm"
              >
                <span className="truncate text-sm text-gray-800 max-w-[50%]">{file.name}</span>
                <div className="flex gap-4 items-center">
                  <a
                    href={URL.createObjectURL(file)}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="text-blue-500 hover:text-blue-700"
                    title="Ver archivo"
                  >
                    <FaEye/>
                  </a>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                    title="Eliminar"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileManager;
