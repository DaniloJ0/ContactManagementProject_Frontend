import React from "react";
import TableRow from "./TableRow";

function Table({ ContactData, onEdit, onDelete }) {
  return (
      <table className="w-full text-xs xl:text-xl border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-1 py-1">Nombre</th>
            <th className="border border-gray-200 px-1 py-1">Correo</th>
            <th className="border border-gray-200 px-1 py-1">Celular</th>
            <th className="border border-gray-200 px-1 py-1">Dirección</th>
            <th className="border border-gray-200 px-1 py-1">Empresa</th>
            <th className="border border-gray-200 px-1 py-1">Nota</th>
            <th className="border border-gray-200 px-1 py-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ContactData && ContactData.map((item, index) => (
            <TableRow
              key={index}
              item={item}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
  );
}

export default Table;
