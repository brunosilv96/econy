import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./components/pages/Home";
import Profile from "./components/pages/User/Profile";

import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Container from "./components/layout/Container";

function App() {
	return (
		<Router>
			<Navbar />
			<Container>
				<Routes>
					<Route path="/profile" element={<Profile />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
