import classes from "./styles/SearchResults.module.css";
import { BookList } from "./";

const SearchResults = ({ books }) => {
	return (
		<div className={classes.results}>
			{ books.length > 0 && <h3 className={classes.text}>Search Results</h3>}
			<BookList books={books} />
		</div>
	);
};

export default SearchResults;