import style from './style.module.css'

import Australia from '../../assets/bandeiraAustralia.png'
import NZ from '../../assets/bandeiraNZ.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
    useEffect(() => {
        document.title = 'Home - N&D Vistos'
    })

    return (
        <>
            <div className={style.cover}></div>

            <div className={style.container}>
                <div className={style.card}>
                    <img src={Australia} alt="bandeira" />
                    <h1 className={style.title}>Australia</h1>
                    <p className={style.paragraph}>Mais informações</p>
                    <Link to={"/australia"}><button className={style.btn}>Acessar</button></Link>
                </div>

                <div className={style.cardNZ}>
                    <img src={NZ} alt="bandeira" />
                    <h1 className={style.title}>Nova Zelândia</h1>
                    <p className={style.paragraph}>Mais informações</p>
                    <Link to={"/novazelandia"}><button className={style.btn}>Acessar</button></Link>
                </div>
            </div>
        </>
    )
}