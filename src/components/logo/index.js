import './logo.css';
import React from 'react';
import logo from './logo.png';

export default function Logo(){
    return(
        <div className='logo-container'>
            <img src={logo} alt="Logo Ponto BR"/>
        </div>
    )
}