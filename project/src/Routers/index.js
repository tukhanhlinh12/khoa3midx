import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login_Register/Login";
import Register from "../pages/Login_Register/Register";
import Profile from "../pages/Profile";
import Card from "../pages/Home/Card";
import Shop from "../pages/Home/Shop";

const Routers = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/card" element={<Card />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
        </>
    );
};

export default Routers;