import classes from "./styles/BookNoteItem.module.css";
import BookNoteContent from "./BookNoteContent.jsx";
import { useState } from "react";

const BookNoteItem = ({ note, updateBookDetails, bookNotesState, setBookNotesState }) => {

	const [showContent, setShowContent] = useState(false)
	const [bookNoteState, setBookNoteState] = useState(note)

	const editBookNote = (updatedBookNoteContent) => {
		const updatedBookNote = { ...note, content: updatedBookNoteContent }
		setBookNoteState(updatedBookNote)
		const index = bookNotesState.findIndex(noteInArray => noteInArray.title === note.title)
		const updatedBookNotes = [...bookNotesState]
		updatedBookNotes[index] = updatedBookNote
		updateBookDetails({ bookNotes: updatedBookNotes })
		setBookNotesState(updatedBookNotes)
	}

	const deleteBookNote = () => {
		const updatedBookNotes = bookNotesState.filter(noteInArray => noteInArray.title !== note.title)
		updateBookDetails({ bookNotes: updatedBookNotes })
		setBookNotesState(updatedBookNotes)
	}

	return (
		<div className={classes.bookNoteItem}>

			<div className={classes.title} onClick={()=>setShowContent(!showContent)}>
				{ !showContent && <div className={classes.arrow}>▽</div>}
				{ showContent && <div className={classes.arrow}>△</div>}

				{bookNoteState.title}
			</div>

			<div className={classes.content}>
				{
					showContent &&
					<BookNoteContent
						content={bookNoteState.content}
						editBookNote={editBookNote}
						deleteBookNote={deleteBookNote}
					/>
				}
			</div>


		</div>
	);
};

export default BookNoteItem;