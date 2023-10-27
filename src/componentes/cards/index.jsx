import React, { useState } from "react";
import "./style.css";

function Card({ setSelectedProduct, ...props }) {
  const [clickedId, setClickedId] = useState(null);

  const handleClick = () => {
    setClickedId(props.id);
    setSelectedProduct(props);
    console.log("ID do item clicado:", props.id);
  };

  const cardClassName = `card card-${props.id}`;

  return (
    <div className={cardClassName}>
      <img src={props.imageSrc} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Valor: R$ {props.value.toFixed(2)}</p>
      <button onClick={handleClick}>Presentear</button>
    </div>
  );
}

export default Card;
