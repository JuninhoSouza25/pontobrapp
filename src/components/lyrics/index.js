import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Lyrics(art){
    const [music, setMusic] = useState()

    useEffect(() => {
        axios
        .get(`https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&${art.art}`)
        .then((response) => {
            setMusic(response.data.mus[0].text)
        })
    },[])
    

    return(
        <div style={{color:"#fcf1d5"}}>
         {music}
        </div>
        
        
    ) 
}

