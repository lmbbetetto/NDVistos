import './global.css'

import { Route, Routes } from "react-router-dom";

import { Home } from './components/homePage/homePage'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { NovaZelandia } from './components/NZ/nz';
import { Australia } from './components/Australia/australia';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css'

import { Container } from "./homeStyles"

export function App() {

  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novazelandia" element={<NovaZelandia />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </Container>
  )
}