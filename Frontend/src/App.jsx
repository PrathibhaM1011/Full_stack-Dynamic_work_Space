import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MerchantHomePage from "./Pages/MerchantHomePage";
import UserHomePage from "./Pages/UserHomePage";
import ExplorePage from './Pages/ExplorePage';
import Workspaces from "./Pages/admin/Workspaces";
function App() { 

  return (
    <> 
    <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/workspaces" element={<Workspaces/>} />
        <Route path="/merchant-home" element={<MerchantHomePage/>} />
        <Route path="/user-home" element={<UserHomePage/>} />
        <Route path="/explore" element={<ExplorePage />} />
    </Routes> 
    </>
    
  )
}

export default App;
