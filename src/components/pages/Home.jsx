import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<section>
			<h1 className="ms-3">Conheça nossos produtos...</h1>
			<div className="row mt-3 justify-content-center">
				<div className="col-6 col-lg-2 card mb-2 pt-1 me-1">
					<img src="https://via.placeholder.com/300" className="card-img-top" alt="Descrição imagem" />
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/produto/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="col-6 col-lg-2 card mb-2 pt-1 me-1">
					<img src="https://via.placeholder.com/300" className="card-img-top" alt="Descrição imagem" />
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/produto/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="col-6 col-lg-2 card mb-2 pt-1 me-1">
					<img src="https://via.placeholder.com/300" className="card-img-top" alt="Descrição imagem" />
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/produto/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="col-6 col-lg-2 card mb-2 pt-1 me-1">
					<img src="https://via.placeholder.com/300" className="card-img-top" alt="Descrição imagem" />
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/produto/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="col-6 col-lg-2 card mb-2 pt-1 me-1">
					<img src="https://via.placeholder.com/300" className="card-img-top" alt="Descrição imagem" />
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/produto/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="col-6 col-lg-2 card mb-2 pt-1 me-1">
					<img src="https://via.placeholder.com/300" className="card-img-top" alt="Descrição imagem" />
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/produto/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="col-6 col-lg-2 card mb-2 pt-1 me-1">
					<img src="https://via.placeholder.com/300" className="card-img-top" alt="Descrição imagem" />
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/produto/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
