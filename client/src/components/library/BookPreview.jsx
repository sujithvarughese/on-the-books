import classes from "./styles/BookPreview.module.css"
import {Button, ButtonIcon, Modal} from "../../ui";
import {useState} from "react";
import { axiosDB } from "../../utils/axios.js";
import { IoClose } from "react-icons/io5";

import ButtonPlain
	from "../../ui/ButtonPlain.jsx";
import {BookCoverArt, BookDescription, BookInfo, BookLinks} from "../index.js";

// modal is used only for library in Discover (not in myLibrary)
const BookPreview = ({ book, setShowModal }) => {

	const {
		title,
		author,
		description,
		coverID,
		yearPublished,
		infoURL,
		previewAvailable,
		previewURL
	} = book;

	const coverImageLink = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`

	const [seeMore, setSeeMore] = useState(false)
	const [buttonText, setButtonText] = useState("Add to Library")

	const addToLibrary = async () => {
		// create new book document in data (adding additional fields with default values to match fields in document)
		try {
			const response = await axiosDB.post("/library", {
				...book,
				status: "unread",
				rating: 0,
				bookNotes: []
			})
			// if we get success, change button text to "Added" for 1s, then close modal
			// change text to "Error" if no success
			const { msg } = response.data
			if (msg === "success") {
				setButtonText("Book Added!")
			}
			setTimeout(() => {
				setShowModal(false)
			}, 1000)
		} catch (error) {
			setButtonText("Error")
			setTimeout(() => {
				setShowModal(false)
			}, 1000)
			throw new Error(error)
		}

	}

	return (
			<Modal closeFn={()=>setShowModal(false)}>
				{/* X button on modal */}
				<div className={classes.closeButton}>
					<ButtonIcon onClick={()=>setShowModal(false)}><IoClose /></ButtonIcon>
				</div>

				<BookCoverArt coverID={coverID} title={title} />

				<div className={classes.info}>
					<div>
						<BookInfo title={title} author={author} yearPublished={yearPublished}/>
					</div>
					<div>
						<div className={classes.btn}>
							<Button onClick={addToLibrary}>{buttonText}</Button>
						</div>
					</div>
				</div>
				<BookLinks infoURL={infoURL} previewAvailable={previewAvailable} previewURL={previewURL}/>
				<BookDescription description={description} />
			</Modal>

	);
};

export default BookPreview;