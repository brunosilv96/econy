import styles from "./Navbar.module.css";
import { Navbar as Bnavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<Bnavbar expand="md" sticky="top" className="bg-body-tertiary">
			<Container>
				<Bnavbar.Brand>
					<Link to="/">Econy</Link>
				</Bnavbar.Brand>
				<Bnavbar.Toggle aria-controls="basic-navbar-nav" />
				<Bnavbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/">
							<Nav.Link>Home</Nav.Link>
						</Link>
						<Nav.Link>Link</Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown title="Perfil" id="navbarScrollingDropdown">
							<NavDropdown.Item>Sua PágIna</NavDropdown.Item>
							<NavDropdown.Item>Pedidos</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Bnavbar.Collapse>
			</Container>
		</Bnavbar>
	);
}

export default Navbar;
