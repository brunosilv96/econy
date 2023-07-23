import { Link } from "react-router-dom";
import styles from "./CategoryBar.module.css";

function CategoryBar() {
	return (
		<ul className="nav justify-content-center" id={styles.subnav}>
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
				<a className="nav-link">Contato</a>
			</li>
		</ul>
	);
}

export default CategoryBar;
