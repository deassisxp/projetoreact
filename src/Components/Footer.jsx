import '../Styles/Footer.Modules.css'
import { Nav, NavItem, NavLink } from "react-bootstrap";

function Footer(){
    return(
        <footer>
            <Nav className="footer-nav" style={{display:"flex"}}>
                <NavItem style={{alignItems:"center", textAlign:"center"}}>
                    <span>copyright &copy;</span>
                    <span>Nome do site</span>
                    <span>2023</span>
                </NavItem>
                <NavItem>
                    <NavLink className="footer-link" href="#">Termos de Uso</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="footer-link" href="#">Politicas de Privacidade</NavLink>
                </NavItem>
            </Nav>
        </footer>
    )
}
export default Footer