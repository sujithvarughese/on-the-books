import classes from "./styles/BookDetailsCard.module.css";

const BookDetailsCard = (props) => {
	return (
		<div className={classes.bookDetailsCard}>
			{ props.children }
		</div>
	);
};

export default BookDetailsCard;