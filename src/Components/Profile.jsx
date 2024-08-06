import axios from 'axios'
import React, { useState } from 'react'

const Profile = () => {
    const [userData, setUserData] = useState()

    const getProfileData = () => {

        const token = JSON.parse(localStorage.getItem('token'))

        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
            .then((res) => {
                setUserData(res.data)
                console.log("profile data", res)
            })
            .catch((err) => {
                alert("You are not logged in")
                console.log("Error occured", err)
            })
    }
    const handleLogout = () => {
        setUserData()
        localStorage.removeItem("token");
        alert("Log out success");
    }

    return (
        <div>
          
            <button className='bg-blue-400 text-white px-3 py-1' onClick={getProfileData}>Get Profile Data</button>
            <button className='bg-red-500 text-white px-4 py-1' onClick={handleLogout}>Log Out </button>

            {userData &&

                <div>
                    <p>Name : {userData?.name || "N/A"} </p>
                    <p>Email : {userData?.email || "N/A"}</p>
                    <p>Role : {userData?.role || "N/A"}</p>
                    <img className='rounded-full h-20 w-20' src={userData?.avatar} alt="Avatar" />
                </div>
            }

        </div>
    )
}

export default Profile