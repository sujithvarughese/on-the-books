import classes from "./styles/MyLibrary.module.css";
import { axiosDB } from "../utils/axios.js";
import { useLoaderData } from "react-router-dom";
import { BookList } from "../components"

const MyLibrary = () => {
	const books = useLoaderData()

	return (
		<div>
			<BookList books={books} />
		</div>
	);
};

export const myLibraryLoader = async () => {
	try {
		const response = await axiosDB("/library")
		const { library } = response.data
		console.log(library);
		return library
	} catch (error) {
		throw new Error(error)
	}
}

export default MyLibrary;