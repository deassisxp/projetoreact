import { Link } from "react-router-dom"
import '../Styles/Modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from "../Components/Slide";
import CardServico from "../Components/CardServico"; 
import depoimentos from '../Data/depoimentos.json'

const cards = [ 
  { titulo: depoimentos[0].titulo, texto: depoimentos[0].texto },
  { titulo: depoimentos[1].titulo, texto: depoimentos[1].texto },
  { titulo: depoimentos[2].titulo, texto: depoimentos[2].texto },
];

function Main(){
    return(
        <div className="main">
            <Slide/>
            <section>
                <h1>
                    Lorem ipsum dolor sit amet.
                </h1>
                <h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi cum saepe sapiente explicabo odio aperiam, culpa quos. Quos tempora cupiditate eum optio, distinctio porro doloribus accusantium, temporibus nemo reprehenderit facilis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt sed mollitia necessitatibus qui fugit earum, laboriosam quis quibusdam rerum, maxime dolorem harum recusandae aspernatur non placeat minus tempora ab!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod eum vitae, quibusdam quae iusto sunt suscipit incidunt harum dignissimos eligendi inventore consequuntur sit dolorem! Dolorem deleniti ea debitis. Omnis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut, cupiditate numquam alias facere distinctio quisquam molestias itaque possimus tenetur provident, laudantium dolorem? Ipsum quibusdam dolorum veniam quae, aperiam minima.</p>
                </h3>
            </section>
            <section>
                <div className="container nopadd">
                    <div className="row center counters with-borders">
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="counter counter-primary">
                                <strong data-to="100" data-append="+">100</strong>
                                <label>Funcionários</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="counter counter-primary">
                                <strong data-to="900" data-append="">900</strong>
                                <label>Projetos  Concluídos</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="counter counter-primary">
                                <strong data-to="10" data-append="">10</strong>
                                <label>Anos de Experiência</label>
                            </div>
                        </div>
                    </div>
                </div>                
            </section>
            
            <section>
                {cards.map((card, index) => (
                <CardServico key={index} titulo={card.titulo} texto={card.texto} />
                ))}
            </section>
        </div>
        
    )
}
export default Main