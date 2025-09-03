import './card.scss'

const Card = ({id, title, cover}) => {
    return (
        <article key={id} className="card">
            <img src={cover} alt={title} className="card__img" />
            <div className="card__overlay">
            <h2 className="card__title">{title}</h2>
                            </div>
                        </article>
    )
}

export default Card;