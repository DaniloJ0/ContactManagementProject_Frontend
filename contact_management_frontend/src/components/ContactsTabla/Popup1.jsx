import React, { useState } from 'react';

function Popup1({ onClose, onSave, formData, initialFormData }) {
  const [data, setData] = useState(formData);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2>Editar</h2>
        <form>
          {Object.keys(initialFormData).map((key, index) => (
            <div key={index}>
              <label>{key}:</label>
              <input type="text" name={key} value={data[key]} onChange={handleChange} />
            </div>
          ))}
        </form>
        <div>
          <button onClick={handleSave}>Guardar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Popup1;
