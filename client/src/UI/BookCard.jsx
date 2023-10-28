import classes from "./styles/BookCard.module.css";

const BookCard = (props) => {
	return (
		<div className={classes.bookCard}>
				{ props.children }
		</div>
	);
};

export default BookCard;