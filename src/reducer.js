const reducer = (state, action) => {
	if (action.type === "searchitem") {
		return { ...state, searchitem: action.payload };
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
};
export default reducer;
