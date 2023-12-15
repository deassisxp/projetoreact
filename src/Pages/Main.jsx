import { Link } from "react-router-dom"
import '../Styles/Modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from "../Components/Slide";

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
                <div className="homeDestaqueDepoimentos--list">
                    <article className="homeDestaqueDepoimentos--item">
                        <div className="homeDestaqueDepoimentos--item-header">
                            <img className="homeDestaqueDepoimentos--item-photo" src="/assets/img/depoimentos/alunos/angela-caldas.1686744881.jpg" alt="Foto de Angela Emanoelle" loading="lazy"/>
                            <h3 className="homeDestaqueDepoimentos--item-name">Angela Emanoelle</h3>
                        </div>
                        <div className="homeDestaqueDepoimentos--item-body">
                            <p className="homeDestaqueDepoimentos--item-body-details">A arquiteta Angela estava atuando na área da construção civil...</p>
                            <div className="homeDestaqueDepoimentos--item-body-preview" data-src="ODEgEk83PLA">
                                <img src="/assets/img/alura2023/home/video-play.1687365821.png" alt="Play" loading="lazy"/>
                                <a href="https://www.youtube.com/watch?v=ODEgEk83PLA" target="_blank" rel="noopener"></a>
                            </div>
                                <a href="https://www.youtube.com/watch?v=ODEgEk83PLA" target="_blank" rel="noopener" className="homeDestaqueDepoimentos--item-body-link">Ver depoimento completo no YouTube</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
        
    )
}
export default Main