import classes from "./styles/BookPreview.module.css"
import { Button, Backdrop, Modal, Card } from "../../ui";
import {useEffect, useState} from "react";
import { axiosAPI, axiosDB } from "../../utils/axios.js";
import { getBookDescription } from "../../utils/functions.js";
import ButtonPlain
	from "../../ui/ButtonPlain.jsx";

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
				<div className={classes.details}>
					<img className={classes.cover} src={coverImageLink} alt={title}/>
					<h2 className={classes.title}>{title}</h2>
					<h3 className={classes.author}>{author}</h3>
					<h4 className={classes.year}>{yearPublished}</h4>
				</div>
				{
					(seeMore && description) ?
					<div>
						{description}
						<ButtonPlain onClick={()=>setSeeMore(false)}>[See Less]</ButtonPlain>
					</div>
						:
					<div>
						{description?.substring(0, 350)} ...
						<ButtonPlain onClick={()=>setSeeMore(true)}>[See More]</ButtonPlain>
					</div>
				}

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

		</div>
	);
};

export default BookPreview;