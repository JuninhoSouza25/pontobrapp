import './list.css';
import { BiChevronsRight } from "react-icons/bi";
import React from 'react';


export default function List({onClick, DATA, value}){
    return(
        <>
            {DATA.map((DATA) =>
                <li className='list-element-container' id={DATA.id} key={DATA.id} onClick={onClick} value={value}>
                    <div className='list-element-description-container'>
                        <h1 id={DATA.id} className='list-element-song'>{DATA.song}</h1>
                        <p id={DATA.id} className='list-element-band'>{DATA.band}</p>
                    </div>
                    <div id={DATA.id} className='list-element-icon'><BiChevronsRight size={30} color="inherit" id={DATA.id} /></div>
                </li>
            )}
        </>
    )
}