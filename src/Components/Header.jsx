import '../Styles/Header.Modules.css'
import { Carousel } from 'react-bootstrap';
import slide1 from '../imagens/plano_de_fundo2.jpg'

function Header(){
    return(
        <>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide1} alt="Primeiro Slide" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Header