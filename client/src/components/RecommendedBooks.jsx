import classes from "../pages/styles/Discover.module.css";
import { Book } from "./";

const RecommendedBooks = ({ books }) => {

	return (
		<div className={classes.recommended}>
			<div className={classes.heading}>
				Editors Picks:
			</div>
			<div className={classes.bookContainer}>
				{
					books.map((book, index) =>
						<Book key={index} {...book} />
					)
				}
			</div>
		</div>
	);
};

export default RecommendedBooks;