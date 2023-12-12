import classes from "./styles/Discover.module.css";
import { axiosAPI } from "../utils/axios.js"
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SearchBar, SearchResults } from "../components";

const Discover = () => {
	const recommendedBooks = useLoaderData()
	const [searchResults, setSearchResults] = useState([])
	const [search, setSearch] = useState("")
	const [buttonText, setButtonText] = useState("Search")
	const searchBooks = async (searchString) => {
		try {
			setButtonText("Searching...")
			const response = await axiosAPI(`/subjects/${searchString}.json?limit=36`)
			const { works } = response.data
			const books = works.map(work => {
				return {
					title: work.title,
					author: work.authors[0]?.name,
					coverID: work.cover_id,
					OLID: work.key.substring(7),
					coverEditionKey: work.cover_edition_key,
					yearPublished: work.first_publish_year,
				}
			})
			setButtonText("Search")
			setSearchResults(books)
		} catch (error) {
			setButtonText("Search")
			throw new Error(error)
		}

	}

	return (
		<div className={classes.container}>
			{/* search bar */}
			<div className={classes.search}>
				<SearchBar setSearch={setSearch} searchBooks={searchBooks} buttonText={buttonText}/>
			</div>

			{/* Show search results(if any) on top, then editor's picks(change later to make more dynamic and user-friendly) */}
			<div className={classes.contents}>
				{searchResults.length > 0 && <SearchResults search={search} books={searchResults} />}
				<SearchResults search={"Editor's Picks"} books={recommendedBooks} />
			</div>
		</div>
	);
};

export const discoverLoader = async () => {

	try {
		const response = await axiosAPI("/subjects/open_library_staff_picks.json")
		const { works } = response.data

		// array containing book objects with basic info
		const books = works.map(work => {
			return {
				title: work.title,
				author: work.authors[0]?.name,
				coverID: work.cover_id,
				OLID: work.key.substring(7),
				coverEditionKey: work.cover_edition_key,
				yearPublished: work.first_publish_year,
			}
		})
		return books
	} catch (error) {
		throw new Error(error)
	}
}



export default Discover;