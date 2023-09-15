import { useEffect } from 'react'
import { CardNZ } from './card/card'
import style from './style.module.css'

import { BsBagFill } from 'react-icons/bs'
import { BsBookHalf } from 'react-icons/bs'
import { FaMapMarked } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function NovaZelandia() {
    useEffect(() => {
        document.title = 'Nova Zelândia - N&D Vistos'
    })

    const CardsNZ = [
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
                <h1>Nova Zelândia</h1>
                <p>Terra de beleza natural, cultura maori e aventuras emocionantes. Montanhas, praias e fiordes encantadores. Conecte-se com a rica história e gastronomia local. Viva momentos únicos observando a vida selvagem.</p>
            </div>

            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.cards}>
                        {
                            CardsNZ.map((component, index) => (
                                <CardNZ
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
            </div>
        </>
    )
}