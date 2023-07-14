import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

// pages
import Home from "./components/pages/Home";
import Profile from "./components/pages/User/Profile";
import NewProduct from "./components/pages/Product/NewProduct";
import EditProduct from "./components/pages/Product/EditProduct";
import NewCategory from "./components/pages/Product/NewCategory";
import EditCategory from "./components/pages/Product/EditCategory";
import Product from "./components/pages/Product/Product";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Container from "./components/layout/Container";
import Message from "./components/layout/Message";

function App() {
	return (
		<Router>
			<UserProvider>
				<Message />
				<Navbar />
				<Container>
					<Routes>
						<Route path="/product/:id" element={<Product />} />
						<Route path="/editcategory/:id" element={<EditCategory />} />
						<Route path="/newcategory" element={<NewCategory />} />
						<Route path="/editproduct/:id" element={<EditProduct />} />
						<Route path="/newproduct" element={<NewProduct />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</Container>
				<Footer />
			</UserProvider>
		</Router>
	);
}

export default App;
