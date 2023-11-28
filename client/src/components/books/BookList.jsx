import classes from "./styles/BookList.module.css";
import { Book } from "../";

const BookList = ({ books }) => {

	return (
		<div className={classes.container}>
			<div className={classes.desktop}>
				{
					books.map((book, index) =>
						<Book key={index} {...book} />
					)
				}
			</div>
			<div className={classes.mobile}>
				{
					books.map((book, index) =>
						<Book key={index} {...book} />
					)
				}
			</div>
		</div>
	);
};

export default BookList;