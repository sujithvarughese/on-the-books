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

	const addToLibrary = async () => {
		console.log("Adding to library...");
		// create new book document in data (adding additional fields with default values to match fields in document)
		const response = await axiosDB.post("/library", {
			...book,
			status: "unread",
			rating: 0,
			bookNotes: []
		})
	}

	return (
		<div className={classes.container}>
			<Modal closeFn={()=>setShowModal(false)}>
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
							<Button onClick={addToLibrary}>Add to Library</Button>
						</div>
					</div>
				</div>
				<BookLinks infoURL={infoURL} previewAvailable={previewAvailable} previewURL={previewURL}/>
				<BookDescription description={description} />
			</Modal>

		</div>
	);
};

export default BookPreview;