import { Carousel } from 'react-bootstrap';
import slide1 from '../imagens/almas_dos_demonios.jpeg'
import slide2 from '../imagens/deus_da_guerra.jpeg'
import slide3 from '../imagens/homem_aranha.jpeg'

function Slide(){
    return(
        <section>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide1} alt="Primeiro Slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide2} alt="Segundo Slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide3} alt="Terceiro Slide"/>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}
export default Slide
