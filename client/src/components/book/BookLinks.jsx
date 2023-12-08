import classes from "./styles/BookLinks.module.css";
const BookLinks = ({ infoURL, previewAvailable, previewURL }) => {


    return (
        <div className={classes.urls}>
            {
                previewAvailable !== "noview" &&
                <a href={previewURL} className={classes.link} target="_blank" rel="noreferrer">
                    Preview
                </a>
            }
            <a href={infoURL} className={classes.link} target="_blank" rel="noreferrer">
                More Info
            </a>
        </div>
    );
};

export default BookLinks;