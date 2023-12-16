import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavLinkActive } from "react-bootstrap";

function NavBar(props) {

    return (
        <Navbar className="container-fluid" style={{ backgroundColor: "#2779a7" }} fixed="top">
          <NavLink href="/" style={{marginLeft: "10px" }}>
            Olá, {props.nome}
          </NavLink>
          <Nav className="nav justifycontentend">
            <NavItem>
                <NavLink href="/sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contato">Contato</NavLink>
            </NavItem>
            <NavItem active>
                <NavLink href="/quiz">Quiz</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
}

export default NavBar;