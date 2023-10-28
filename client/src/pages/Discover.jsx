import classes from "./styles/Discover.module.css";
import { axiosAPI } from "../utils/axios.js"
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SearchBar, SearchResults, RecommendedBooks } from "../components";

const Discover = () => {
	const recommendedBooks = useLoaderData()

	const [searchResults, setSearchResults] = useState([])

	const searchBooks = async (searchString) => {
		try {
			const response = await axiosAPI(`/subjects/${searchString}.json?limit=36`)
			const { works } = response.data
			const books = works.map(work => {
				return {
					title: work.title,
					author: work.authors[0]?.name,
					coverID: work.cover_id,
					coverEditionKey: work.cover_edition_key,
					yearPublished: work.first_publish_year,
				}
			})
			setSearchResults(books)
		} catch (error) {
			throw new Error(error)
		}

	}

	return (
		<div className={classes.discover}>

			<div className={classes.searchbar}>
				<SearchBar searchBooks={searchBooks} />
			</div>

			{searchResults.length > 0 && <SearchResults books={searchResults} />}

			<div className={classes.recommended}>
				<RecommendedBooks books={recommendedBooks} />
			</div>




		</div>
	);
};

export const discoverLoader = async () => {

	try {
		const response = await axiosAPI("/subjects/Open_Library_Staff_Picks.json")
		const { works } = response.data

		// array containing book objects with basic info
		const books = works.map(work => {
			return {
				title: work.title,
				author: work.authors[0]?.name,
				coverID: work.cover_id,
				coverEditionKey: work.cover_edition_key,
				yearPublished: work.first_publish_year,
			}
		})
		return books
	} catch (error) {
		throw new Error(error)
	}
	// getting additional book info when each book is clicked instead of when loading all results
/*
	let updatedBooks = []
	// second API call to add preview information into each book object
	try {
		// use for loop as using map() would return a promise to loader
		for (let i = 0; i < books.length; i++) {
			const previewResponse = await axiosAPI(`/api/books?bibkeys=OLID:${books[i].coverEditionKey}&format=json`)
			const info = previewResponse.data[`OLID:${books[i].coverEditionKey}`];

			// info_url -> link to more info
			// preview -> value will be "noview" if preview is not available
			// previewURL -> link to preview
			const { info_url, preview, preview_url } = info;


			// destructure and return each book with additional preview info
			const updatedBook = {
				...books[i],
				infoURL: info_url,
				previewAvailable: preview,
				previewURL: preview_url
			}
			updatedBooks.push(updatedBook)
		}
		console.log(updatedBooks);
		return updatedBooks

	} catch (error) {
		throw new Error(error)
	}*/
}

export default Discover;