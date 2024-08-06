import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        const payload = {
            email: email,
            password: password
        }

        axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.access_token));
                alert("Login Success");
                console.log("Login Successful", res)
            })
            .catch((err) => {
                alert("Login Failed");
                console.log("Login Failed", err)
            })
    }


    return (
        <div className='bg-sky-200 space-y-4 p-5 rounded-md shadow-md m-10 w-72'>
            <p className='font-semibold text-lg text-center'>Login Page</p>

            <div>
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className='border rounded-md shadow-md' />
            </div>
            <div>
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className='border rounded-md shadow-md' />
            </div>
            <button onClick={handleSubmit} className='bg-blue-600 px-4 py-1 rounded-md shadow-md text-white'>Login</button>
        </div>
    )
}

export default Login