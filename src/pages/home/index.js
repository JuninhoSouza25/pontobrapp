import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import './home.css';  
import { AiOutlineOrderedList, AiOutlineCalendar, AiOutlineMenuUnfold, AiOutlineFileImage } from "react-icons/ai";

export function Home() {


  return (
    <>
      <Logo />
      <div className="home">
          <Link className="home-link" to='/repertorio'><AiOutlineOrderedList className="home-link-icon" color="inherit" size={40} />Repertório</Link>
          <Link className="home-link" to='/agenda'><AiOutlineCalendar className="home-link-icon" color="inherit" size={40} />Agenda</Link>
          <Link className="home-link" to='/playlist'><AiOutlineMenuUnfold className="home-link-icon" color="inherit" size={40} />Playlists</Link>
          <Link className="home-link" to='/galeria'><AiOutlineFileImage className="home-link-icon" color="inherit" size={40} />Galeria</Link>
      </div>
    </>
  );
}
