import { Routes, Route } from "react-router-dom"

import React from "react"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Welcome to the App</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRoutes
