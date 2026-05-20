import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        await axios.post("http://localhost:3000/api/auth/register", {
            username,
            email,
            password
        }, {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data)
            })
    }

    return (
        <main>
            <div className='form-container'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input onInput={(e) => {
                        setusername(e.target.value)
                    }}
                        value={username}
                        type="text"
                        name="username"
                        placeholder='Enter Username' />

                    <input
                        onInput={(e) => {
                            setemail(e.target.value)
                        }}
                        value={email}
                        type="email" name="email"
                        placeholder='Enter Email'
                    />
                    <input
                        onInput={(e) => {
                            setpassword(e.target.value)
                        }}
                        value={password}
                        type="password" name="password"
                        placeholder='Enter Password'
                    />

                    <button>Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </main>
    )
}

export default Register
