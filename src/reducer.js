const reducer = (state, action) => {
	if (action.type === "searchitem") {
		return { ...state, searchitem: action.payload };
	}
	if (action.type === "fetchAll") {
		return {
			...state,
			items: action.payload,
		};
	}
	if (action.type === "searchformhandle") {
		return {
			...state,
			searchitem: action.payload,
		};
	}
	if (action.type === "setsingleitem") {
		return { ...state, singleitem: action.payload };
	}
	if (action.type === "removesingleitem") {
		return { ...state, singleitem: {} };
	}

	if (action.type === "addemptylist") {
		return { ...state, items: [] };
	}
	if (action.type === "fetchtrending") {
		return {
			...state,
			trending: [...state.trending, action.payload],
			isLoading: action.loading,
		};
	}
	if (action.type === "setLoading") {
		return { ...state, isLoading: false };
	}
	if (action.type === "ordernow") {
		const newcartitems = state.items.find((item) => item.id === action.payload);

		const set = state.cartitems.find((item) => item.id === action.payload);

		if (set) {
			return { ...state, cartitems: [...state.cartitems] };
		} else {
			const newprice = parseInt(`${newcartitems.id}`.slice(0, 3), 10);
			return {
				...state,
				cartitems: [
					...state.cartitems,
					{ ...newcartitems, amount: 1, price: newprice },
				],
			};
		}
	}
	if (action.type === "increasecart") {
		let tempcart = state.cartitems.map((cartitem) => {
			if (cartitem.id === action.payload) {
				return { ...cartitem, amount: cartitem.amount + 1 };
			}
			return cartitem;
		});
		return { ...state, cartitems: tempcart };
	}
	if (action.type === "decreasecart") {
		let tempcart = state.cartitems
			.map((cartitem) => {
				if (cartitem.id === action.payload) {
					return { ...cartitem, amount: cartitem.amount - 1 };
				}
				return cartitem;
			})
			.filter((cartitem) => cartitem.amount !== 0);
		return { ...state, cartitems: tempcart };
	}
	if (action.type === "removecart") {
		return {
			...state,
			cartitems: state.cartitems.filter(
				(cartitem) => cartitem.id !== action.payload
			),
		};
	}
	if (action.type === "clearallcart") {
		return {
			...state,
			cartitems: [],
		};
	}
	if (action.type === "gettotals") {
		let { total, amount } = state.cartitems.reduce(
			(carttotal, cartitem) => {
				const { price, amount } = cartitem;
				const itemtotal = price * amount;

				carttotal.total += itemtotal;
				carttotal.amount += amount;
				return carttotal;
			},
			{ total: 0, amount: 0 }
		);
		total = parseFloat(total.toFixed(2));
		return { ...state, amount_in_cart: amount, total_price: total };
	}
	throw new Error("No Matching Action Type");
};
export default reducer;
