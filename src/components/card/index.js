import './card.css';
import React from 'react';

export default function Card({onClick, DATA}){
    return(
        <div className='card-container'>
            <h1 className='card-song'>{DATA.song}</h1>
            <p className='card-band'>{DATA.band}</p>
            <div className='card-video-container'>
                <iframe 
                width="100%" 
                height="500" 
                src={`https://youtube.com/embed/${DATA.video}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
            <button className='button' onClick={onClick}>Voltar</button>
            
        </div>
    )
}