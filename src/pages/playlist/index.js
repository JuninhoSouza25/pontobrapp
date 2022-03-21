import React from "react";
import Logo from "../../components/logo";
import Menu from "../../components/menu";
import PlaylistComponent from "../../components/playlist";
import './playlist.css'

export default function Playlist(){
    return(
        <>
            <Logo />
            <div className="playlist-container">
                <h1>Playlists</h1>
                <PlaylistComponent />
            </div>
            <Menu />
        </>
    )
}