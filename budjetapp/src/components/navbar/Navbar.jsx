import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { Heading } from '@chakra-ui/react'

const Navbar = ()=>{
    return <div className="navbarDiv" >
        <div className="navbarUpperDiv">
            <NavLink className="logo" to="/" > MyFinance </NavLink>
        </div>
        <div className="navbarLowerDiv" >
            <NavLink className="navlink" to="/" > Home </NavLink>
            <NavLink className="navlink" to="/about" > About </NavLink>
            <NavLink className="navlink" to="/login"> Login </NavLink>
        </div>
    </div>
}

export default Navbar;