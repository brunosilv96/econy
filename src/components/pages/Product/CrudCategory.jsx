import styles from "./CrudCategory.module.css";
import CategoryForm from "../../form/CategoryForm";

function CrudCategory() {
	function handleChange() {}
	function onFileChange() {}
	return (
		<section className="container-lg col-12 col-lg-10 mt-3" id={styles.container}>
			<h1>Nova Categoria</h1>
			<CategoryForm categoryData={""} btnText={"Cadastrar"} />
		</section>
	);
}

export default CrudCategory;
