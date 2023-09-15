import { useEffect } from 'react'
import style from './style.module.css'

export function About() {

    useEffect(() => {
        document.title = 'Sobre - N&D Vistos'
    })

    return (
        <>
            <div className={style.cover}>
                <h1>Sobre</h1>
            </div>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.top}>
                        {/* <div className={style.first}>
                            <h1>História</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div> */}
                        <div className={style.second}>
                            <h1>Missão</h1>
                            <p>Nossa missão é simplificar e agilizar o processo de obtenção de vistos, tornando as viagens internacionais acessíveis e livres de complicações. Estamos empenhados em oferecer soluções confiáveis e inovadoras que reduzam o estresse associado à obtenção de vistos, proporcionando aos nossos clientes uma experiência tranquila e sem interrupções. Com um compromisso contínuo com a eficiência, a transparência e o atendimento personalizado ao cliente, proporcionamos um serviço que simplifica as fronteiras globais e conecta pessoas através das fronteiras.</p>
                        </div>
                    </div>
                    <div className={style.botton}>
                        <h1>Visão e Valores</h1>
                        <p>Nossa visão é criar um mundo onde as barreiras de fronteiras nunca limitem o desejo humano de explorar, conectar e expandir horizontes. Visualizamos um cenário em que a obtenção de vistos seja um processo eficiente e sem complicações, permitindo que os indivíduos se movam livremente, descubram novas culturas e estabeleçam laços que transcendam as limitações geográficas.</p>
                        <br /><p><strong>- Facilitação Empática:</strong> Nossa base é a empatia. Reconhecemos que o processo de obtenção de vistos pode ser complexo e, muitas vezes, estressante. Nossa abordagem é centrada nas necessidades do cliente, assegurando um suporte atencioso e uma experiência tranquila durante todo o processo.
                            <br /><br /><strong>- Excelência em Serviços:</strong> Buscamos incansavelmente a excelência. Nossos serviços são marcados por padrões de qualidade intransigentes, garantindo precisão, eficiência e profissionalismo em cada etapa da jornada de obtenção de vistos.
                            <br /><br /><strong>- Inovação Contínua:</strong> A inovação é o coração do nosso progresso. Constantemente exploramos novas maneiras de simplificar o processo de obtenção de vistos, incorporando tecnologias e práticas inovadoras para tornar a experiência mais acessível e amigável.
                            <br /><br /><strong>- Confiança e Transparência:</strong> Construímos relações baseadas na confiança mútua. Operamos com transparência em todas as nossas interações, fornecendo informações claras e precisas para garantir que nossos clientes compreendam completamente o processo de obtenção de vistos.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}