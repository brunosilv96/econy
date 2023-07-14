import styles from "./Product.module.css";

function Product() {
	return (
		<section className="container-lg" id={styles.container}>
			<div className="row">
				<h1>Produto X</h1>
			</div>
			<div className="row">
				<div className="col-12 col-lg-9">
					<div className="row gx-lg-3">
						<div className="col-12 col-lg-10 order-lg-1">
							<figure id={styles.img_container}>
								<img src="https://via.placeholder.com/1000" alt="Descrição imagem" />
							</figure>
						</div>
						<div className="col-lg-2">
							<div className="row justify-content-lg-center justify-content-around" id={styles.box_img}>
								<div className="col-4 col-lg-10 p-1 mb-1">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-4 col-lg-10 p-1 mb-1">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-4 col-lg-10 p-1 mb-1">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-4 col-lg-10 p-1 mb-1">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-4 col-lg-10 p-1 mb-1">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-3" id={styles.product_values}>
					<p>Aqui vai os dados do produto</p>
				</div>
			</div>
		</section>
	);
}

export default Product;
