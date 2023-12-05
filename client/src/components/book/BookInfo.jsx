import classes from "../../pages/styles/Book.module.css";

const BookInfo = ({ coverImageLink }) => {
    return (
        <div className={classes.coverContainer}>
            <img className={classes.coverImage} src={coverImageLink} alt=""/>
        </div>
    );
};

export default BookInfo;