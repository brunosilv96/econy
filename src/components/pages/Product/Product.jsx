import styles from "./Product.module.css";

function Product() {
	return (
		<section className="container-lg" id={styles.container}>
			<div className="row d-lg-none">
				<h1>Produto X</h1>
			</div>
			<div className="row">
				<div className="col-12 col-lg-8">
					<div className="row gx-lg-3">
						<div className="col-12 col-lg-10 order-lg-1 mb-1">
							<div id={styles.img_container}>
								<img src="https://via.placeholder.com/1000" alt="Descrição imagem" />
							</div>
						</div>
						<div className="col-lg-2 mb-2 mb-lg-0">
							<div
								className="row justify-content-center flex-lg-column align-items-center"
								id={styles.box_img}>
								<div className="col-2 col-lg-10 p-1 mb-1 me-2 me-lg-0">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-2 col-lg-10 p-1 mb-1 me-2 me-lg-0">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-2 col-lg-10 p-1 mb-1 me-2 me-lg-0">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-2 col-lg-10 p-1 mb-1 me-2 me-lg-0">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
								<div className="col-2 col-lg-10 p-1 mb-1 me-2 me-lg-0">
									<img src="https://via.placeholder.com/300" alt="Descrição imagem" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4" id={styles.product_values}>
					<div className="row">
						<div className="col-12 d-none d-lg-block">
							<h2>Produto X</h2>
						</div>
						<div className="row" id={styles.values_box}>
							<div className="col-12">
								<span id={styles.original_value}>
									<p>De R$ 1999,99</p>
								</span>
								<span id={styles.principal_value}>
									<p>Por R$ 599,99</p>
								</span>
								<span id={styles.parcel_value}>
									<p>
										Em até <strong>12 de R$ 49,99</strong> sem juros
									</p>
								</span>
							</div>
						</div>
						<div className="row mt-3" id={styles.espec_product}>
							<h4>Especificações</h4>
							<p>
								<strong>Cor: </strong>
								Azulzado
							</p>
						</div>
						<div className="row mt-3 justify-content-center">
							<div className="col-lg-10 d-grid gap-1">
								<button className="btn" id={styles.btn}>
									Comprar
								</button>
								<button className="btn" id={styles.btn_car}>
									Adicionar ao carrinho
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Product;
