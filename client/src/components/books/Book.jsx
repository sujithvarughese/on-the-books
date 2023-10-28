import classes from "./styles/Book.module.css"
import { axiosAPI, axiosDB } from "../../utils/axios.js";
import { NavLink } from "react-router-dom";
import { BookCard, Button } from "../../UI";
import { BookModal } from "../../components"
import { useState } from "react";

const Book = (book) => {

	const {
		_id,
		title,
		author,
		coverID,
		yearPublished,
		infoURL,
		previewAvailable,
		previewURL
	} = book;

	// make state value to add fields to book if user clicks and we need to show in modal
	const [currentBook, setCurrentBook] = useState(book)

	const coverImageLink = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`

	const [showModal, setShowModal] = useState(false)

	const showBookDetails = async () => {
		const coverEditionKey = book.coverEditionKey
		const previewResponse = await axiosAPI(`/api/books?bibkeys=OLID:${coverEditionKey}&format=json`)
		const info = previewResponse.data[`OLID:${coverEditionKey}`];

		// info_url -> link to more info
		// preview -> value will be "noview" if preview is not available
		// previewURL -> link to preview
		const { info_url, preview, preview_url } = info;

		// new book object with updated values to update state before we show info in modal
		const updatedBook = { ...currentBook, infoURL: info_url, previewAvailable: preview, previewURL: preview_url }
		setCurrentBook(updatedBook)
		setShowModal(true)
	}

	return (
		<div className={classes.book}>

			{
				showModal &&
				<BookModal
					book={currentBook}
					setShowModal={setShowModal}
				/>
			}
			<BookCard>
				{  // book.status field only exists in book in myLibrary
					book.status ?
						<NavLink
							to={`/library/${_id}`}
						>
							<img className={classes.cover} src={coverImageLink} alt={title}/>
						</NavLink>
						:
						<div>
							<img onClick={showBookDetails} className={classes.cover} src={coverImageLink} alt={title}/>
						</div>
				}


				<NavLink
					to={`/library/${_id}`}
				>
					<h2 className={classes.title}>{title}</h2>
				</NavLink>

				<div className={classes.author}>{author}</div>
				<div className={classes.year}>{yearPublished}</div>

			</BookCard>



		</div>
	);
};

export default Book;