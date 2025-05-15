const Profile = ({setView}) => {
  const user = {
    name: "Jonathan Esparza",
    email: "Jonathan@si3i.com",
    phone: "+52 656 1234 567",
    department: "IT",
    role: "Administrador",
    location: "Ciudad Juárez, Chihuahua",
    joined: "15 Enero 2021",
    status: "Activo",
    photo: "data:image/png;base64,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",
  };

  return (
    <div className="flex justify-center items-start w-full min-h-screen bg-gray-50 py-12 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
        <div className="flex flex-col items-center">
          <img
            src={user.photo}
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4 shadow"
          />
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.role} - {user.department}</p>
          <span className={`mt-2 px-3 py-1 text-sm rounded-full ${user.status === "Activo" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
            {user.status}
          </span>
        </div>

        <div className="mt-6 space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Correo:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Teléfono:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Ubicación:</span>
            <span>{user.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Fecha de ingreso:</span>
            <span>{user.joined}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button onClick={() => setView("editProfile")} className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-xl shadow cursor-pointer">
            Editar perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
