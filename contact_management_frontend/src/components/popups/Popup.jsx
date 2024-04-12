import React from 'react';

function Popup({ isOpen, onCancel, onAccept }) {
  return (
    <div className={`fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded-lg">
        <h2>Popup Content</h2>
        <p>This is a popup.</p>
        <div className="flex justify-end mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={onCancel}>Cancel</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onAccept}>Accept</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
