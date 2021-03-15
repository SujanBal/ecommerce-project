import React, { useEffect } from "react";
import useDefaultContext from "../../context";
import "./index.css";

export default function CartItemList() {
	const {
		amount_in_cart,
		// total_price,
		cartitems,
		decreasecart,
		increasecart,
		removecart,
		clearallcart,
	} = useDefaultContext();
	// const [amount, setamount] = useState(1);
	useEffect(() => {
		document.querySelector("#searchref").value = null;
	}, []);
	return (
		<section className="cartitemlist">
			<div className="cartitemlist-container">
				<div className="cartitemlist-amount">
					You have currently <span>{amount_in_cart}</span> items in cart
				</div>

				<div className="cartitems">
					{cartitems.map((cartitem) => {
						const {
							id,
							name,
							image,
							price,
							// category,
							// glass,
							amount,
						} = cartitem;
						return (
							<div key={id} className="cartitem">
								<div className="cartitem-image">
									<img src={image} alt={name} />
								</div>
								<div className="cartitem-info">
									<h3>{name}</h3>
									<h5>${price}</h5>
									<div className="removebutton-container">
										<button
											className="removebutton"
											onClick={() => {
												removecart(id);
											}}
										>
											Remove
										</button>
									</div>
								</div>
								<div className="changeamount">
									<i
										class="fas fa-chevron-up"
										onClick={() => {
											increasecart(id);
										}}
									></i>

									<h3>{amount}</h3>
									<i
										class="fas fa-chevron-down"
										onClick={() => {
											decreasecart(id);
										}}
									></i>
								</div>
							</div>
						);
					})}
				</div>
				{cartitems.length > 0 && (
					<div className="clearitems">
						<button onClick={clearallcart}>Clear My Cart</button>
					</div>
				)}
			</div>
		</section>
	);
}
