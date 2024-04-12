import React, { useState } from "react";
import Table from "./Table";
import { MdOutlinePersonAdd } from "react-icons/md";
import CrearPopup from "../popups/CrearContactPopUp";
import EditPopup from "../popups/EditPopUp";
import axios from "axios";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";

function ContactTable({ ContactData, userId }) {
  const [isEditarPopupAbierto, setEditarPopupAbierto] = useState(false);
  const [isCrearPopupAbierto, setCrearPopupAbierto] = useState(false);
  const [contactoAEditar, setContactoAEditar] = useState(null);

  const abrirEditarPopup = (contacto) => {
    setContactoAEditar(contacto);
    setEditarPopupAbierto(true);
  };

  const cerrarEditarPopup = () => {
    setEditarPopupAbierto(false);
  };

  const guardarContactoEditado = (contactoEditado) => {
    // Lógica para guardar el contacto editado
    console.log("Contacto editado:", contactoEditado);
    cerrarEditarPopup();
  };

  const abrirCrearPopup = () => {
    setCrearPopupAbierto(true);
  };

  const cerrarCrearPopup = () => {
    setCrearPopupAbierto(false);
  };

  const crearNuevoContacto = (nuevoContacto) => {
    // Lógica para crear un nuevo contacto
    console.log("Nuevo contacto creado:", nuevoContacto);

    const nuevoContactoConUserId = {
      ...nuevoContacto,
      userId: { value: userId }, // Reemplaza este valor con el id de usuario correcto
    };

    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/Contact`,
        nuevoContactoConUserId
      )
      .then((response) => {
        return Swal.fire({
          title: "Contacto creado!",
          text: "Enhorabuena, has creado un nuevo contacto!",
          icon: "success",
          confirmButtonText: "Cool",
        }).then(() => {
          redirect(`/contacts/${userId}`);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    cerrarCrearPopup();
  };

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (contact) => {
    axios.delete(`${process.env.REACT_APP_API_BASE_URL}/Contact`, {
      data: { value: contact },
    }).then((response) => {
      return Swal.fire({
        title: "Contacto eliminado!",
        text: "Has eliminado un contacto!",
        icon: "success",
        confirmButtonText: "Cool",
        }).then(() => {
          redirect(`/contacts/${userId}`);
        });
    }).catch((error) => {
      console.log(error);
    });
    console.log("Delete user:", contact);
  };
  return (
    <div className="overflow-x-auto px-4">
      <div className="flex">
        <button
          onClick={abrirCrearPopup}
          className="flex items-center w-1/2 gap-2"
        >
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
      {/* <EditPopup abrirEditarPopup={abrirEditarPopup} isOpen={isEditarPopupAbierto} contacto={contactoAEditar} onSave={guardarContactoEditado} onCancel={cerrarEditarPopup} /> */}
      {/* Popup de creación */}
      <CrearPopup
        isOpen={isCrearPopupAbierto}
        onCreate={crearNuevoContacto}
        onCancel={cerrarCrearPopup}
      />
    </div>
  );
}

export default ContactTable;
