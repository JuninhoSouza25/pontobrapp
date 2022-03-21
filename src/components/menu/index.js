import React from "react";
import { Link } from "react-router-dom";
import './menu.css'
import { AiOutlineOrderedList, AiOutlineCalendar, AiOutlineMenuUnfold, AiOutlineFileImage } from "react-icons/ai";
import { MdHome } from "react-icons/md";


export default function Menu(){
    return (
        <div className="menu-container">
            <Link className="menu-link" to={"/repertorio"}><AiOutlineOrderedList className="home-link-icon" color="inherit" size={23} /></Link>
            <Link className="menu-link" to={"/agenda"}><AiOutlineCalendar className="home-link-icon" color="inherit" size={23} /></Link>
            <Link className="menu-link" id="home-link-icon-home" to={"/"}><MdHome className="home-link-icon" color="inherit" size={50} /></Link>
            <Link className="menu-link" to={"/playlist"}><AiOutlineMenuUnfold className="home-link-icon" color="inherit" size={23} /></Link>
            <Link className="menu-link" to={"/galeria"}><AiOutlineFileImage className="home-link-icon" color="inherit" size={23} /></Link>
        </div>
    )
}