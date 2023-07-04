import styles from "./Button.module.css";

function Button({ type, text }) {
	return (
		<button className="btn btn-primary" type={type} id={styles.btn}>
			{text}
		</button>
	);
}

export default Button;
