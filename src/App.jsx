import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./components/pages/Home";

import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
