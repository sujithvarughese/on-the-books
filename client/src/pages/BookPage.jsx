import classes from "./styles/BookPage.module.css";
import { axiosDB } from "../utils/axios.js";
import {NavLink, useLoaderData} from "react-router-dom";
import {BookInfo, BookCoverArt, BookDescription, BookRating, BookStatus, BookLinks, Notebook } from "../components";
import {useEffect, useState} from "react";


const BookPage = () => {
	const { bookDetails, notebook } = useLoaderData()
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

	const [myNotebook, setMyNotebook] = useState(notebook)
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
			await axiosDB.post("/notebook", { ...newNote, book: _id })
			const updatedNotebook = [...myNotebook]
			updatedNotebook.push(newNote)
			console.log(updatedNotebook)
			setMyNotebook(updatedNotebook)
		} catch (error) {
			throw new Error(error)
		}
	}

	const updateNote = async (updatedNote) => {
		try {
			await axiosDB.patch("/notebook", updatedNote)
			const updatedNotebook = [...myNotebook]
			const noteIndex = updatedNotebook.findIndex(note => note.title === updateNote.title)
			updatedNotebook[noteIndex] = updatedNote
			setMyNotebook(updatedNotebook)
		} catch (error) {
			throw new Error(error)
		}
	}
	// scroll to top on load
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

	return (
		<div className={classes.container}>
			<div className={classes.coverContent}>
				<div className={classes.cover}>
					<BookCoverArt coverID={coverID} alt={title}/>
				</div>

				<div className={classes.content}>
					<div className={classes.info}>
						<div>
							<BookInfo title={title} author={author} yearPublished={yearPublished} status={status} rating={rating} updateBookDetails={updateBookDetails}/>
							<BookLinks infoURL={infoURL} previewAvailable={previewAvailable} previewURL={previewURL} />
						</div>
						<div className={classes.statusRating}>
							<BookStatus status={status} updateBookDetails={updateBookDetails} />
							<BookRating rating={rating} updateBookDetails={updateBookDetails}/>
						</div>
					</div>
					<div className={classes.description}>
						<BookDescription description={description} />
					</div>

				</div>
			</div>


			<Notebook notebook={myNotebook} createNote={createNote} updateNote={updateNote}/>



		</div>
	)


};

export default BookPage;

export const bookDetailsLoader = async ({ params }) => {
	try {
		const responseLib = await axiosDB(`/library/${params.id}`)
		const { bookDetails } = responseLib.data
		const responseNotebook = await axiosDB(`/notebook/${params.id}`)
		const { notebook } = responseNotebook.data
		return { bookDetails, notebook }
	} catch (error) {
		throw new Error(error)
	}
}