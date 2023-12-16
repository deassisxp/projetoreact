import { Link } from "react-router-dom"
import '../Styles/Navbar.Modules.css'

function Navbar(props){
    return(
        <div id="navMain">
            <nav id="navSec">
                <ul>
                    <li>
                        <Link to="/"><span>Olá, {props.nome}</span></Link>
                    </li>
                    <li>
                        <Link to="/Sobre"><span>Sobre</span></Link>
                    </li>
                    <li>
                        <Link to="/Contato"><span>Contato</span></Link>
                    </li>
                    <li>
                        <Link to="/Quiz"><span>Quiz</span></Link>
                    </li>
                </ul>                
            </nav>            
        </div>
    )
}
export default Navbar