import classes from "./styles/Book.module.css";
import { axiosDB } from "../utils/axios.js";
import {NavLink, useLoaderData} from "react-router-dom";
import {BookInfo, BookCoverArt, BookDescription, BookRating, BookStatus, BookLinks, Notebook } from "../components";
import {useEffect, useState} from "react";
import { motion } from "framer-motion"

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
		<motion.div className={classes.container}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
		>
			<div className={classes.coverContent}>
				<div className={classes.cover}>
					<BookCoverArt coverID={coverID} alt={title}/>
				</div>

				<div className={classes.content}>
					<div className={classes.info}>
						<div>
							<BookInfo title={title} author={author} yearPublished={yearPublished} />
							{/* OpenLibrary links to show book preview / link for book info */}
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

		</motion.div>
	)


};

export default Book;

export const bookDetailsLoader = async ({ params }) => {
	// get book details and notebook for book on load
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