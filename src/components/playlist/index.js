import React from "react";
import './playlistcomponent.css'
import { SiSpotify, SiYoutube } from "react-icons/si";


export default function PlaylistComponent() {
    return(
        <div className="playlist-component--container">
            <a className="playlist-component--link" href="https://open.spotify.com/playlist/2CBpXEgwqsiY7AIOnhJW9Q?si=f5a5068d5c0940e8" target="_blank" rel="noreferrer"><SiSpotify size={30} color="inherit"/>Spotify</a>
            <a className="playlist-component--link" href="https://www.youtube.com/playlist?list=PLN_YLFtJ7xheMP6WMcqy7PMJDdajIjdVg" target="_blank" rel="noreferrer"><SiYoutube size={30} color="inherit"/>Youtube</a>
        </div>
    )
}