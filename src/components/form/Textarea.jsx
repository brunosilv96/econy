import styles from "./Input.module.css";

function Textarea({ text, name, placeholder, handleOnChange, value, classis }) {
	return (
		<div className={`mb-3 ${classis}`} id={styles.input_container}>
			<label className="form-label" htmlFor={name}>
				{text}
			</label>
			<textarea
				name={name}
				id={name}
				className="form-control"
				placeholder={placeholder}
				onChange={handleOnChange}
				rows="5">
				{value}
			</textarea>
		</div>
	);
}

export default Textarea;
