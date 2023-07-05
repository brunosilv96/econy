import styles from "./Input.module.css";

function CheckboxAndRadio({ type, text, name, handleOnChange, value, classis }) {
	return (
		<div className={`mb-3 ${classis}`} id={styles.input_container}>
			<div className="form-check">
				<input
					type={type}
					name={name}
					id={name}
					className="form-check-input"
					onChange={handleOnChange}
					value={value}
				/>
				<label className="form-check-label ms-2" htmlFor={name}>
					{text}
				</label>
			</div>
		</div>
	);
}

export default CheckboxAndRadio;
