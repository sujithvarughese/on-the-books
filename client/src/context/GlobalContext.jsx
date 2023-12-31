import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer.js";
import { axiosDB } from "../utils/axios.js";

import {
	REGISTER_USER,
	LOGIN_USER,
	LOGOUT_USER,
	SET_IS_LOADING,
	SET_AUTH_STATE
} from "./actions.js";

const initialState = {
	user: null,
	myLibrary: [],
	book: null,
	isLoading: false,
	authState: ""
}

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	const register = async (credentials) => {
		try {
			const response = await axiosDB.post("/auth/register", credentials)
			// user = { userID: _id, isAdmin: isAdmin }
			const { user } = response.data
			dispatch({
				type: REGISTER_USER,
				payload: { user }
			})

		} catch (error) {
			console.log(error);
		}

	}
	const login = async (credentials) => {
		try {
			const response = await axiosDB.post("/auth/login", credentials)
			const { user } = response.data
			dispatch({
				type: LOGIN_USER,
				payload: { user }
			})
		} catch (error) {
			console.log(error);
		}
	}
	const logout = async () => {
		await axiosDB("/auth/logout");
		dispatch({ type: LOGOUT_USER });
	}

	const setIsLoading = (bool) => {
		dispatch({
			type: SET_IS_LOADING,
			payload: { isLoading: bool }
		})
	}

	const setAuthState = (authState) => {
		dispatch({
			type: SET_AUTH_STATE,
			payload: { authState: authState }
		})
	}

	return (
		<GlobalContext.Provider value={
			{
				...state,
				register,
				login,
				logout,
				setIsLoading,
				setAuthState
			}
		}>
			{ children }
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalProvider, useGlobalContext, initialState }