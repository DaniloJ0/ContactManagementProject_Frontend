import React from "react";
import Table from "./Table";
import { MdOutlinePersonAdd } from "react-icons/md";

function ContactTable({ ContactData }) {
  const handleEdit = (user) => {
    // Implementa la lógica para editar el usuario
    console.log("Edit user:", user);
  };

  // Función para eliminar usuario
  const handleDelete = (user) => {
    // Implementa la lógica para eliminar el usuario
    console.log("Delete user:", user);
  };
  return (
    <div className="overflow-x-auto px-4">
      <div className="flex">
          <button className="flex items-center w-1/2 gap-2">
            <MdOutlinePersonAdd className="text-blue-600" />
          <p className="text-xs font-bold text-blue-500">Agregar contacto</p>
          </button>
        <h1 className="text-xl text-center font-bold my-2 xl:my-4">
          Contactos
        </h1>
      </div>
      <Table
        ContactData={ContactData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default ContactTable;
