import './card.css';
import React from 'react';
import Lyrics from '../lyrics';

export default function Card({onClick, DATA}){

    

    const convertToSlug = (text) => {
        const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
        const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
        const p = new RegExp(a.split('').join('|'), 'g')
        return text.toString().toLowerCase().trim()
          .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[\s\W-]+/g, '%20') // Replace spaces, non-word characters and dashes with a single dash (-)
    }

    let mus = `mus=${convertToSlug(DATA.song)}`
    let art = `art=${convertToSlug(DATA.band)}`

    return(
        <div className='card-container'>
            <h1 className='card-song'>{DATA.song}</h1>
            <p className='card-band'>{DATA.band}</p>
            <div className='card-text'>
                <Lyrics art={`${art}&${mus}`} />
            </div>
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