import styles from "./NewProduct.module.css";

import Input from "../../form/Input";
import Textarea from "../../form/Textarea";
import CheckboxAndRadio from "../../form/CheckboxAndRadio";
import Button from "../../form/Button";

function NewProduct() {
	function handleChange() {}
	function onFileChange() {}
	return (
		<section className="container-lg col-12 col-lg-10 mt-3" id={styles.container}>
			<h1>Novo Produto</h1>
			<form className="row">
				<Input
					type="text"
					text="Produto"
					name="product"
					handleOnChange={handleChange}
					placeholder="Descrição principal do produto"
				/>
				<Textarea
					text="Descrição Completa"
					name="description"
					placeholder="Informe uma descrição para o produto"
					onChange={handleChange}
				/>
				<Input
					type="number"
					text="QTD em estoque"
					name="qtd"
					handleOnChange={handleChange}
					placeholder="Nº"
					classis="col-lg-4"
				/>
				<Input
					type="number"
					text="Valor de"
					name="valueD"
					handleOnChange={handleChange}
					placeholder="R$"
					classis="col-lg-4 col-6"
				/>
				<Input
					type="number"
					text="Valor para"
					name="valueD"
					handleOnChange={handleChange}
					placeholder="R$"
					classis="col-lg-4 col-6"
				/>
				<Input
					type="file"
					text="Imagem(ns) do produto"
					name="images"
					handleOnChange={onFileChange}
					classis="col-12"
					multiple={true}
				/>
				<CheckboxAndRadio type="checkbox" name="active" text="Produto ativo?" handleOnChange={handleChange} />
				<Button type="submit" text="Salvar" />
			</form>
		</section>
	);
}

export default NewProduct;
