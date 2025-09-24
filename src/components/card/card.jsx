import { Link } from "react-router";
import "./card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/details/${id}`} className="card__link">
      <article key={id} className="card">
        <img src={cover} alt={title} className="card__img" />
        <div className="card__overlay">
          <h2 className="card__title">{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default Card;
