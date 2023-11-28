import classes from "./styles/BookDetails.module.css";
import { axiosDB } from "../utils/axios.js";
import { useLoaderData } from "react-router-dom";
import { BookNotesList } from "../components";
import { Card, FormRow, Select } from "../ui";
import { useState } from "react";

const BookDetails = () => {
	const bookDetails = useLoaderData()
	const {
		_id,
		title,
		author,
		coverID,
		yearPublished,
		infoURL,
		previewAvailable,
		previewURL,
		status,
		rating,
		bookNotes
	} = bookDetails

	// values that user can change, updateBookDetails function will also change value accordingly in back-end
	const [statusState, setStatusState] = useState(status)
	const [ratingState, setRatingState] = useState(rating)

	const coverImageLink = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`

	// when user changes rating or status, the updated field is sent to back end as an object to update book in db
	const updateBookDetails = async (updatedField) => {
		try {
			console.log(updatedField);
			await axiosDB.patch(`/library/${_id}`, updatedField);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className={classes.container}>
			<Card>
					<div>
						<a href={infoURL} className={classes.link} target="_blank" rel="noreferrer">
							More Info
						</a>
					</div>

					<div className={classes.cover}>
						<img className={classes.coverImage} src={coverImageLink} alt={title}/>
					</div>

					<div>
						{
							previewAvailable !== "noview" ?
								<a href={previewURL} className={classes.link} target="_blank" rel="noreferrer">
									Preview
								</a>
								:
								<p>No Preview Available</p>
						}
					</div>
			</Card>



		<h2 className={classes.title}>{title}</h2>
		<h3 className={classes.author}>{author}</h3>
		<h4 className={classes.year}>{yearPublished}</h4>

		<div className={classes.statusRating}>
			<FormRow label="Status">
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
			</FormRow>

			<FormRow label="Rating">
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
			</FormRow>
		</div>

		<div>
			<BookNotesList
				bookID={_id}
				bookNotes={bookNotes}
				updateBookDetails={updateBookDetails}
			/>
		</div>
	</div>
	);
};

export default BookDetails;

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