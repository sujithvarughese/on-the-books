import classes from "./styles/BookPage.module.css";
import { axiosDB } from "../utils/axios.js";
import {NavLink, useLoaderData} from "react-router-dom";
import {BookInfo, Notebook, NotebookContainer, BookCoverArt, BookDescription, BookRating, BookStatus, BookLinks, NotebookPreview} from "../components";
import {useEffect, useState} from "react";
import card from "../ui/Card.jsx";


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
	} = bookDetails

	const dates = Date.now()
	const currentDate = new Date(dates)
	const date = currentDate.toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })
	const time = currentDate.toLocaleTimeString("en-US")

	const [notebook, setNotebook] = useState([])

	// when user changes rating or status, the updated field is sent to back end as an object to update book in db
	const updateBookDetails = async (updatedField) => {
		try {
			console.log(updatedField);
			await axiosDB.patch(`/library/${_id}`, updatedField);
		} catch (error) {
			console.log(error);
		}
	}

	const createNote = async (newNote) => {
		// const { bookID, title, content } = newNote
		try {
			const response = await axiosDB.post("/notebook", newNote)
			console.log(response.data)
			const updatedNotebook = [...notebook]
			updatedNotebook.push(newNote)
			setNotebook(updatedNotebook)
		} catch (error) {
			throw new Error(error)
		}
	}

	const updateNote = async (updatedNote) => {
		try {
			const response = await axiosDB.patch("/notebook", updatedNote)
			console.log(response.data)
			const updatedNotebook = [...notebook]
			const noteIndex = updatedNotebook.findIndex(note => note.title === updateNote.title)
			updatedNotebook[noteIndex] = updatedNote
			setNotebook(updatedNotebook)
		} catch (error) {
			throw new Error(error)
		}
	}
	// scroll to top on load
	useEffect(() => {
		window.scrollTo(0, 0)
		const fetchNotebook = async () => {
			try {
				const response = await axiosDB(`/notebook${_id}`)
				const { notebook } = response.data
				setNotebook(notebook)
			} catch (error) {
				throw new Error(error)
			}
		}
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

			<NotebookPreview bookID={_id} recentNotes={notebook.slice(-3)} createNote={createNote} updateNote={updateNote}/>

			<NavLink
				to={{ pathname: `./notebook/${_id}`}}
				state={{ _id: bookID, notebook, createNote, updateNote }}
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