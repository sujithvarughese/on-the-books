import classes from "./styles/BookList.module.css";
import { Book } from "../";

const BookList = ({ books }) => {

	return (
		<div className={classes.bookList}>
			{
				books.map((book, index) =>
						<Book key={index} {...book} />
				)
			}
		</div>
	);
};

export default BookList;