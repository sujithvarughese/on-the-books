import classes from "../../pages/styles/Discover.module.css";
import {BookCover} from "../index.js";

const SearchResults = ({ search, books }) => {
	return (
		<div className={classes.results}>
			{ books.length > 0 ? <h3 className={classes.text}>Results for: {search}</h3> : <h3>No Books with matching criteria found.</h3>}
			<div className={classes.bookContainer}>
				{
					books.map((book, index) =>
						<BookCover key={index} {...book} />
					)
				}
			</div>

		</div>
	);
};

export default SearchResults;