import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./components/pages/Home";
import Profile from "./components/pages/User/Profile";
import NewProduct from "./components/pages/Product/NewProduct";
import NewCategory from "./components/pages/Product/NewCategory";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Container from "./components/layout/Container";

function App() {
	return (
		<Router>
			<Navbar />
			<Container>
				<Routes>
					<Route path="/newcategory" element={<NewCategory />} />
					<Route path="/newproduct" element={<NewProduct />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
