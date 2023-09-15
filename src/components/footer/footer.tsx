import style from './style.module.css'

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import LOGO from '../../assets/logo.png'

import { FaFacebookSquare } from 'react-icons/fa'

export function Footer() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <footer className={style.container}>
                <div className={style.about}>
                    <img src={LOGO} alt="logo" />
                    <p>Nossa missão é simplificar e agilizar o processo de obtenção de vistos, tornando as viagens internacionais acessíveis e livres de complicações.</p>
                </div>

                <div className={style.nav}>
                    <h1>Institucional</h1>
                    <div className={style.list}>
                        <Link to="/"><a>Início</a></Link>
                        <Link to="/novazelandia"><a>Nova Zelândia</a></Link>
                        <Link to="/australia"><a>Austrália</a></Link>
                        <Link to="/sobre"><a>Sobre</a></Link>
                        <Link to="/contato"><a>Contato</a></Link>
                    </div>
                </div>

                <div className={style.contact}>
                    <h1>Contato</h1>
                    <p>217 Commonwealth, St Surry Hills, Sydney NSW - Austrália</p>
                    <p>+55 43 99174-3584</p>
                    <p>+61 451 066 072</p>
                    <div className={style.icons}>
                        <a href="https://www.facebook.com/people/ND-Vistos/100090691496608/?mibextid=ZbWKwL" target='_blank'><FaFacebookSquare size={40} /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}