import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import './home.css';  
import { AiOutlineOrderedList, AiOutlineRead, AiOutlineMenuUnfold } from "react-icons/ai";

export function Home() {


  return (
    <>
      <Logo />
      <div className="home">
          <Link className="home-link" to='/repertorio'><AiOutlineOrderedList color="inherit" size={40} />Repertório</Link>
          <Link className="home-link" to='/agenda'><AiOutlineRead color="inherit" size={40} />Agenda</Link>
          <Link className="home-link" to='/agenda'><AiOutlineMenuUnfold color="inherit" size={40} />Playlists</Link>
      </div>
    </>
  );
}
