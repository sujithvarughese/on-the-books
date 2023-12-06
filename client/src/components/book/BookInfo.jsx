import classes from "../../pages/styles/Book.module.css";
import {Select} from "../../ui/index.js";

const BookInfo = ({ title, author, year, status, rating }) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{title}</h2>
            <h3 className={classes.author}>{author}</h3>
            <h4 className={classes.year}>{yearPublished}</h4>

            <div className={classes.statusRating}>
                <div className={classes.status}>
                    <div className={classes.label}>
                        Status
                    </div>
                    <Select
                        type="text"
                        name="content"
                        value={statusState}
                        onChange={(e) => {
                            updateBookDetails({ status: e.target.value })
                            setStatusState(e.target.value)
                        }}
                        list={["unread", "read", "reading"]}
                    />
                </div>

                <div className={classes.rating}>
                    <div className={classes.label}>
                        Rating
                    </div>
                    <Select
                        type="number"
                        name="rating"
                        value={ratingState}
                        onChange={(e) => {
                            updateBookDetails({ rating: Number(e.target.value) })
                            setRatingState(e.target.value)
                        }}
                        list={[0,1,2,3,4,5,6,7,8,9,10]}
                    />
                </div>
            </div>

        </div>
    );
};

export default BookInfo;