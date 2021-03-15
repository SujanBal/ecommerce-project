import React, { useEffect, useReducer, useContext, useCallback } from "react";
import reducer from "./reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const item_url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const AppContext = React.createContext();

const initialState = {
	isLoading: true,
	searchitem: "",
	singleitem: {},
	items: [],
	trending: [],
	cartitems: [],
	amount_in_cart: 0,
	total_price: 0,
};

const AppProvider = ({ children }) => {
	const [alldetails, dispatch] = useReducer(reducer, initialState);
	const searchHandler = (searchitem) => {
		dispatch({ type: "searchitem", payload: searchitem });
	};
	const searchFormHandler = (e) => {
		e.preventDefault();
		dispatch({ type: "searchformhandle", payload: e.target.value });
	};
	const removesingleitem = () => {
		dispatch({ type: "removesingleitem" });
	};
	const ordernow = useCallback((id) => {
		dispatch({ type: "ordernow", payload: id, amount: 1 });
	}, []);
	const increasecart = (id) => {
		dispatch({ type: "increasecart", payload: id });
	};
	const decreasecart = (id) => {
		dispatch({ type: "decreasecart", payload: id });
	};
	const removecart = (id) => {
		dispatch({ type: "removecart", payload: id });
	};
	const clearallcart = () => {
		dispatch({ type: "clearallcart" });
	};

	useEffect(() => {
		async function fetchAll() {
			const response = await fetch(`${url}${alldetails.searchitem}`);
			const allitems = await response.json();

			const fetcheditems = allitems.drinks;
			if (fetcheditems) {
				const newitems = fetcheditems.map((item) => {
					const {
						idDrink: id,
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
					} = item;
					return { id, name, image, info, category, glass };
				});
				dispatch({ type: "fetchAll", payload: newitems });
			} else {
				dispatch({ type: "addemptylist" });
			}
		}
		fetchAll();
	}, [alldetails.searchitem]);
	useEffect(() => {
		async function fetchTrending() {
			const trendingitemsid = ["11690", "11009", "11008", "11003"];
			const responses = await Promise.all(
				trendingitemsid.map((m) => fetch(`${item_url}${m}`))
			);
			// const alltrendingitem = [];
			responses.map(async (response) => {
				const trendingitem = await response.json();
				// console.log(trendingitem);
				const data = trendingitem.drinks[0];
				// console.log(data);
				const {
					idDrink: id,
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
				} = data;

				const cocktail = {
					id,
					name,
					image,
					info,
					category,
					glass,
				};

				dispatch({ type: "fetchtrending", payload: cocktail, loading: true });
				// alltrendingitem.push(cocktail);
				// return alltrendingitem;
			});
			// console.log(alltrendingitem);
			// console.log(a);

			// setTimeout(() => {}, 2000);
		}
		fetchTrending();
	}, []);
	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: "setLoading" });
		}, 500);
	}, []);

	const fetchsingle = useCallback(async (productid) => {
		const response = await fetch(`${item_url}${productid}`);
		const item = await response.json();
		console.log(item.drinks[0]);
		const {
			idDrink: id,
			strDrink: name,
			strDrinkThumb: image,
			strAlcoholic: info,
			strCategory: category,
			strGlass: glass,
			strInstructions: instructions,
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
		} = item.drinks[0];

		const ingredients = [
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
		];
		const newcocktail = {
			id,
			name,
			image,
			info,
			category,
			glass,
			instructions,
			ingredients,
		};
		// console.log(newcocktail);
		dispatch({ type: "setsingleitem", payload: newcocktail });
		// dispatch({ type: "setLoading" });
	}, []);
	useEffect(() => {
		fetchsingle();
		// return
	}, [alldetails.singleitem, fetchsingle]);

	useEffect(() => {
		dispatch({ type: "gettotals" });
	}, [alldetails.cartitems]);
	// console.log(alldetails.trending);
	return (
		<AppContext.Provider
			value={{
				...alldetails,
				searchHandler,
				searchFormHandler,
				removesingleitem,
				fetchsingle,
				ordernow,
				increasecart,
				decreasecart,
				removecart,
				clearallcart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };

const useDefaultContext = () => {
	return useContext(AppContext);
};
export default useDefaultContext;
