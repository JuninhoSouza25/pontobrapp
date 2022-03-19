import './logo.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function Logo(){
    return(
        <Link to='/' className='logo-container'>
            <img src={logo} alt="Logo Ponto BR"/>
        </Link>
    )
}