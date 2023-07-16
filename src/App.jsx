import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Home from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import React from "react";

const queryClient = new QueryClient();

console.log("queryClient", queryClient);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<React.Fragment>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/super-heroes">Traditional Super Heroes</Link>
							</li>
							<li>
								<Link to="/rq-super-heroes">RQ Super Heroes</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/super-heroes" element={<SuperHeroesPage />} />
						<Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</React.Fragment>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;
