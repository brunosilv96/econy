import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value, multiple, classis }) {
	return (
		<div className={`mb-3 ${classis}`} id={styles.input_container}>
			<label className="form-label" htmlFor={name}>
				{text}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				className="form-control"
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}
				{...(multiple ? { multiple } : "")}
			/>
		</div>
	);
}

export default Input;
