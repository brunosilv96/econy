import styles from "./Container.module.css";

function Container({ children }) {
	return (
		<main>
			<section className="container-fluid pt-2" id={styles.container}>
				{children}
			</section>
		</main>
	);
}

export default Container;
