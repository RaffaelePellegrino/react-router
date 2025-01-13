import { useState } from "react";
import { Link } from "react-router-dom";
/**
 * Renders a card component with an image, title, badge, and description.
 *
 * @param {string} image - The URL of the image to display at the top of the card. Defaults to a placeholder image.
 * @param {string} title - The title of the card.
 * @param {ReactNode} badge - A badge element to display within the card.
 * @param {string} description - The description text of the card. Defaults to "Descrizione non presente".
 *
 * @returns {JSX.Element} A JSX element representing the card.
 */
function Card({
  image,
  title,
  tag,
  id,
  onDelete,
}) {

  return (
        <div className="card">
            <img className="img-fluid"
                src={image}
                alt={title}
            />
            <div className="card-body">
                <h5 className="card-title p-1">{title}</h5>
                <p className="card-text p-1">{tag}</p>
                <div className="d-flex justify-content-between">
                    <div className="btn border-black"><Link to={`/posts/${id}`}>Vedi dettaglio</Link></div>
                    <button className="btn border-black" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
  );
}

export default Card;