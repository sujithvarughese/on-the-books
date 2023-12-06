import classes from "./styles/BookCoverArt.module.css";

const BookCoverArt = ({ coverID, title }) => {

    const coverImageLink = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`

    return (
        <div className={classes.coverContainer}>
            <img className={classes.coverImage} src={coverImageLink} alt={title}/>
        </div>
    );
};

export default BookCoverArt;