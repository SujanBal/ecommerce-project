import React, { useRef, useEffect } from "react";
import "./Nav.css";
import useDefaultContext from "../../context";
import { Link } from "react-router-dom";

export default function Nav() {
	const {
		// searchitem,
		total_price,
		searchHandler,
		searchFormHandler,
	} = useDefaultContext();
	const searchref = useRef("");
	useEffect((e) => {
		searchref.current.focus();
	}, []);
	const searchrefhHandler = (e) => {
		searchHandler(e.target.value);
	};
	// const [showsearch, setshowsearch] = useState(false)
	return (
		<nav className="header-bottom ">
			<div className="header-bottom-top">
				<div className="header-bottom-top-container">
					<div className="header-logo">
						<h1>
							<Link to="/">
								<span className="header-log-s">S</span>-Cocktail
							</Link>
						</h1>
					</div>
					<div className="header-form">
						<form onSubmit={searchFormHandler}>
							<input
								type="text"
								placeholder="Search for drinks"
								ref={searchref}
								onChange={searchrefhHandler}
							/>
							<Link to="/shop">
								<button type="submit">
									<i class="fas fa-search search-icon"></i>
								</button>
							</Link>
						</form>
					</div>
					<div className="responsive-search">
						<i class="far fa-times close-icon"></i>
						<form
							className="responsive-form-container"
							onSubmit={searchFormHandler}
						>
							<input
								type="text"
								placeholder="Search for drinks"
								ref={searchref}
								onChange={searchHandler}
							/>
							<Link to="/shop">
								<button type="submit">
									<i class="fas fa-search search-icon"></i>
								</button>
							</Link>
						</form>
					</div>

					<div className=" cart-button">
						<Link to="/mycart" className="cart-button-link ">
							<i class="fal fa-shopping-cart cart-icon"></i>$
							{total_price.toFixed(2)}
						</Link>
					</div>
				</div>
			</div>
			<div className="navigation">
				<div className="navigation-container">
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/contacts">Contacts</Link>
				</div>
			</div>
		</nav>
	);
}
