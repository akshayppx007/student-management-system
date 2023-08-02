import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, CLEAR_ERRORS } from "../constants/userConstants";
import { useLoaderData } from "react-router-dom";

let API = "http://localhost:8000"

// login user
export const loginUsers = (userData) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		};

		const { data } = await axios.post(
			`${API}/api/v1/login`,userData ,config); 

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.message,
		});
	}
};

// logout user
export const logoutUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOGOUT_REQUEST });

		await axios.get(`/api/v1/logout`);

		dispatch({
			type: LOGOUT_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL,
			payload: error.response.data.message,
		});
	}
};

// register user
export const registerUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: REGISTER_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		};

		const { data } = await axios.post(`${API}/api/v1/register`, userData, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get user Profile
export const getUserProfile = () => async (dispatch) => {
	try {
		dispatch({ type: USER_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/user/me`);

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// clear errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};

