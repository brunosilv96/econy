import CategoryBar from "./CategoryBar";

function Container({ children }) {
	return (
		<main>
			<CategoryBar />
			<section className="container-lg p-2">{children}</section>
		</main>
	);
}

export default Container;
