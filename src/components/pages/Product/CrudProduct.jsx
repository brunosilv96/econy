import styles from "./CrudProduct.module.css";
import ProductForm from "../../form/ProductForm";

function CrudProduct() {
	function registerProduct(product) {
		console.log("Registro do Produto OK");
		console.log(product);
	}
	return (
		<section className="container-lg col-12 col-lg-10 mt-3" id={styles.container}>
			<h1>Editando Produto</h1>
			<h4>(Nome do Produto)</h4>
			<ProductForm btnText={"Atualizar"} productData={""} handleSubmit={registerProduct} />;
		</section>
	);
}

export default CrudProduct;
