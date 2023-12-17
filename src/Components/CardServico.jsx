import React from "react";
import '../Styles/CardsServico.Modules.css'

const CardServico = ({ titulo, texto }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{titulo}</h2>
      </div>
      <div className="card-body">
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default CardServico;
