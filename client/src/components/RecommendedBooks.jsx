import classes from "./styles/RecommendedBooks.module.css"
import { BookList } from "./";

const RecommendedBooks = ({ books }) => {

	return (
		<div className={classes.recommended}>
			<h3 className={classes.text}>Editors Picks: </h3>
			<BookList books={books} />
		</div>
	);
};

export default RecommendedBooks;