import React, { useState } from 'react';

function CrearPopup({ isOpen, onCreate, onCancel }) {
  const [nuevoContacto, setNuevoContacto] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    company: '',
    note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoContacto({ ...nuevoContacto, [name]: value });
  };

  const handleGuardar = () => {
    onCreate(nuevoContacto);
  };

  return (
    <div className={` fixed inset-0 flex p-5 xl:p-3 justify-center items-center bg-gray-500 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white w-1/3 p-4 rounded-lg h-5/6 overflow-x-auto">
        <h2 className=' md:pt-0 text-center mb-2'>Crear Nuevo Contacto</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" value={nuevoContacto.name} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo electrónico:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name="email" value={nuevoContacto.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Teléfono:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="text" name="phoneNumber" value={nuevoContacto.phoneNumber} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Dirección:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" name="address" value={nuevoContacto.address} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">Empresa:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" name="company" value={nuevoContacto.company} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">Nota:</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="note" name="note" value={nuevoContacto.note} onChange={handleChange}></textarea>
          </div>
        </form>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleGuardar}>Guardar</button>
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default CrearPopup;
