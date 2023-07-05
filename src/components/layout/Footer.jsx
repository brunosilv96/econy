import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className="container-fluid position-relative bottom-0 start-50 translate-middle-x">
			<p className="secondary-color">Nos encontre nas redes sociais:</p>
			<div className="row justify-content-evenly justify-content-lg-center" id={styles.social_icons_container}>
				<div className="col-1">
					<a href="#">
						<i className="bi bi-facebook secondary-color"></i>
					</a>
				</div>
				<div className="col-1">
					<a href="#">
						<i className="bi bi-instagram secondary-color"></i>
					</a>
				</div>
				<div className="col-1">
					<a href="#">
						<i className="bi bi-twitter secondary-color"></i>
					</a>
				</div>
			</div>
			<p className="secondary-color">Papéis da Fran &copy; 2023</p>
		</footer>
	);
}

export default Footer;
