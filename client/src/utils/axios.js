// axios
import axios from "axios";
import { config } from "./constants.js";

const axiosAPI = axios.create({
	baseURL: "https://openlibrary.org",
	withCredentials: false
});
// response
axiosAPI.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// console.log(error.response)
		return Promise.reject(error);
	}
);

const axiosDB = axios.create({
	baseURL: config.url.API_URL,
	withCredentials: true
});
// response
axiosDB.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// console.log(error.response)
		return Promise.reject(error);
	}
);

export { axiosAPI, axiosDB };
