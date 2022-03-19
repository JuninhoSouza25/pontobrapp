import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import './home.css';  
import { AiOutlineOrderedList, AiOutlineRead } from "react-icons/ai";

export function Home() {


  return (
    <>
      <Logo />
      <div className="home">
          <Link className="home-link" to='/repertorio'><AiOutlineOrderedList color="#fcf1d5" size={40} />Repertório</Link>
          <Link className="home-link" to='/repertorio'><AiOutlineRead color="#fcf1d5" size={40} />Agenda</Link>
      </div>
    </>
  );
}
