import styles from "./CategoryBar.module.css";

function CategoryBar() {
	return (
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
	);
}

export default CategoryBar;
