import React from 'react';
import { MdDelete, MdModeEdit } from "react-icons/md";

function TableRow({ item, onEdit, onDelete }) {
  const { name, email, phoneNumber, address, company, note } = item;

  return (
    <tr className="border text-xs border-gray-200">
      <td className="border border-gray-200 px-4 py-2">{name}</td>
      <td className="border border-gray-200 px-4 py-2">{email}</td>
      <td className="border border-gray-200 px-4 py-2">{phoneNumber}</td>
      <td className="border border-gray-200 px-4 py-2">{address}</td>
      <td className="border border-gray-200 px-4 py-2">{company}</td>
      <td className="border border-gray-200 px-4 py-2">{note}</td>
      <td className="border border-gray-200 px-4 py-2">
        <button className='mr-1 mb-2 xl:mb-0 xl:text-xl xl:mr-4' onClick={() => onEdit(item)}> <MdModeEdit className="text-blue-600" /></button>
        <button className='xl:text-xl' onClick={() => onDelete(item)}><MdDelete className="text-red-600" /></button>
      </td>
    </tr>
  );
}

export default TableRow;
