import { useEffect } from 'react'
import { CardAus } from './card/card'
import style from './style.module.css'

import { BsBagFill } from 'react-icons/bs'
import { BsBookHalf } from 'react-icons/bs'
import { FaMapMarked } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Australia() {
    useEffect(() => {
        document.title = 'Austrália - N&D Vistos'
    })

    const cards = [
        {
            icon: <FaMapMarked />,
            name: 'Turista',
            content: 'É a permissão temporária para fins turísticos, sem trabalho ou estudo. Requisitos variam de acordo com o país.',
        },
        {
            icon: <BsBookHalf />,
            name: 'Estudante',
            content: 'É a permissão para estudantes estrangeiros estudarem em outro país.',
        },
        {
            icon: <BsBagFill />,
            name: 'Trabalho',
            content: 'É a autorização para estrangeiros trabalharem legalmente em outro país com base em oferta de emprego.',
        },
    ]
    return (
        <>
            <div className={style.cover}>
                <h1>Austrália</h1>
                <p>Austrália: Terra dos encantos naturais, cultura aborígine e vida selvagem única. Suas praias, montanhas e cidades vibrantes cativam os viajantes. Explore a Grande Barreira de Corais e descubra a diversidade da fauna. Mergulhe na rica história aborígine e encante-se com sua arte.</p>
            </div>

            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.cards}>
                        {
                            cards.map((component, index) => (
                                <CardAus
                                    key={index}
                                    icon={component.icon}
                                    name={component.name}
                                    content={component.content}
                                />
                            ))
                        }
                    </div>

                    <h2>Contate-nos</h2>
                    <Link to='/contato'><button className={style.btn}>Contato</button></Link>
                </div>
                <div className={style.canguru}></div>
            </div>
        </>
    )
}