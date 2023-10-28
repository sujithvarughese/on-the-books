import classes from "./styles/MyLibrary.module.css";
import { axiosDB } from "../utils/axios.js";
import { useLoaderData } from "react-router-dom";
import { BookList } from "../components"

const MyLibrary = () => {
	const books = useLoaderData()

	return (
		<div>
			{  // display text if user library is empty, with link to Discover
				!books.length &&
				<div>
					<div className={classes.text}>
						You dont have any books in your library yet.
					</div>
					<div className={classes.textLink}>
						Browse books to start adding!
					</div>
				</div>
			}
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