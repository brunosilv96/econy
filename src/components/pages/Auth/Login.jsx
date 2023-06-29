import Input from "../../form/Input";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
	function handleChange() {}
	function handleSubmit() {}
	return (
		<section className="container mt-3">
			<div className="row justify-content-center">
				<div className="col-sm-6" id={styles.login_container}>
					<h1 className="mb-3">Login</h1>
					<form onSubmit={handleSubmit}>
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
							placeholder="Informe a sua senha"
							handleOnChange={handleChange}
						/>
						<button className="btn btn-primary al-center" type="submit">
							Entrar
						</button>
						<div id={styles.register_container}>
							<p>Ainda não é cadastrado?</p>
							<p>
								<Link to="/register">Clique aqui!</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Login;
