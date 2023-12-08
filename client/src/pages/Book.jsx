import classes from "./styles/Book.module.css";
import { axiosDB } from "../utils/axios.js";
import {NavLink, useLoaderData} from "react-router-dom";
import {BookInfo, BookCoverArt, BookDescription, BookRating, BookStatus, BookLinks, Notebook } from "../components";
import {useEffect, useState} from "react";

const Book = () => {
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
							<BookRating rating={rating} updateBookDetails={updateBookDetails}/>
							<BookStatus status={status} updateBookDetails={updateBookDetails} />

						</div>
					</div>
					<div className={classes.description}>
						<BookDescription description={description} />
					</div>

				</div>
			</div>

			<Notebook notebook={notebook} book={_id}/>

		</div>
	)


};

export default Book;

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