import classes from "./styles/BookInfo.module.css";
import {Select} from "../../ui/index.js";
import {
    BookRating,
    BookStatus
} from "../index.js";

const BookInfo = ({ title, author, yearPublished, status, rating, updateBookDetails }) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{title}</h2>
            <h3 className={classes.author}>{author}</h3>
            <h4 className={classes.year}>{yearPublished}</h4>

            <div className={classes.statusRating}>
                <BookStatus status={status} updateBookDetails={updateBookDetails} />
                <BookRating rating={rating} updateBookDetails={updateBookDetails}/>
            </div>

        </div>
    );
};

export default BookInfo;