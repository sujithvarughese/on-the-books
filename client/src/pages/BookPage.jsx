import classes from "./styles/BookPage.module.css";
import { axiosDB } from "../utils/axios.js";
import { useLoaderData } from "react-router-dom";
import { BookInfo, Notebook, BookCoverArt, BookDescription, BookRating, BookStatus, BookLinks } from "../components";
import {useEffect} from "react";


const BookPage = () => {
	const bookDetails = useLoaderData()
	const {
		_id,
		title,
		author,
		coverID,
		description,
		yearPublished,
		infoURL,
		previewAvailable,
		previewURL,
		status,
		rating,
		notebook
	} = bookDetails

	// when user changes rating or status, the updated field is sent to back end as an object to update book in db
	const updateBookDetails = async (updatedField) => {
		try {
			console.log(updatedField);
			await axiosDB.patch(`/library/${_id}`, updatedField);
		} catch (error) {
			console.log(error);
		}
	}

	// scroll to top on load
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

	return (
		<div className={classes.container}>
			<div className={classes.cover}>
				<BookCoverArt coverID={coverID} alt={title}/>
			</div>

			<BookLinks infoURL={infoURL} previewAvailable={previewAvailable} previewURL={previewURL} />

			<div className={classes.content}>
				<BookInfo title={title} author={author} yearPublished={yearPublished} status={status} rating={rating} updateBookDetails={updateBookDetails}/>
				<div className={classes.statusRating}>
					<BookStatus status={status} updateBookDetails={updateBookDetails} />
					<BookRating rating={rating} updateBookDetails={updateBookDetails}/>
				</div>
				<div className={classes.description}>
					<BookDescription description={description} />
				</div>

			</div>

			<Notebook
				bookID={_id}
				notebook={notebook}
				updateBookDetails={updateBookDetails}
			/>
		</div>
	)


};

export default BookPage;

export const bookDetailsLoader = async ({ params }) => {
	try {
		const response = await axiosDB(`/library/${params.id}`)
		const { bookDetails } = response.data
		console.log(bookDetails);
		return bookDetails
	} catch (error) {
		throw new Error(error)
	}
}