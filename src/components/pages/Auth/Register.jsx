import Input from "../../form/Input";
import styles from "./Register.module.css";
import Button from "../../form/Button";
import { useState } from "react";

function Register() {
	const [user, setUser] = useState({});

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}
	function handleSubmit() {}

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
		<section className="container-lg mt-3">
			<div className="row justify-content-center">
				<div className="col-lg-8" id={styles.login_container}>
					<h1 className="mb-3">Cadastre-se</h1>
					<form onSubmit={handleSubmit} className="row">
						<h3>Informe os seus dados:</h3>
						<Input
							type="text"
							text="Nome"
							name="name"
							handleOnChange={handleChange}
							placeholder="Informe o seu nome"
						/>
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
							name="confPassword"
							classis="col-lg-6"
							handleOnChange={handleChange}
							placeholder="Confirme a senha"
						/>
						<h3>Informe o seu endereço:</h3>
						<Input
							type="text"
							text="CEP"
							name="passcode"
							value={user.passcode ? maskCep(user.passcode) : ""}
							maxLength="9"
							classis="col-lg-4"
							handleOnChange={handleChange}
							placeholder="Informe o CEP"
						/>
						<Input
							type="text"
							text="Endereço"
							name="adress"
							classis="col-lg-10"
							handleOnChange={handleChange}
							placeholder="Informe o seu endereço"
						/>
						<Input
							type="text"
							text="Nº"
							name="number"
							classis="col-lg-2"
							handleOnChange={handleChange}
							placeholder="Número"
						/>
						<Input
							type="text"
							text="Complemento"
							name="text"
							handleOnChange={handleChange}
							placeholder="Algum complemento?"
						/>
						<Input
							type="text"
							text="Bairro"
							name="neighborhood"
							classis="col-lg-5"
							handleOnChange={handleChange}
							placeholder="Informe o seu bairro"
						/>
						<Input
							type="text"
							text="Cidade"
							name="city"
							classis="col-lg-5"
							handleOnChange={handleChange}
							placeholder="Informe a sua cidade"
						/>
						<Input
							type="text"
							text="Estado"
							name="state"
							classis="col-lg-2"
							maxLength="2"
							handleOnChange={handleChange}
							placeholder="UF"
						/>
						<Button text="Cadastrar" type="submit" />
					</form>
				</div>
			</div>
		</section>
	);
}

export default Register;
