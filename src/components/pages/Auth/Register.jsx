import Input from "../../form/Input";
import styles from "./Register.module.css";

function Register() {
	function handleChange() {}
	function handleSubmit() {}
	return (
		<section className="container mt-3">
			<div className="row justify-content-center">
				<div className="col-md-8" id={styles.login_container}>
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
							classis="col-md-6"
							handleOnChange={handleChange}
							placeholder="Informe o seu CPF"
						/>
						<Input
							type="tel"
							text="Telefone"
							name="phone"
							classis="col-md-6"
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
							classis="col-md-6"
							handleOnChange={handleChange}
							placeholder="Informe a sua senha"
						/>
						<Input
							type="password"
							text="Confirmação"
							name="confPassword"
							classis="col-md-6"
							handleOnChange={handleChange}
							placeholder="Confirme a senha"
						/>
						<h3>Informe o seu endereço:</h3>
						<Input
							type="text"
							text="CEP"
							name="passcode"
							classis="col-md-4"
							handleOnChange={handleChange}
							placeholder="Informe o CEP"
						/>
						<Input
							type="text"
							text="Endereço"
							name="adress"
							classis="col-md-10"
							handleOnChange={handleChange}
							placeholder="Informe o seu endereço"
						/>
						<Input
							type="text"
							text="Nº"
							name="number"
							classis="col-md-2"
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
							classis="col-md-5"
							handleOnChange={handleChange}
							placeholder="Informe o seu bairro"
						/>
						<Input
							type="text"
							text="Cidade"
							name="city"
							classis="col-md-5"
							handleOnChange={handleChange}
							placeholder="Informe a sua cidade"
						/>
						<Input
							type="text"
							text="Estado"
							name="state"
							classis="col-md-2"
							handleOnChange={handleChange}
							placeholder="UF"
						/>
						<button className="btn btn-primary" type="submit">
							Cadastrar
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Register;
