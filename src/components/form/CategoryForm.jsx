import Input from "./Input";
import Textarea from "./Textarea";
import CheckboxAndRadio from "./CheckboxAndRadio";
import Button from "./Button";
import { useState } from "react";

function CategoryForm({ handleSubmit, categoryData, btnText }) {
	const [category, setCategory] = useState(categoryData || {});

	function handleChange(e) {
		setCategory({ ...category, [e.target.name]: e.target.value });
	}

	const submit = (e) => {
		e.preventDefault();
		handleSubmit(category);
	};

	return (
		<form className="row" onSubmit={submit}>
			<Input
				type="text"
				text="Categoria"
				name="category"
				value={category.category}
				handleOnChange={handleChange}
				placeholder="Descrição principal da categoria"
			/>
			<Textarea
				text="Descrição Completa"
				name="description"
				value={category.description}
				placeholder="Informe uma descrição para a categoria"
				onChange={handleChange}
			/>
			<CheckboxAndRadio
				type="checkbox"
				name="active"
				text="Categoria ativa?"
				value={category.active}
				handleOnChange={handleChange}
			/>
			<Button type="submit" text={btnText} />
		</form>
	);
}

export default CategoryForm;
