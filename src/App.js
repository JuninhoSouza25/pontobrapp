import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import React from "react";
import Repertoire from "./pages/setlist";
import { Music } from "./pages/music";
import Schedule from "./pages/schedule";
import Playlist from "./pages/playlist";
import Gallery from "./pages/gallery";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repertorio" element={<Repertoire />} />
      <Route path="/musica" element={<Music />} />
      <Route path="/agenda" element={<Schedule />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
  )
}