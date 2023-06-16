import React from "react";
import "./Van.css";
import { Link } from "react-router-dom";

function Van(props) {
  return (
    <div className="van">
      <Link to={`/vans/${props.id}`}>
        <img src={props.imageUrl} alt="" />
        <div className="details">
          <p className="name">{props.name}</p>
          <p className="price">
            <span className="amount">${props.price}</span>
            <span className="period">/day</span>
          </p>
        </div>
        <p className="type">{props.type}</p>
      </Link>
    </div>
  );
}

export default Van;
