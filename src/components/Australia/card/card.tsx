import style from './style.module.css'

interface Card {
    icon: JSX.Element,
    name: string,
    content: string,
}

export const CardAus: React.FC<Card> = (props) => {
    return (
        <>
            <div className={style.container}>
                {props.icon}
                <h1>{props.name}</h1>
                <p>{props.content}</p>
            </div>
        </>
    )
}