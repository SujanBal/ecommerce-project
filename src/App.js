import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				{/* <Route path="/shop">Shop</Route>
				<Route path="/shop/:id">SingleItem</Route>
				<Route path="/contacts">Contacts</Route>
				<Route path="*">Error</Route> */}
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
