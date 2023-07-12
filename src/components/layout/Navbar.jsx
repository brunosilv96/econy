import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import CategoryBar from "../layout/CategoryBar";

function Navbar() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid row justify-content-end">
					<div className="col-10 col-lg-2 text-center">
						<Link to="/" className="navbar-brand" id={styles.navbar_logo}>
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<button
						className="navbar-toggler mt-2 mt-lg-0 col-2"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-evenly col-12 col-lg-10"
						id="navbarSupportedContent">
						<div className="col-12 col-lg-7 mt-3 mt-lg-0" id={styles.formNav}>
							<div className="input-group flex-nowrap">
								<span className="input-group-text" id="addon-wrapping">
									<i className="bi bi-search"></i>
								</span>
								<input
									className="form-control"
									type="search"
									placeholder="Pesquisar"
									aria-label="Search"
								/>
							</div>
						</div>
						<div className="col-lg-3 mt-2 mt-lg-0">
							<div className="row justify-content-evenly" id={styles.marketIcons}>
								<Link to="/carlist" className="btn col-1 me-lg-3">
									<i className="bi bi-cart3"></i>
								</Link>
								<Link to="/favorits" className="btn col-1">
									<i className="bi bi-heart"></i>
								</Link>
							</div>
						</div>
						<li className="col-lg-2 navbar-nav dropdown text-center" id={styles.btnUser}>
							<a
								className="nav-link dropdown-toggle"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Nome do Usuário
							</a>
							<ul className="dropdown-menu">
								<li>
									<p className="dropdown-item">
										<strong>Olá Bruno</strong>
									</p>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link to="/login" className="dropdown-item">
										Login
									</Link>
								</li>
								<li>
									<Link to="/register" className="dropdown-item">
										Cadastrar-se
									</Link>
								</li>
								<li>
									<Link to="/profile" className="dropdown-item">
										Perfil
									</Link>
								</li>
								<li>
									<Link to="/pedidos" className="dropdown-item">
										Pedidos
									</Link>
								</li>
							</ul>
						</li>
					</div>
				</div>
			</nav>
			<nav>
				<CategoryBar />
			</nav>
		</header>
	);
}

export default Navbar;
