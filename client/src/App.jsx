import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { logo } from "./assets";

const App = () => {
	return (
		<BrowserRouter>
			<header className="w-full h-[72px] flex justify-between items-center bg-slate-50 px-4 border border-b-slate-200">
				<Link to="/">
					<img src={logo} alt="logo" className="w-32" />
				</Link>
				<Link to="/create-post" className="font-inter font-base bg-teal-700 text-slate-50 px-4 py-[6px] rounded-full">
					Create
				</Link>
			</header>

			<main className="px-6 py-8 w-full bg-slate-100 min-h-[calc(100vh-72px)]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-post" element={<CreatePost />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;