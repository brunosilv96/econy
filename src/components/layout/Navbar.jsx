import styles from "./Navbar.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<nav className="container-fluid" id={styles.nav_conainter}>
				<div className="row justify-content-around">
					<div className="col-sm-3">
						<p>Econy</p>
					</div>
					<div className="col-sm-6">
						<form className="d-flex">
							<input type="search" placeholder="Pesquisar" className="form-control" />
						</form>
					</div>
					<div className="col-sm-3" id={styles.nav_button}>
						<Dropdown>
							<Dropdown.Toggle id="dropdown-basic">Usuário</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>Perfil</Dropdown.Item>
								<Dropdown.Item>Pedidos</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</nav>
			<div className="nav justify-content-evenly" id={styles.subnav_container}>
				<Link className="nav-link">Categoria 1</Link>
				<Link className="nav-link">Categoria 1</Link>
				<Link className="nav-link">Categoria 1</Link>
				<Link className="nav-link">Categoria 1</Link>
				<Link className="nav-link">Categoria 1</Link>
				<Link className="nav-link">Categoria 1</Link>
				<Link className="nav-link">Categoria 1</Link>
				<Link className="nav-link">Categoria 1</Link>
			</div>
		</header>
	);
}

export default Navbar;
