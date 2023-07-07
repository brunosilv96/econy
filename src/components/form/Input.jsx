import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value, multiple, classis, maxLength }) {
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
				maxLength={maxLength}
				value={value}
				{...(multiple ? { multiple } : "")}
			/>
		</div>
	);
}

export default Input;
