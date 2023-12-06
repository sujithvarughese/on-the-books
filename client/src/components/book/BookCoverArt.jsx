import classes from "./styles/BookCoverArt.module.css";

const BookCoverArt = ({ coverImageLink, title }) => {
    return (
        <div className={classes.coverContainer}>
            <img className={classes.coverImage} src={coverImageLink} alt={title}/>
        </div>
    );
};

export default BookCoverArt;