import classes from "./styles/BookModal.module.css"
import { Button, Backdrop, Modal, Card } from "../../ui";
import { useEffect } from "react";
import { axiosAPI, axiosDB } from "../../utils/axios.js";

// modal is used only for books in Discover (not in myLibrary)
const BookModal = ({ book, setShowModal }) => {
	console.log(book);
	const {
		title,
		author,
		coverID,
		yearPublished,
		infoURL,
		previewAvailable,
		previewURL
	} = book;

	const coverImageLink = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`

	const addToLibrary = async () => {
		console.log("Adding to library...");
		// create new book document in data (adding additional fields with default values to match fields in document)
		const response = await axiosDB.post("/library", {
			...book,
			status: "unread",
			rating: 0,
			bookNotes: []
		})
		console.log(response);
	}

	const closeModal = (e) => {
		setShowModal(false)
	}

	return (
		<div className={classes.container}>
		<Backdrop>
			<Modal>
				<div className={classes.details}>
					<img className={classes.cover} src={coverImageLink} alt={title}/>
					<h2 className={classes.title}>{title}</h2>
					<h3 className={classes.author}>{author}</h3>
					<h4 className={classes.year}>{yearPublished}</h4>
				</div>
				<div className={classes.getInfo}>
					<a href={infoURL} target="_blank" rel="noreferrer">
						<div className={classes.btn}>
							<Button>Info</Button>
						</div>

					</a>

					{  // check if preview is available, then only show Preview link
						previewAvailable !== "noview" &&
						<a href={previewURL} target="_blank" rel="noreferrer">
							<div className={classes.btn}>
								<Button>Preview</Button>
							</div>

						</a>
					}
				</div>

				<div className={classes.buttons}>
					<div className={classes.btn}>
						<Button onClick={addToLibrary}>Add Book</Button>
					</div>
					<div className={classes.btn}>
						<Button onClick={()=>setShowModal(false)}>Close</Button>
					</div>

				</div>
			</Modal>
		</Backdrop>
			</div>
	);
};

export default BookModal;