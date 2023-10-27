import classes from "./styles/BookNotesList.module.css"
import { BookNoteItem, AddBookNoteForm } from "../../";
import { Button } from "../../../UI"
import { useEffect, useState } from "react";
import { axiosDB } from "../../../utils/axios.js";


const BookNotesList = ({ bookID, bookNotes, updateBookDetails }) => {

	const [showAddBookNoteForm, setShowAddBookNoteForm] = useState(false)
	const [bookNotesState, setBookNotesState] = useState(bookNotes)

	const hideForm = () => {
		setShowAddBookNoteForm(false)
	}

	const addBookNote = (newBookNote) => {
		const duplicateNote = bookNotesState.find(noteInArray => noteInArray.title === newBookNote.title)
		if (duplicateNote || !newBookNote.title) {
			console.log("Invalid Note");
			return
		}
		const updatedBookNotes = [...bookNotesState, newBookNote]
		updateBookDetails({ bookNotes: updatedBookNotes})
		setBookNotesState(updatedBookNotes)
	}

	return (
		<div className={classes.booknotes}>
			{
				!showAddBookNoteForm &&
				<div className={classes.btn}>
					<Button onClick={()=>setShowAddBookNoteForm(true)}>Add Note</Button>
				</div>

			}
			{
				showAddBookNoteForm && <AddBookNoteForm addBookNote={addBookNote} hideForm={hideForm}/>
			}

			{
				bookNotesState?.map((note, index) => {
					return (
						<BookNoteItem
							key={index}
							note={note}
							updateBookDetails={updateBookDetails}
							bookNotesState={bookNotesState}
							setBookNotesState={setBookNotesState}
						/>)
				})
			}

		</div>
	);
};

export default BookNotesList;