import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from "./componentes/Banner"
import Rodape from "./componentes/Rodape"
import Home from "./paginas/Home"
import "./App.css"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Banner 
        enderecoImagem='/imagens/banner.png' 
        textoAlternativo='O banner principal da página do Organo'
      />      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
