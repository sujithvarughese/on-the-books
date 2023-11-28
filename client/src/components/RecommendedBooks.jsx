import classes from "./styles/RecommendedBooks.module.css"
import { Book } from "./";

const RecommendedBooks = ({ books }) => {

	return (
		<div className={classes.recommended}>
			<h3 className={classes.text}>Editors Picks: </h3>
			{
				books.map((book, index) =>
					<Book key={index} {...book} />
				)
			}
		</div>
	);
};

export default RecommendedBooks;