import { Link } from "react-router-dom";
import React from "react";
import '../Styles/Sobre.Modules.css';
import Header from "../Components/Header";
import CardServico from "../Components/CardServico"; 
import servicos from '../Data/servicos.json'

const cards = [ 
  { titulo: servicos[0].titulo, texto: servicos[0].texto },
  { titulo: servicos[1].titulo, texto: servicos[1].texto },
  { titulo: servicos[2].titulo, texto: servicos[2].texto },
];

function Sobre() {
  return (
    <div className="sobre">
      <Header />
      <section id="cardcontato">
        {cards.map((card, index) => (
          <CardServico key={index} titulo={card.titulo} texto={card.texto} />
        ))}
      </section>
    </div>
  );
}

export default Sobre;