import Input from "./Input";
import Textarea from "./Textarea";
import CheckboxAndRadio from "./CheckboxAndRadio";
import Button from "./Button";
import { useState } from "react";

import styles from "./ProductForm.module.css";

function ProductForm({ handleSubmit, productData, btnText }) {
	const [product, setProduct] = useState(productData || {});
	const [preview, setPreview] = useState([]);

	function handleChange(e) {
		setPet({ ...product, [e.target.name]: e.target.value });
	}
	function onFileChange(e) {
		setPreview(Array.from(e.target.files));
		setProduct({ ...product, images: [...e.target.files] });
	}

	const submit = (e) => {
		e.preventDefault();
		handleSubmit(product);
	};

	return (
		<form className="row mt-4" onSubmit={submit}>
			<Input
				type="text"
				text="Produto"
				name="product"
				value={product.product}
				handleOnChange={handleChange}
				placeholder="Descrição principal do produto"
			/>
			<Textarea
				text="Descrição Completa"
				name="description"
				value={product.description}
				placeholder="Informe uma descrição para o produto"
				onChange={handleChange}
			/>
			<Input
				type="number"
				text="QTD em estoque"
				name="qtd"
				value={product.qtd}
				handleOnChange={handleChange}
				placeholder="Nº"
				classis="col-lg-4"
			/>
			<Input
				type="number"
				text="Valor de"
				name="valueD"
				value={product.valueD}
				handleOnChange={handleChange}
				placeholder="R$"
				classis="col-lg-4 col-6"
			/>
			<Input
				type="number"
				text="Valor por"
				name="valueP"
				value={product.valueP}
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
			<div className="row text-center mb-3">
				{preview.length > 0
					? preview.map((image, index) => (
							<div className="col mb-3" id={styles.preview_img_box}>
								<img
									src={URL.createObjectURL(image)}
									alt={product.product}
									key={`${product.product}+${index}`}
								/>
							</div>
					  ))
					: product.images &&
					  product.images.map((image, index) => (
							<div className="col" id={styles.preview_img_box}>
								<img
									src={`${process.env.BACKEND_APP_API}/images/products/${image}`}
									alt={product.product}
									key={`${product.product}+${index}`}
								/>
							</div>
					  ))}
			</div>
			<Button type="submit" text={btnText} />
		</form>
	);
}

export default ProductForm;
