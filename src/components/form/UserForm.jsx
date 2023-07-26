import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function UserForm({ handleSubmit, userData, btnText }) {
	const [user, setUser] = useState(userData || {});

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	const submit = (e) => {
		e.preventDefault();
		handleSubmit(user);
	};

	// Mascaras de input
	function maskCpf(cpf) {
		cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
		return cpf;
	}
	function maskPhone(phone) {
		phone = phone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
		return phone;
	}
	function maskCep(cep) {
		cep = cep.replace(/^(\d{5})(\d{3})/, "$1-$2");
		return cep;
	}
	return (
		<form onSubmit={submit} className="row">
			<h3>Informe os seus dados:</h3>
			<Input type="text" text="Nome" name="name" handleOnChange={handleChange} placeholder="Informe o seu nome" />
			<Input
				type="text"
				text="CPF"
				name="cpf"
				value={user.cpf ? maskCpf(user.cpf) : ""}
				maxLength="14"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Informe o seu CPF"
			/>
			<Input
				type="tel"
				text="Telefone"
				name="phone"
				value={user.phone ? maskPhone(user.phone) : ""}
				maxLength="15"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Informe o seu telefone"
			/>
			<Input
				type="email"
				text="E-mail"
				name="email"
				value={user.email}
				placeholder="Informe o seu e-mail"
				handleOnChange={handleChange}
			/>
			<Input
				type="password"
				text="Senha"
				name="password"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Informe a sua senha"
			/>
			<Input
				type="password"
				text="Confirmação"
				name="newPassword"
				classis="col-lg-6"
				handleOnChange={handleChange}
				placeholder="Confirme a senha"
			/>
			<Button text={btnText} type="submit" />
		</form>
	);
}

export default UserForm;
