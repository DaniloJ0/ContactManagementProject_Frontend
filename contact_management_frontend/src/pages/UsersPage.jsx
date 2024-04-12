import React from "react";
import UsersList from "../components/usersList/UsersList";
import axios from "axios";

function UsersPage() {
  const handleCreateUser = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/User`, {
        data: {
          name: "",
          email: "",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <main className="w-full h-screen bg-gradient-to-r from-indigo-900 to-blue-500">
      <div className="p-5 xl:p-10 flex flex-col gap-24 items-center h-full">
        <div className="text-white font-serif text-6xl">Usuarios</div>
        <UsersList />
        <button
          onClick={() => handleCreateUser}
          className="rounded-xl  px-8 py-2 bg-white"
        >
          Crear nuevo usuario
        </button>
     </div>
    </main>
  );
}

export default UsersPage;
