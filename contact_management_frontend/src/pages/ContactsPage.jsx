import { useParams, redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../img/perro3.jpg";
import { MdDelete, MdModeEdit } from "react-icons/md";
import ContactTable from "../components/ContactsTabla/ContactTable";


function ContactsPage() {
  let { userId } = useParams();
  const [UserData, setUserData] = useState(null);
  const [ContactData, setContactData] = useState(null);

  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/User/GetById/${userId}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/Contact/GetByUserId/${userId}`
      )
      .then((response) => setContactData(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  const handleDeleteUser = () => {
    axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/User`, {
        data: {value: userId},
      })
      .then((response) => redirect("/"))
      .catch((error) => console.log(error));
  }

  return (
    <main className="w-full md:h-screen bg-gradient-to-r from-indigo-800 to-blue-500 flex  justify-center items-center">
      <div className="md:flex gap-10 p-5 md:p-10  bg-gradient-to-r from-indigo-100 to-blue-100  w-4/5 md:h-5/6 rounded-xl">
        <div className="py-5 mb-10 md:py-0 md:mb-0 flex flex-col h-full bg-white rounded-xl md:w-1/3 px-2 items-center xl:justify-center ">
          <div className="rounded-full w-24 h-24 border-2 border-gray-200 bg-white mt-10 ">
            <img
              src={img1}
              alt=""
              className="object-cover rounded-full h-full"
            />
          </div>
          <div className="flex gap-3 my-2">
              {/* <button onClick={()=> handleDeleteUser()} > */}
            <button >
              <MdModeEdit className="text-blue-600" />
            </button>
            <button>
              <MdDelete className="text-red-600" />
            </button>
          </div>
          <p className="font-bold ">Correo:</p>
          <p>{UserData && UserData.email}</p>
          <p className="font-bold mt-2">Nombre:</p>
          <p>{UserData && UserData.name}</p>
        </div>
        <div className="flex flex-col h-full p-2 bg-white w-full rounded-xl overflow-x-auto">
          <ContactTable ContactData={ContactData} />
        </div>
      </div>
    </main>
  );
}

export default ContactsPage;
