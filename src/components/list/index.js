import './list.css';
import { BiChevronsRight } from "react-icons/bi";
import React from 'react';


export default function List({onClick, DATA, value}){
    return(
        <>
            {DATA.map((DATA) =>
                <li className='list-element-container' id={DATA.id} key={DATA.id} onClick={onClick} value={value}>
                        <h1 id={DATA.id} className='list-element-song'>{DATA.song}</h1>
                        <p id={DATA.id} className='list-element-band'>{DATA.band}</p>
                        <div id={DATA.id} className='list-element-icon'><BiChevronsRight size={18} color="black" id={DATA.id} /></div>
                </li>
            )}
        </>
    )
}