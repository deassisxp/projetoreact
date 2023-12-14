import { Link } from "react-router-dom"

function Navbar(props){
    return(
        <nav id="navMain">
            <ul>
                <li>
                    <Link to="/"><h1>Olá, {props.nome}</h1></Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar