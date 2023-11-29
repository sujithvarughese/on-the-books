import classes from "./styles/BookNoteItem.module.css";
import NoteContent from "./NoteContent.jsx";
import { useState } from "react";

const NoteItem = ({ note, updateBookDetails, notebookState, setNotebookState }) => {

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
		<div className={classes.container}>

			<div className={classes.title} onClick={()=>setShowContent(!showContent)}>
				{ !showContent && <div className={classes.arrow}>▽</div>}
				{ showContent && <div className={classes.arrow}>△</div>}

				{bookNoteState.title}
			</div>

			<div className={classes.content}>
				{
					showContent &&
					<NoteContent
						content={bookNoteState.content}
						editBookNote={editBookNote}
						deleteBookNote={deleteBookNote}
					/>
				}
			</div>


		</div>
	);
};

export default NoteItem;