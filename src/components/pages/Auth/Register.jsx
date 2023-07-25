import UserForm from "../../form/UserForm";
import styles from "./Register.module.css";
import { useContext } from "react";
import { Context } from "../../../context/UserContext";

function Register() {
	const { register } = useContext(Context);

	function registerUser(user) {
		console.log(user);
		register(user);
	}

	return (
		<section className="container-lg mt-3">
			<div className="row justify-content-center">
				<div className="col-lg-8" id={styles.login_container}>
					<h1 className="mb-3">Cadastre-se</h1>
					<UserForm userData={{ adress: {} }} btnText={"Cadastrar"} handleSubmit={registerUser} />
				</div>
			</div>
		</section>
	);
}

export default Register;
