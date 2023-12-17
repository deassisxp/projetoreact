import '../Styles/Footer.Modules.css'
import { Nav, NavItem, NavLink } from "react-bootstrap";

function Footer(){
    return(
        <footer>
            <Nav className="footer-nav" style={{display:"flex", justifyContent:"space-between", marginLeft: "10px"}}>
                <NavItem style={{margin: "5px"}}>
                    copyright&copy; Nome do site 2023
                </NavItem>
                <NavItem style={{margin: "5px"}}>
                    <u>Termos de Uso</u>
                </NavItem>
                <NavItem style={{margin: "5px"}}>
                    <u>Politicas de Privacidade</u>
                </NavItem>
            </Nav>
        </footer>
    )
}
export default Footer