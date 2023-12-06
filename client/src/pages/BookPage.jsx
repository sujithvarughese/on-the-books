import classes from "./styles/Book.module.css";
import { axiosDB } from "../utils/axios.js";
import { useLoaderData } from "react-router-dom";
import { BookInfo, Notebook, BookCoverArt, BookRating, BookStatus, BookLinks } from "../components";
import {Button, Card, FormRow, Select } from "../ui";
import {
	useEffect,
	useState
} from "react";
import ButtonPlain
	from "../ui/ButtonPlain.jsx";

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

	// values that user can change, updateBookDetails function will also change value accordingly in back-end
	const [statusState, setStatusState] = useState(status)
	const [ratingState, setRatingState] = useState(rating)
	const [seeMore, setSeeMore] = useState(false)

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
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
	return (
		<div className={classes.container}>

			<div className={classes.coverContainer}>

				<BookCoverArt coverImageLink={coverImageLink} alt={title}/>

			</div>

			<BookInfo title={title} author={author} yearPublished={yearPublished} status={status} rating={rating} updateBookDetails={updateBookDetails}/>
			<BookLinks infoURL={infoURL} previewAvailable={previewAvailable} previewURL={previewURL} />

			{
				description ?
					<div>
						{description}
						<ButtonPlain onClick={()=>setSeeMore(false)}>[See Less]</ButtonPlain>
					</div>
					:
					<div>
						{description?.substring(0, 250)} ...
						<ButtonPlain onClick={()=>setSeeMore(true)}>[See More]</ButtonPlain>
					</div>
			}


			<div>
				<Notebook
				bookID={_id}
				notebook={notebook}
				updateBookDetails={updateBookDetails}
			/>
		</div>
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