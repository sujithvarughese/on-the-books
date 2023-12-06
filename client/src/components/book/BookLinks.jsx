import classes from "./styles/BookLinks.module.css";
const BookLinks = ({ infoURL, previewAvailable, previewURL }) => {


    return (
        <div className={classes.urls}>
            <a href={infoURL} className={classes.link} target="_blank" rel="noreferrer">
                More Info
            </a>

            {
                previewAvailable !== "noview" &&
                <a href={previewURL} className={classes.link} target="_blank" rel="noreferrer">
                    Preview
                </a>
            }
        </div>
    );
};

export default BookLinks;