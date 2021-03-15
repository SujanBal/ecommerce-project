import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import SingleItem from "./components/SingleItem";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contacts from "./components/Contacts";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/shop">
					<Shop />
				</Route>
				<Route path="/products/:id">
					<SingleItem />
				</Route>
				<Route path="/mycart">
					<CartItem />
				</Route>
				<Route path="/contacts">
					<Contacts />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
