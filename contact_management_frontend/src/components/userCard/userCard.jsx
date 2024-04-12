import React from 'react'
import {Link} from 'react-router-dom'

function UserCard({userInfo}) {
  return (
    <Link to={`/contacts/${userInfo.id.value}`} >
        <div className="mb-10 md:mb-0 border-4 w-32 h-32 rounded-full bg-gradient-to-r from-green-100 to-blue-500  flex justify-center items-center">
        <div className="text-md font-semibold cursor-pointer w-fit text-center">
            <h3>{userInfo.name}</h3>
        </div>
        </div>
    </Link>
  )
}

export default UserCard