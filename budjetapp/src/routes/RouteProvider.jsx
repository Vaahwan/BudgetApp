import React from "react";
import { Route,Routes } from "react-router-dom";

import Home from "../components/home/Home";
import About from "../components/about/About";
import Login from "../components/login/Login";

const RouteProvider = ()=>{
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
}

export default RouteProvider;