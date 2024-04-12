import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../userCard/userCard";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/User/GetUsers`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <div className="md:flex gap-10 ">
    {users && users.map((user, index) => (
        <UserCard key={index} userInfo={user} />
    ))}
  </div>;
}

export default UsersList;
