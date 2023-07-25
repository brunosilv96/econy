import { Link } from "react-router-dom";
import styles from "./CategoryBar.module.css";

function CategoryBar() {
	return (
		<ul className="nav justify-content-around" id={styles.subnav}>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Top Produtos
				</a>
			</li>
			<li className="navbar-nav dropdown">
				<a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Categorias
				</a>
				<ul className="dropdown-menu">
					<li>
						<Link to="/category/1" className="dropdown-item">
							Categoria 1
						</Link>
						<Link to="/category/2" className="dropdown-item">
							Categoria 2
						</Link>
						<Link to="/category/3" className="dropdown-item">
							Categoria 3
						</Link>
					</li>
				</ul>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Como funciona?
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Contato
				</a>
			</li>
			<div className="btn-floating d-flex flex-column z-1" id={styles.box_icons}>
				<button
					className="btn mb-2"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#canvasCarrinho"
					aria-controls="canvasCarrinho">
					<i className="bi bi-cart3"></i>
				</button>
				<button
					className="btn"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#canvasFavoritos"
					aria-controls="canvasFavoritos">
					<i className="bi bi-heart"></i>
				</button>
			</div>

			{/* Canvas - Carrinho */}
			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="canvasCarrinho"
				aria-labelledby="canvasCarrinhoLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="canvasCarrinhoLabel">
						Carrinho
					</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<div>
						Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
						images, lists, etc.
					</div>
					<div className="dropdown mt-3">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
							Dropdown button
						</button>
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Canvas - Favoritos */}
			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="canvasFavoritos"
				aria-labelledby="canvasFavoritosLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="canvasFavoritosLabel">
						Favoritos
					</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<div>
						Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
						images, lists, etc.
					</div>
					<div className="dropdown mt-3">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
							Dropdown button
						</button>
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</ul>
	);
}

export default CategoryBar;
