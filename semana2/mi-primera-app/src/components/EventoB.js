import React from "react";
import "../styles/Evento.css";
function EventoB(props) {
    return (
        <div className="card-container">
            <img className="card-image" src={"https://pylapaz.org/media/images/pypizza03.2e16d0ba.fill-256x256.format-webp-lossless.webp"}></img>
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
}
export default EventoB;