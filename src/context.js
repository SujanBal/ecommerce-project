import React, { useState, useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const item_url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const AppContext = React.createContext();

const initialState = {
	isLoading: true,
	searchitem: "",
	items: [],
	trending: [],
	cartitems: [],
	amount_in_cart: 0,
	total_price: 0,
};

const AppProvider = ({ children }) => {
	const [alldetails, dispatch] = useReducer(reducer, initialState);
	const searchHandler = (e) => {
		dispatch({ type: "searchitem", payload: e.target.value });
	};
	const searchFormHandler = (e) => {
		e.preventDefault();
		// dispatch({ type: "searchformhandle", payload: e.target.value });
	};
	useEffect(() => {
		async function fetchTrending() {
			const trendingitemsid = ["11690", "11009", "11008", "11003"];
			const responses = await Promise.all(
				trendingitemsid.map((m) => fetch(`${item_url}${m}`))
			);
			// const alltrendingitem = [];
			const a = responses.map(async (response) => {
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
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				} = data;

				const ingredients = [
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				];
				const cocktail = {
					id,
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients,
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
	// console.log(alldetails.trending);
	return (
		<AppContext.Provider
			value={{ ...alldetails, searchHandler, searchFormHandler }}
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
