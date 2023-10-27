import classes from "./styles/Library.module.css";
import { BookList } from "./";

const Library = ({ books }) => {
	return (
		<div>
			<BookList books={books} />
		</div>
	);
};

export default Library;