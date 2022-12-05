import { Route, Routes } from "react-router-dom"

import { Home } from "../../Home/Home"
import { Historia } from "../../Historia/Historia"
import { Menu } from "../Menu/Menu"
import { Integrantes } from "../../Integrantes/Integrantes"
import { Musica } from "../../Music/Musica"
import { Albumes } from "../../Albumes/Albumes"


export function Rutas(){
    return (
    <>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/integrantes" element={<Integrantes/>} />
          <Route path="/musica" element={<Musica/>} />
          <Route path="/albumes" element={<Albumes/>} />

        </Routes>
    </>
      )
}