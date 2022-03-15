import './card.css';
import React from 'react';


export default function Card({onClick, DATA}){
    return(
        <div className='card-container'>
            <h1>{DATA.song}</h1>
            <h2>{DATA.band}</h2>
            <p>{`Tom: ${DATA.tune}`}</p>
            <div>
                <video 
                    width="100%"
                    heigth="auto"
                    controls 
                    poster={DATA.poster}
                    src={DATA.video}>
                </video>
            </div>
            <button onClick={onClick}>Voltar</button>
            
        </div>
    )
}