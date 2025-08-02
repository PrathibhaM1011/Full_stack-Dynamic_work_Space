import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AdminHomePage from "./Pages/AdminHomePage";
import MerchantHomePage from "./Pages/MerchantHomePage";
import UserHomePage from "./Pages/UserHomePage";
function App() { 

  return (
    <> 
    <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-home" element={<AdminHomePage/>} />
        <Route path="/merchant-home" element={<MerchantHomePage/>} />
        <Route path="/user-home" element={<UserHomePage/>} />
    </Routes> 
    </>
    
  )
}

export default App;
