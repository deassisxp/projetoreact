import { Link } from "react-router-dom"
import '../Styles/Navbar.Modules.css'

function Navbar(props){
    return(
        <div id="navMain">
            <nav id="navSec">
                <li id="navhome">
                    <Link to="/"><h1>Olá, {props.nome}</h1></Link>
                </li>
            </nav>
            <nav id="navSec">
                <ul>                
                    <li id="navmenu">
                        <Link to="/sobre"><h1>Sobre</h1></Link>
                    </li>
                    <li id="navmenu">
                        <Link to="/contato"><h1>Contato</h1></Link>
                    </li>
                    <li id="navmenu">
                        <Link to="/quiz"><h1>Quiz</h1></Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}
export default Navbar