import classes from "./styles/MyLibrary.module.css";
import { useState } from "react";
import { axiosDB } from "../utils/axios.js";
import { useLoaderData } from "react-router-dom";
import { BookCover, SearchLibrary } from "../components"

const MyLibrary = () => {
	const books = useLoaderData()

	// state for search function
	const [query, setQuery] = useState("")

	// -convert query to lower case and check if any part of the book title, author, and year
	const queriedBooks = books.filter(book => {
		return (
			book.title.toLowerCase().includes(query.toLowerCase())  ||
			book.author.toLowerCase().includes(query.toLowerCase()) ||
			book.yearPublished.includes(query)
		)
	})

	return (
		<div className={classes.container}>
			<div className={classes.search}>
				<SearchLibrary query={query} setQuery={setQuery} />
			</div>

			{  // display text if user library is empty, with link to Discover
				!books.length &&
				<div>
					<div className={classes.textContainer}>
						You dont have any books in your library yet.
					</div>
					<div className={classes.textLink}>
						Browse books to start adding!
					</div>
				</div>
			}
			<div className={classes.bookContainer}>
				{
					queriedBooks.map((book, index) =>
						<BookCover key={index} {...book} />
					)
				}
			</div>
		</div>
	);
};

export const myLibraryLoader = async () => {
	try {
		const response = await axiosDB("/library")
		const { library } = response.data
		return library
	} catch (error) {
		throw new Error(error)
	}
}

export default MyLibrary;