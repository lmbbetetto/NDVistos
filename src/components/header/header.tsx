import { Link } from 'react-router-dom'
import './style.css'
import { AnimatedHumburguerButton } from './animatedHamburguerButton'
import { useState } from 'react'

import LOGO from '../../assets/logo.png'

import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaFacebookSquare } from 'react-icons/fa'

export function Header() {

    const [active, setActive] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header className="containerDesk">
                <div className="logo"></div>
                <div>
                    <div className="nav">
                        <Link to="/"><a>Início</a></Link>
                        <Link to="/novazelandia"><a>Nova Zelândia</a></Link>
                        <Link to="/australia"><a>Austrália</a></Link>
                        <Link to="/sobre"><a>Sobre</a></Link>
                        <Link to="/contato"><a>Contato</a></Link>
                    </div>
                </div>
            </header>

            <div className='main_mobile'>
                <header className='mobile_mobile'>
                    <div className='hamburguer-container'>
                        <button className='hamburguer' onClick={() => { setActive(!active) }} ><AnimatedHumburguerButton active={active} /></button>
                    </div>
                    <div className={active ? "activeSidenav" : "sidenav"}>
                        <div className="container_mobile container-header">
                            <div className="mobile_1" onClick={scrollToTop}>
                                <Link to="/"><a onClick={() => { setActive(!active) }}>Início</a></Link>
                                <Link to="/novazelandia"><a onClick={() => { setActive(!active) }}>Nova Zelândia</a></Link>
                                <Link to="/australia"><a onClick={() => { setActive(!active) }}>Austrália</a></Link>
                                <Link to="/sobre"><a onClick={() => { setActive(!active) }}>Sobre</a></Link>
                                <div className='linha'>
                                    <Link to="/contato"><a onClick={() => { setActive(!active) }}>Contato</a></Link>
                                </div>
                                <div className='socials'>
                                    <a href="/" target="_blank"><BiLogoInstagramAlt size={36} /></a>
                                    <a href="/" target="_blank"><FaFacebookSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/"><img src={LOGO} alt="Logo Casa Lar" className='logo__casa' /></Link>
                    </div>
                </header>
            </div>
        </>
    )
}