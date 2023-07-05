import styles from "./Container.module.css";
import CategoryBar from "./CategoryBar";

function Container({ children }) {
	return (
		<main>
			<CategoryBar />
			<section className="container-lg p-2" id={styles.container}>
				{children}
			</section>
		</main>
	);
}

export default Container;
