import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<nav className="navbar sticky-top navbar-expand-sm bg-body-tertiary">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img
							src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
							alt="Econy"
							width="30"
							height="24"
							className="me-2"
						/>
						Econy
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-evenly col-9" id="navbarSupportedContent">
						<div className="col-12 col-sm-5 mt-2 mt-sm-0" id={styles.formNav}>
							<div className="input-group flex-nowrap">
								<span class="input-group-text" id="addon-wrapping">
									<i className="bi bi-search"></i>
								</span>
								<input className="form-control" type="search" placeholder="Pesquisar" aria-label="Search" />
							</div>
						</div>
						<div className="row justify-content-between mt-2 mt-sm-0" id={styles.marketIcons}>
							<Link to="/carlist" className="btn col">
								<i className="bi bi-cart3"></i>
							</Link>
							<Link to="/favorits" className="btn col">
								<i className="bi bi-heart"></i>
							</Link>
						</div>
						<li className="navbar-nav dropdown" id={styles.btnUser}>
							<a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
									<Link to="/perfil" className="dropdown-item">
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
			<ul className="nav justify-content-center" id={styles.subnav}>
				<li className="nav-item">
					<a className="nav-link" aria-current="page" href="#">
						Categoria 1
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Categoria 2
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Categoria 3
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link">Categoria 4</a>
				</li>
			</ul>
		</header>
	);
}

export default Navbar;
