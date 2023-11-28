import classes from "./styles/SearchResults.module.css";
import { BookList } from "./";

const SearchResults = ({ search, books }) => {
	return (
		<div className={classes.results}>
			{ books.length > 0 ? <h3 className={classes.text}>Search Results: {search}</h3> : <h3>No Books with matching criteria found.</h3>}
			<BookList books={books} />
		</div>
	);
};

export default SearchResults;