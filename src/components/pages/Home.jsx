import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<section className="container-fluid">
			<div className="row">
				<h1>Conheça nossos produtos...</h1>
			</div>
			<div className="row row-cols-lg-4 justify-content-lg-center">
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
				<div className="card col-6 col-lg-2 mb-2 me-lg-2" id={styles.card_container}>
					<div id={styles.card_img}>
						<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
					</div>
					<div className="card-body">
						<h5 className="card-title">Título do produto</h5>
						<p className="card-text">Descrição longa do produto X, que é muito bom!</p>
						<Link to="/product/:1" className={`btn btn-primary ${styles.btn_primary}`}>
							Detalhes
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
