import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import React from "react";
import Repertoire from "./pages/setlist";
import { Music } from "./pages/music";
import Schedule from "./pages/schedule";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repertorio" element={<Repertoire />} />
      <Route path="/musica" element={<Music />} />
      <Route path="/agenda" element={<Schedule />} />
    </Routes>
  )
}