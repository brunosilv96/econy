import styles from "./EditCategory.module.css";

import Input from "../../form/Input";
import Textarea from "../../form/Textarea";
import CheckboxAndRadio from "../../form/CheckboxAndRadio";
import Button from "../../form/Button";

function EditCategory() {
	function handleChange() {}
	function onFileChange() {}
	return (
		<section className="container-lg col-12 col-lg-10 mt-3" id={styles.container}>
			<h1>Editando Categoria</h1>
			<h4>(Nome da Categoria)</h4>
			<form className="row mt-4">
				<Input
					type="text"
					text="Categoria"
					name="category"
					handleOnChange={handleChange}
					placeholder="Descrição principal da categoria"
				/>
				<Textarea
					text="Descrição Completa"
					name="description"
					placeholder="Informe uma descrição para a categoria"
					onChange={handleChange}
				/>
				<CheckboxAndRadio type="checkbox" name="active" text="Categoria ativa?" handleOnChange={handleChange} />
				<Button type="submit" text="Salvar" />
			</form>
		</section>
	);
}

export default EditCategory;
