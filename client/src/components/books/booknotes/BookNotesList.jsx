import classes from "./styles/BookNotesList.module.css"
import { BookNoteItem, AddBookNoteForm } from "../../";
import { Button } from "../../../ui"
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
		<div className={classes.container}>
			<div className={classes.head}>
				<div className={classes.title}>
					Book Notes
				</div>
				{
					!showAddBookNoteForm &&
					<div className={classes.addButton}>
						<Button onClick={()=>setShowAddBookNoteForm(true)}>Create New Note</Button>
					</div>

				}
			</div>


			{
				showAddBookNoteForm && <AddBookNoteForm addBookNote={addBookNote} hideForm={hideForm}/>
			}

			{
				bookNotesState.length === 0 ?
					<div className={classes.text}>
						No Book Notes. Make one by pressing the Create button!
					</div>
					:
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